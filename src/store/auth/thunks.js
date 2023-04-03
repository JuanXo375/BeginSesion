import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { chekingCredentials, login } from "./authSlice";

export const chekingAuthentications = () => {
    return async(dispatch) =>{
        dispatch(chekingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(chekingCredentials())
        const result = await signInWithGoogle()
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = (values) => {
    return async(dispatch) => {
        const resp = await registerUserWithEmailPassword(values)
        console.log("🚀 ~ file: thunks.js:21 ~ returnasync ~ resp:", resp)
    }
}
