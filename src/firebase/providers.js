import { async, FirebaseError } from '@firebase/util';
import {createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { firebaseAuth } from './config'


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(firebaseAuth,googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        // console.log("🚀 ~ file: providers.js:12 ~ signInWithGoogle ~ credentials:", credentials)
        // const user = result?.user
        // console.log("🚀 ~ file: providers.js:14 ~ signInWithGoogle ~ user:", user)
        const {displayName,email,photoURL,uid} = result?.user;
        return{
            ok:true,
            displayName,
            email,
            photoURL,
            uid
        }
    }catch (error){
        const errorMessage = error?.message
        return{
            ok:false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({email,password,displayName}) => {
    try {
        const res = await createUserWithEmailAndPassword(firebaseAuth,email,password)  
        const {uid,photoURL} = res?.user
        return{
            ok:true,
            uid,
            photoURL,
            email
        }
    } catch (error) {
        console.log("🚀 ~ file: providers.js:36 ~ registerUserWithEmailPassword ~ error:", error)
        return{
            ok:false
        }
    }
}