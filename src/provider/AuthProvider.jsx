import React, { createContext,  useEffect,  useState,  } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export  const AuthContext=createContext(null);
const auth= getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    // const[loading, setLoading]=useState(true);

    // createUser
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signup
    const signupUser=(email, password)=>{;
        return signInWithEmailAndPassword(auth, email, password);
    }
    // loginout
    const logOutUser=()=>{
        return signOut(auth)
       
    }
    // 
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log('current user', currentUser)
            setUser(currentUser);
        })
        return ()=> unsubscribe();
    },[])
   
    
// 
    const authInfo={
        user,
        createUser,
        logOutUser,
        signupUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;