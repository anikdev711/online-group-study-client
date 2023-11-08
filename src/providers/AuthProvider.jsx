import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../config/firebase.config";
import axios from "axios";
// import useAxios from "../hooks/useAxios";



export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    // const axios = useAxios();

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    //create user
    const createGroupStudyUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //user sign in by email and password
    const signInGroupStudyUserByEmailPassword = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //user google sign in [A social sign in]
    const signInGroupStudyUserByGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, provider);
    }



    //user log out
    const signOutGroupStudyUser = () => {
        setIsLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const signedInCurrentUser = {
                email: userEmail
            }
            console.log('The present user is now', currentUser);
            setUser(currentUser);
            setIsLoading(false);

            if (currentUser) {
                axios.post('http://localhost:5000/api/v1/auth/user-token', signedInCurrentUser, {
                    withCredentials: true
                })
                    .then((response) => {
                        console.log(response);
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
            else {
                axios.post('http://localhost:5000/api/v1/auth/logout', signedInCurrentUser, {
                    withCredentials: true

                })
                    .then((response) => {
                        console.log(response);
                        console.log(response.data);
                    })

            }

        })
        return () => {
            return unSubscribe();
        }
    }, [user?.email])




    const authInfo = {
        user,
        isLoading,
        createGroupStudyUser,
        signInGroupStudyUserByEmailPassword,
        signOutGroupStudyUser,
        signInGroupStudyUserByGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;