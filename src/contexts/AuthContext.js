import React, { useContext, createContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore'
const AuthContext = createContext();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUSer] = useState();
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState("-1");
    const [userRoleList, setUserRoleList] = useState([]);
    const [updateUseEffect, setUpdateUseEffect] = useState(true);
    const userCollectionRef = collection(db, "usertype");
    const jobSeekerCollectionRef = collection(db, "Job_Seeker");
    const createJobSeeker = async (obj) => {
        await addDoc(jobSeekerCollectionRef, obj)
        setUpdateUseEffect(!updateUseEffect);
    }
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUserRoleList(data.docs.map((doc => ({ ...doc.data(), id: doc.id }))))
        }
        getUsers();
    }, [updateUseEffect])

    const createUser = async (em) => {
        await addDoc(userCollectionRef, { email: em, type: type })
        setUpdateUseEffect(!updateUseEffect);
    }
    // const deleteUserType = async () => {
    //     const x = userRoleList.filter((u) => {
    //         return u.email === currentUser.email;
    //     })
    //     console.log("Type of Deleted Id ", typeof (x[0].id));
    //     console.log("Deleted Id", x[0].id);
    //     const userDoc = doc(db, "usertype", x[0].id)
    //     await deleteDoc(userDoc);
    //     setUpdateUseEffect(!updateUseEffect)
    // }
    function signup(email, password) {
        //createUser(email);
        return auth.createUserWithEmailAndPassword(email, password);

    }
    async function login(email, password) {
        const res = await auth.signInWithEmailAndPassword(email, password);
        console.log(res.user.multiFactor.user.uid)
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout() {
        setUpdateUseEffect(!updateUseEffect)
        setType("-1");
        return auth.signOut();
    }
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }
    // function updateEmail(email) {

    //     return currentUser.updateEmail(email);
    // }
    // function updatePassword(password) {
    //     return currentUser.updatePassword(password);
    // }
    // function deleteUser() {
    //     // const x = userRoleList.filter((u) => {
    //     //     return u.email == currentUser.email;
    //     //   })
    //     //   deleteUserType(x[0].id);
    //     setType("-1")
    //     return auth.currentUser.delete();

    // }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setLoading(false)
            setCurrentUSer(user);
        })
        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        // updateEmail,
        // updatePassword,
        // deleteUser,
        setType,
        type,
        userRoleList,
        userCollectionRef,
        createUser,
        // deleteUserType,
        updateUseEffect,
        setUpdateUseEffect,
        createJobSeeker,
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>

    );
}