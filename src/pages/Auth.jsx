import { useState } from "react";
import Register from "../components/Auth/Register";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { app } from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
import Login from "../components/Auth/Login";
import bg from "../images/coffee.svg"
const Auth = () => {
    const [register,setRegister] = useState(true)
    const auth = getAuth(app)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    return (
        <div style={{backgroundImage:`url(${bg})`}} className="bg-primary min-h-[100vh] flex justify-center items-center ">
            <section className="bg-[#ffffff46] backdrop-blur-sm w-[60vw] min-h-[70vh] rounded-xl p-4">
                    {register ? <Register setRegister={setRegister}/> : <Login setRegister={setRegister}/>}
                    <div className="flex justify-center gap-6 mt-6">
                        <button onClick={() =>signInWithGoogle()} className="btn ">google</button>
                        <button onClick={() =>signInWithFacebook()} className="btn ">FB</button>
                        <button onClick={() =>signInWithGithub()} className="btn ">Github</button>
                    </div>
            </section>
        </div>
    );
};

export default Auth;