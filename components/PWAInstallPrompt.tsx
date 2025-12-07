'use client';

import { useEffect, useState } from 'react';
import { X, Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after 10 seconds if not dismissed
      setTimeout(() => {
        const dismissed = localStorage.getItem('pwaPromptDismissed');
        if (!dismissed) {
          setShowPrompt(true);
        }
      }, 10000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('App is running in standalone mode');
    }

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwaPromptDismissed', 'true');
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[60] animate-slide-up">
      <div className="bg-white rounded-2xl shadow-elevated border-2 border-primary-100 p-4 md:p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Download className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-bold text-forest-700 text-sm md:text-base">
                Install CUBES App
              </h3>
              <p className="text-xs md:text-sm text-neutral-600">
                Add to your home screen
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-neutral-400 hover:text-neutral-600 transition-colors touch-manipulation p-1"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs md:text-sm text-neutral-600 mb-4">
          Get quick access and a native app experience on your device.
        </p>

        <div className="flex gap-2">
          <button
            onClick={handleInstall}
            className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 active:scale-95 text-sm touch-manipulation"
          >
            Install
          </button>
          <button
            onClick={handleDismiss}
            className="px-4 py-2.5 text-neutral-600 hover:text-neutral-800 font-medium transition-colors text-sm touch-manipulation"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
