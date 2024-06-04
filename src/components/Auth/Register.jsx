import { app } from "../../firebase/firebase.config";
import { getAuth, } from 'firebase/auth';
import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile ,useAuthState } from 'react-firebase-hooks/auth';
import { insert_user_Db } from "../../utils/create_user_Db";
import { useNavigate } from "react-router-dom";
const Register = ({setRegister}) => {
    const navigate = useNavigate();
    const [error,setError] = useState('')
    const auth = getAuth(app);
    const [newUser,setNewUser] = useState({email:"",password:"",displayName:""})
    const [
        createUserWithEmailAndPassword,_,errorCreate] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile] = useUpdateProfile(auth);
      const [user, ] = useAuthState(auth);
      const handelChange = (e) =>{
            setNewUser(prev => ({
                ...prev,
                [e.target.name]:e.target.value
            }))
      }
      
      const handelCreateUser = async (e) =>{
        const {email,password,displayName} = newUser
            e.preventDefault();
            try {
               const create_user =  await createUserWithEmailAndPassword(email,password);
                
                if(create_user){
                   const updatedUser =  await updateProfile({ displayName })

                    if(updatedUser){
                       const result = await  insert_user_Db(newUser)

                       if(result){
                        navigate("/dashboard", {replace:true})
                       }

                    }
                 }else{
                    setError('error from firebase')
                 }
            } catch (error) {
                console.log(error);
            }
      }

    return (
        <div>
                <h2 className="text-2xl text-center">Register</h2>
            <form className="mt-6 space-y-4" onSubmit={handelCreateUser}>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input onChange={(e)=>handelChange(e)} value={newUser.displayName} name="displayName" type="text" className="grow" placeholder="Username" required/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input onChange={(e)=>handelChange(e)} value={newUser.email} name="email" type="text" className="grow" placeholder="Email" required/>
                </label>
            <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input onChange={(e)=>handelChange(e)} value={newUser.password} name="password" type="password" className="grow"  required/>
            </label>
            <label className=" flex justify-center ">
            
            <input type="submit" className="btn bg-primary hover:bg-secondary text-white border-0" value="Register" />
            </label>
        </form>
            {error && <p>{JSON.stringify(error)}</p>}
            <p onClick={()=>setRegister(false)} className="text-xs text-center mt-6 underline cursor-pointer">if you have alrady account ? please Login!</p>
        </div>
    );
};

export default Register;