'use client';

import { Check } from 'lucide-react';

interface SuccessCheckmarkProps {
  show: boolean;
  message?: string;
}

const SuccessCheckmark = ({ show, message = 'Success!' }: SuccessCheckmarkProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative bg-white rounded-3xl p-8 shadow-2xl max-w-sm w-full text-center animate-scale-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center animate-scale-in">
            <Check size={32} className="text-white" strokeWidth={3} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-forest-700 mb-2">
          {message}
        </h3>
        <p className="text-neutral-600">
          We&apos;ll get back to you shortly.
        </p>
      </div>
    </div>
  );
};

export default SuccessCheckmark;
