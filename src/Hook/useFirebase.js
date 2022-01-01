import { useState, useEffect } from "react";
import initializeFirebase from "../Page/LoginAndRegistration/Firebase/firebase.init";
import {
    getAuth, createUserWithEmailAndPassword,
    updateProfile, signInWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup,
    onAuthStateChanged, signOut, getIdToken
} from "firebase/auth";
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoding] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, name, age, phone, address,
        licence, area, nidpic,
        profilepic, carinfo, typeofvecale, userType, history) => {
        setIsLoding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to database
                saveUser(email, name, age, phone, address, licence, area, nidpic,
                    profilepic, carinfo, typeofvecale, userType, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history('/');
                setAuthError('');
                // ...
            })
            .catch((error) => {

                setAuthError(error.message);
                // ..
            }).finally(() => setIsLoding(false));
    }
    // Login User

    const loginUser = (email, password, location, history) => {
        setIsLoding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoding(false));
    }
    //Google Sign In
    const signInWithGogle = (location, history) => {
        setIsLoding(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history(destination);
                const user = result.user;
                //save user to database
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                // ...
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoding(false));
    }
    // observer user state
    // observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoding(false);
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setIsLoding(true);
        signOut(auth).then(() => {

        }).catch((error) => {

        }).finally(() => setIsLoding(false));
    }
    const saveUser = (email, displayName, age, phone, address, licence, area, nidpic,
        profilepic, carinfo, typeofvecale, userType, method) => {
        const user = {
            email, displayName, age, phone, address, licence, area, nidpic,
            profilepic, carinfo, typeofvecale, userType,
        };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    return {
        isLoading,
        user,
        authError,
        admin,
        token,
        signInWithGogle,
        registerUser,
        loginUser,
        logOut,
    }
}
export default useFirebase;