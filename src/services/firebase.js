// ─────────────────────────────────────────────────────────────
// Inicialização do Firebase
// ─────────────────────────────────────────────────────────────
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBsoYIKypQCLHDLjTRmSoKTE9-By8XrzOs",
  authDomain: "site-contec-a5062.firebaseapp.com",
  projectId: "site-contec-a5062",
  storageBucket: "site-contec-a5062.firebasestorage.app",
  messagingSenderId: "273892068303",
  appId: "1:273892068303:web:61a1ae187561c7a2f260ba"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
