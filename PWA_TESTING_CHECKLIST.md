# PWA Testing Checklist for CUBES

## Pre-Testing Setup

- [ ] App is running in production mode (`npm run build && npm start`)
- [ ] Accessed via HTTPS or localhost
- [ ] Service worker is registered (check DevTools → Application)
- [ ] Manifest.json is accessible at `/manifest.json`

---

## 📱 iOS Testing (Safari)

### Installation
- [ ] Open website in Safari on iPhone/iPad
- [ ] Tap Share button (square with arrow up)
- [ ] "Add to Home Screen" option is available
- [ ] Can customize app name before adding
- [ ] App icon appears on home screen
- [ ] App icon looks correct and not distorted

### Standalone Mode
- [ ] Opening from home screen launches without Safari UI
- [ ] No address bar or browser controls visible
- [ ] Status bar color matches theme (#2D5016)
- [ ] App fills entire screen properly
- [ ] Notch/safe areas handled correctly

### Functionality
- [ ] All pages navigate smoothly
- [ ] Back button works within app
- [ ] External links open in Safari (not in app)
- [ ] Forms submit correctly
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] No layout issues

---

## 🤖 Android Testing (Chrome)

### Installation Prompt
- [ ] Install banner appears after 10 seconds
- [ ] Can dismiss prompt with "Not now"
- [ ] Prompt can be triggered from menu → "Install app"
- [ ] App name is correct
- [ ] App icon displays properly in prompt

### Installation
- [ ] App installs successfully
- [ ] Icon appears in app drawer
- [ ] Icon appears on home screen
- [ ] App name is "CUBES"
- [ ] App icon is clear and properly sized

### Standalone Mode
- [ ] Opens without Chrome UI
- [ ] No address bar visible
- [ ] Status bar color is forest green (#2D5016)
- [ ] Navigation bar adapts to app
- [ ] Fullscreen experience maintained

### Functionality
- [ ] All navigation works
- [ ] Back button behaves correctly
- [ ] Can switch between apps and return
- [ ] Swipe gestures work (if enabled)
- [ ] No crashes or freezes
- [ ] Smooth performance

---

## 💻 Desktop Testing (Chrome/Edge)

### Installation
- [ ] Install icon (⊕) appears in address bar
- [ ] Can install via browser menu
- [ ] App opens in its own window
- [ ] Window has proper title
- [ ] App icon in taskbar/dock

### Window Behavior
- [ ] Can resize window
- [ ] Can minimize/maximize
- [ ] Window remembers size/position
- [ ] Proper window controls
- [ ] Separate from browser

---

## 🔌 Offline Functionality

### Initial Load
- [ ] Visit all main pages while online
- [ ] Service worker installs successfully
- [ ] Resources are cached (check DevTools)

### Going Offline
- [ ] Turn off WiFi/airplane mode
- [ ] Reload landing page (should work)
- [ ] Navigate to contact page (should work)
- [ ] Navigate to products page (should work)
- [ ] Images load from cache
- [ ] Styles are applied correctly

### Network Recovery
- [ ] Turn WiFi back on
- [ ] App updates when online
- [ ] Service worker updates in background
- [ ] No errors or broken state

---

## 📏 Responsive Design

### Mobile Portrait (320-428px)
- [ ] No horizontal scrolling
- [ ] Text is readable without zoom
- [ ] Buttons are easily tappable (44px+)
- [ ] Forms are usable
- [ ] Images scale properly
- [ ] Cards stack vertically
- [ ] Navigation menu works

### Mobile Landscape
- [ ] Layout adjusts appropriately
- [ ] Content is accessible
- [ ] No layout breaks
- [ ] Navigation still usable

### Tablet (768-1024px)
- [ ] Uses tablet-specific layouts
- [ ] 2-column grids where appropriate
- [ ] Proper spacing
- [ ] Images scale well

### Desktop (1024px+)
- [ ] Full desktop layout active
- [ ] 3-column grids working
- [ ] Sidebar appears where expected
- [ ] Proper max-width constraints

---

## ⚡ Performance

### Loading Speed
- [ ] Initial load under 3 seconds
- [ ] Cached pages load instantly
- [ ] Images load progressively
- [ ] No layout shifts (CLS)
- [ ] Smooth animations (60fps)

### Interactions
- [ ] Buttons respond immediately
- [ ] Forms have instant feedback
- [ ] Scrolling is smooth
- [ ] No janky animations
- [ ] Touch events are responsive

---

## 🎨 Visual Quality

### Landing Page
- [ ] Hero section looks professional
- [ ] Interactive step slider works
- [ ] Stats animate properly
- [ ] Benefit cards are aligned
- [ ] Product cards display correctly
- [ ] CTA section is prominent

### Contact Page
- [ ] Sidebar widgets are functional
- [ ] Team status shows correct time
- [ ] Map loads and is interactive
- [ ] Form has proper focus states
- [ ] FAQ accordion animates smoothly
- [ ] Submit button has 3 states

### Navigation
- [ ] Logo is clear and properly sized
- [ ] Menu items are aligned
- [ ] Mobile menu animates smoothly
- [ ] Active states are visible
- [ ] Hover effects work on desktop

---

## 🔧 Technical Checks

### Service Worker
- [ ] Registered successfully
- [ ] No console errors
- [ ] Caching strategies active
- [ ] Updates on refresh
- [ ] Proper scope (/)

### Manifest
- [ ] Accessible at `/manifest.json`
- [ ] All required fields present
- [ ] Icons all available
- [ ] Theme color correct
- [ ] Display mode is standalone

### Meta Tags
- [ ] Viewport meta present
- [ ] Theme color meta present
- [ ] Apple touch icon meta present
- [ ] Apple web app capable present
- [ ] Proper favicon links

### Console
- [ ] No JavaScript errors
- [ ] No broken image requests
- [ ] No 404s for resources
- [ ] Service worker logs appear
- [ ] PWA install event fires

---

## 🛡️ Security

- [ ] Served over HTTPS (production)
- [ ] No mixed content warnings
- [ ] External links use rel="noopener"
- [ ] Forms use proper validation
- [ ] No exposed API keys

---

## ♿ Accessibility

### Keyboard Navigation
- [ ] Can tab through all interactive elements
- [ ] Focus states are visible
- [ ] Can use keyboard to navigate menu
- [ ] Forms are keyboard accessible
- [ ] Modal can be closed with Escape

### Screen Readers
- [ ] Images have alt text
- [ ] Buttons have descriptive labels
- [ ] Form labels are associated
- [ ] Headings are in proper order
- [ ] ARIA labels where needed

---

## 📊 Lighthouse Audit

Run Lighthouse in DevTools (mobile + desktop):

### Performance
- [ ] Score 90+ (mobile)
- [ ] Score 95+ (desktop)
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Total Blocking Time < 200ms

### PWA
- [ ] Score 100 (or close)
- [ ] Installable
- [ ] Service worker registered
- [ ] Works offline
- [ ] Proper icons
- [ ] Splash screen configured

### Accessibility
- [ ] Score 90+
- [ ] No critical issues
- [ ] Proper contrast ratios
- [ ] Touch targets 44px+

### Best Practices
- [ ] Score 95+
- [ ] HTTPS used
- [ ] No console errors
- [ ] Images properly sized

### SEO
- [ ] Score 90+
- [ ] Meta descriptions present
- [ ] Proper heading structure
- [ ] Mobile friendly

---

## 🎯 User Experience Testing

### First-Time User
- [ ] Landing page clearly explains product
- [ ] Navigation is intuitive
- [ ] CTA buttons are obvious
- [ ] Forms are easy to complete
- [ ] Can find contact information easily

### Return User
- [ ] App launches quickly from home screen
- [ ] Content loads from cache
- [ ] Smooth app-like experience
- [ ] No disruption from updates

### Edge Cases
- [ ] Slow 3G connection works
- [ ] Offline → online transition smooth
- [ ] App updates don't break experience
- [ ] Error states are handled gracefully

---

## ✅ Sign-Off Checklist

- [ ] All core functionality works
- [ ] No critical bugs found
- [ ] Performance is acceptable
- [ ] Responsive on all tested devices
- [ ] PWA installable on iOS and Android
- [ ] Offline mode functional
- [ ] No console errors
- [ ] Lighthouse scores meet targets
- [ ] User experience is smooth
- [ ] Ready for production

---

## 📝 Notes

**Tested By**: _______________  
**Date**: _______________  
**Devices Used**: _______________  
**Issues Found**: _______________  
**Overall Status**: ⭕ Pass / ❌ Fail

---

## 🐛 Issue Tracking

If you find issues, document them here:

| Issue | Severity | Device | Status |
|-------|----------|--------|--------|
| | | | |
| | | | |
| | | | |

**Legend**:
- **Critical**: Blocks usage
- **High**: Major impact
- **Medium**: Noticeable issue
- **Low**: Minor cosmetic

---

**Remember**: Test on real devices, not just browser dev tools! Emulators miss many PWA-specific behaviors.
