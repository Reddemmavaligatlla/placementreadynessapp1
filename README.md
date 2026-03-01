# Kodflix - React + OMDB

A Kodnest-themed Netflix-style landing page built with React, Vite, and OMDB API for movie data. This version uses a minimal username/password login flow displayed on first visit (no buttons).
## Features

✅ **OMDB Integration** - Fetches real movie data from OMDB API (API Key: 7a4b4120)
✅ **Netflix UI** - Hero banner with background image, horizontally scrollable movie rows
✅ **Simple Login** - Username/password displayed first, minimal form
✅ **Protected Content** - Movie dashboard accessible only after login
✅ **Error Handling** - Proper validation messages
✅ **Context API** - Global authentication state management
✅ **React Hooks** - Functional component architecture
✅ **Kodflix Styling** - Dark theme, professional Netflix-inspired look

## Project Structure

```
src/
├── api/
│   └── omdb.js              # OMDB API helper functions
├── components/
│   ├── Header.jsx           # Navigation with Sign In / Logout
│   ├── Hero.jsx             # Hero banner section
│   ├── Row.jsx              # Horizontally scrollable movie row
│   ├── MovieCard.jsx        # Individual movie card
│   ├── AuthModal.jsx        # Login/Signup modal popup
│   └── PrivateWrapper.jsx   # Content protection & blur overlay
├── context/
│   └── AuthContext.jsx      # Auth state & functions (useAuth hook)
├── firebase.js              # Firebase config & auth instance
├── App.jsx                  # Main app with AuthProvider & PrivateWrapper
├── main.jsx                 # React entry point
└── styles.css               # All styling (Netflix theme)
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Verify OMDB Fetch (Optional)
```bash
npm run test:fetch
```
This confirms the OMDB API is reachable and returns real movie data from OMDB (not TMDB).

## Running the App

### Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173/` (or next available port).

After starting, the **login screen** appears first. Enter any username and password to continue.

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## How Authentication Works

### User Flow

1. **Page Load** → Content is blurred, "Sign In Now" button visible
2. **Click Sign In** → Modal popup appears with login form
3. **Toggle Sign Up** → Switch between Sign In and Sign Up forms
4. **Enter Credentials** → Email + Password (Sign Up includes Name field)
5. **Submit** → Loading spinner appears, Firebase auth processes
6. **Success** → Modal closes, navbar shows user name + Logout button, content unblurs
7. **Click Logout** → User logged out, content blurs again

### Error Messages

The app shows user-friendly error messages:
- **Invalid email** - Email format is incorrect
- **Weak password** - Password must be at least 6 characters
- **Wrong password** - Incorrect password for the account
- **User not found** - No account with that email
- **Email already in use** - Sign up with existing email

### Firebase Configuration

The app uses Firebase Authentication configured in `src/firebase.js`. To connect your own Firebase project:

1. Create a Firebase project at https://firebase.google.com/
2. Enable Authentication (Email/Password method)
3. Update the `firebaseConfig` in `src/firebase.js` with your project credentials:

```javascript
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
}
```

## Component Details

### AuthContext.jsx
- `useAuth()` hook provides: `user`, `loading`, `authLoading`, `error`, `showModal`, `setShowModal`, `signIn()`, `signUp()`, `logout()`
- Validates email format and password strength
- Handles Firebase error codes and converts to user-friendly messages

### AuthModal.jsx
- Centered modal with backdrop blur
- Toggle between Sign In and Sign Up
- Form validation and loading state
- Close button (top-right) or click outside modal

### PrivateWrapper.jsx
- Blurs Hero + Rows content when user is not logged in
- Shows overlay with "Sign In Now" button
- Automatically closes when user authenticates

### Header.jsx
- Shows "Sign In" button when logged out
- Shows user name + "Logout" button when logged in
- Click Sign In opens AuthModal

## Styling

All styles use Netflix's dark theme:
- Background: `#111`
- Accent: `#e50914` (Netflix Red)
- Muted text: `#b3b3b3`
- Hover effects on buttons and navigation

Modal includes:
- Centered container with dark background
- Form inputs with focus states
- Loading spinner animation
- Error message styling
- Smooth transitions

## Technologies

- **React 18.2.0** - UI library
- **Vite 4.4.9** - Build tool & dev server
- **Firebase 10.7.0** - Authentication
- **OMDB API** - Movie data

## Notes

- The app fetches real movie data from OMDB on every page load
- Authentication state persists across page refreshes via Firebase
- Modal prevents interaction with background content (non-clickable)
- All functions use React Hooks (no class components)
- No external UI libraries; pure CSS styling

## Troubleshooting

**Modal not showing?**
- Ensure `AuthProvider` wraps `AppContent` in `App.jsx`
- Check browser console for errors

**Firebase errors?**
- Verify Firebase config in `src/firebase.js`
- Check that Email/Password auth method is enabled in Firebase console
- Ensure Internet connection is active

**OMDB movies not loading?**
- API key might be rate-limited; wait a few seconds
- Check `src/api/omdb.js` for the API endpoint

**Content always blurred?**
- Check user state in browser dev tools React tab
- Verify Firebase auth state persists on reload

---

**Built with** ❤️ **using React + Firebase + OMDB**
