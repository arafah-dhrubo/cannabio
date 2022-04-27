import { useState, useEffect } from "react";
import firebaseInitializer from "../Firebase/firebase.init";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    signInWithEmailAndPassword
} from "firebase/auth"
firebaseInitializer()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    })

   

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        user,
        setUser,
        error,
        setError,
        auth,
        signInWithPopup,
        createUserWithEmailAndPassword,
        setIsLoading,
        logout,
        updateProfile,
        signInWithEmailAndPassword,
        googleProvider,
        isLoading
    }
}

export default useFirebase;