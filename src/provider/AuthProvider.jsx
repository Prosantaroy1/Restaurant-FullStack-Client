import React, { createContext,  useEffect,  useState,  } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from '../hook/useAxiosPublic';

export  const AuthContext= createContext(null);
const auth= getAuth(app);

// google
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    // axios
    const axiosPublic= useAxiosPublic();

    const [user, setUser]=useState(null);
    const[loading, setLoading]=useState(true);
    // google login
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // createUser
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signup
    const signInUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // update
    const updateUser=(name, photourl)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        })
    }
    // loginout
    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
       
    }
    // 
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log('current user', currentUser)
            setUser(currentUser)
            if(currentUser){
                const userInfo={email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                     if(res.data.token){
                         localStorage.setItem('access-token', res.data.token)
                         
                     }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
        })
        return ()=> unsubscribe();
    },[])
   
    
// 
    const authInfo={
        user,
        createUser,
        logOutUser,
        signInUser,
        loading,
        updateUser,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;