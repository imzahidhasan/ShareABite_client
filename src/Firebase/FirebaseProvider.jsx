import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
export const FirebaseContext = createContext(null)
import auth from './firebase.config'
import axios from 'axios'


const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }
    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const githubLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, async (data) => {
            const email = data.email;
            await axios.post('https://share-ab-ite-server.vercel.app/jwt', { email }, { withCredentials: true })
            if (data) {
                setUser(data)
            }
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const AllValues = {
        createUser,
        googleLogin,
        githubLogin,
        loginUser,
        updateUser,
        logout,
        user,
        setUser,
        loading,
        setLoading
    }

    return (
        <FirebaseContext.Provider value={AllValues}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseProvider