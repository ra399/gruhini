import { auth, db } from "./firebase";
import { createContext, useContext, useEffect , useState } from 'react';
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, onAuthStateChanged, 
    sendPasswordResetEmail } from 'firebase/auth';
import { doc, setDoc  } from 'firebase/firestore';

//1. creating a context using createContext()
export const AuthContext = createContext("");

//creating the provider component
export function Authentication ({child}) {

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout(){
       return signOut(auth)
    }

    function forgetPassword(email){
        return sendPasswordResetEmail(auth, email);
    }

    //updating the user on every auth change     
    const [user, setUser] = useState((JSON.parse(localStorage.getItem("user")) || null));
        
        useEffect(() => {
                            //will either return null or a user 
        const unsubsribe = onAuthStateChanged(auth,(u)=>{
            localStorage.setItem("user", JSON.stringify(u));
            setUser(u);
        })
        return () => {
            unsubsribe();
        }
        }, [])

        function userDoc(email,name,location,value){
            const colors = ['#22558A', '#3C0D43', '#513655', '#53AABB', '#56669D', '#69C7C7', '#97C1C8', '#EE8CB3',  '#FA9490', '#FFA7A6']
            const uid = value.user.uid;
            const data = {
                id : uid,
                email: email,
                name : name,
                avatar : colors[Math.floor(Math.random() * 10)],
                array : [],
                products : [],
                location: location
                }; 
            //adding a document with doc id as uid
            async function storeUserData(){
                const newUser = doc(db, 'users', uid)
                await setDoc(newUser, data);
              }
              storeUserData();
        }
    
    return (
        //2. return a provider component to use this in diff 
        //compo's by passing them as props
        <AuthContext.Provider value={{user,userDoc, signUp, logIn, logout, forgetPassword}}>
            {child}
        </AuthContext.Provider>
    )
}

// 3. create a custom hook to use this context
export function useAuthContext(){
    return useContext(AuthContext);  
}