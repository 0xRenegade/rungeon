import { useState, useEffect } from "react";
import firebase from "./firebase";
import { useRouter } from "next/router";

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email,
});

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false);
    };
    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    };

    const signInWithEmailAndPassword = (email, password) =>
        firebase.auth().signInWithEmailAndPassword(email, password);

    const createUserWithEmailAndPassword = (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password);

    const signOut = () => firebase.auth().signOut().then(router.push("/"));

    useEffect(() => {
        const unsubscribe = firebase
            .auth()
            .onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
    };

    // listen for firebase state change
    // useEffect(() => {
    //     const unsubscribe = firebase
    //         .auth()
    //         .onAuthStateChanged(authStateChanged);
    //     return () => unsubscribe();
    // }, []);

    // return {
    //     authUser,
    //     loading,
    // };
}
