import { app } from "../../firebase/firebase.config";
import { getAuth, } from 'firebase/auth';
import { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
const Login = ({setRegister}) => {
    const navigate = useNavigate()
    const auth = getAuth(app);
    const [newUser,setNewUser] = useState({email:"",password:""})
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
     
      const handelChange = (e) =>{
            setNewUser(prev => ({
                ...prev,
                [e.target.name]:e.target.value
            }))
      }
      
      const handelCreateUser = async (e) =>{
        const {email,password} = newUser
            e.preventDefault();
            try {
                await signInWithEmailAndPassword(email,password);
                if(user){
                    return navigate('/dashboard')
                }
                
            } catch (error) {
                console.log(error);
            }
      }

    
    return (
        <div>
                <h2 className="text-2xl text-center">Login </h2>
            <form className="mt-6 space-y-4" onSubmit={handelCreateUser}>
            
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input onChange={(e)=>handelChange(e)} value={newUser.email} name="email" type="text" className="grow" placeholder="Email" required/>
                </label>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input onChange={(e)=>handelChange(e)} value={newUser.password} name="password" type="password" className="grow"  required/>
            </label>
            <label className=" flex justify-center ">
            
            <input type="submit" className="btn bg-primary hover:bg-secondary text-white border-0" value="Login" />
            </label>
        </form>
            <p onClick={()=>setRegister(true)} className="text-xs text-center mt-6 underline cursor-pointer">if you dont&apos;t have any account ? please Register!</p>
        </div>
    );
};

export default Login;