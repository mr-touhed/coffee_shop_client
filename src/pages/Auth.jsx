import { useState } from "react";
import Register from "../components/Auth/Register";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { app } from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
import Login from "../components/Auth/Login";
import bg from "../images/coffee.svg"
import { insert_user_Db } from "../utils/create_user_Db";
import { useNavigate } from "react-router-dom";
import fbIcon from "../images/icons/facebook.png"
import gmailIcon from "../images/icons/google.png"
import githubIcon from "../images/icons/github.png"

const Auth = () => {
    const navigate = useNavigate()
    const [register,setRegister] = useState(false)
    const auth = getAuth(app)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    const handel_gmail = async () =>{
        try {
            const login = await signInWithGoogle();

            if(login){
                const {email,displayName} = login.user
                const userData = {email,displayName}
                const result =await insert_user_Db(userData)
                if(result){
                    
                    navigate("/dashboard", {replace:true})
                }
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div style={{backgroundImage:`url(${bg})`}} className="bg-primary min-h-[100vh] flex justify-center items-center ">
            <section className="bg-[#ffffff46] backdrop-blur-sm w-[60vw] min-h-[70vh] rounded-xl p-4">
                    {register ? <Register setRegister={setRegister}/> : <Login setRegister={setRegister}/>}
                    <div className="flex flex-col justify-center gap-2 mt-6">
                        <button onClick={handel_gmail} className="btn bg-white flex  items-center ">
                            <img src={gmailIcon} alt="" className="w-6"/>
                            <span className="text-gray-700">Gmail</span>
                            </button>
                        <button onClick={() =>signInWithFacebook()} className="btn bg-white flex  items-center  ">
                        <img src={fbIcon} alt="" className="w-6"/>
                            <span className="text-gray-700">Facebook</span>
                        </button>
                        <button onClick={() =>signInWithGithub()} className="btn bg-white flex  items-center  ">
                        <img src={githubIcon} alt="" className="w-6"/>
                            <span className="text-gray-700">Github</span>
                            </button>
                    </div>
            </section>
        </div>
    );
};

export default Auth;