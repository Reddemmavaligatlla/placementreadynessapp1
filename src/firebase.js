import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDj7QxY8Zp-K9w_Ld5M0N1O2P3Q4R5S6T7',
  authDomain: 'netflix-clone-react.firebaseapp.com',
  projectId: 'netflix-clone-react',
  storageBucket: 'netflix-clone-react.appspot.com',
  messagingSenderId: '987654321098',
  appId: '1:987654321098:web:123abc456def789ghi'
}

let app
let auth

try {
  app = initializeApp(firebaseConfig)
  auth = getAuth(app)
} catch (error) {
  console.error('Firebase initialization error:', error)
  console.warn('Firebase not configured. Please update firebaseConfig in src/firebase.js with your own credentials.')
}

export { auth, app as default }
