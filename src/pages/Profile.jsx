import { getAuth } from "firebase/auth";
import { useAuthState, useUpdatePassword } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import { URL_PATH } from "../utils/URL";
import { send_token } from "../utils/send_token";
import EditProfile from "../components/Profile/EditProfile";
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
    const auth = getAuth(app);
    const [profileUpdate,setProfileUpdate] = useState(false)
    const [user] = useAuthState(auth);
    const [loading,setLoading] = useState(false)
    const [userData,setUserData] =useState({}) ;
    const [updatepass,setUpdatePass] = useState(false);
    const [password,setpassword] = useState('')
    const [updatePassword, updating, error_password_change] = useUpdatePassword(auth);
    


    const update_password = async () =>{
            try{
                const update_pass = password.trim();
               const result =  await updatePassword(update_pass);
               if(!result || error_password_change){
                toast(error_password_change.message)
               }else{
                toast(updating,"-----", result)
               }
            }catch(error){
                console.log(error);
            }
    }   

    useEffect(()=>{
        setLoading(true)
        const fetch_user = async ()=>{
            
            try {
                const response = await fetch(`${URL_PATH}/api/user`,{
                    method:"GET",
                    headers:{
                        ...send_token(),
                        email: user.email
                    }
                })

                const data = await response.json()
                setUserData({ phone:'',address:'',...data.result})
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        if(user){
            
            fetch_user()
        }
        
    },[user,profileUpdate])
    
        if(loading) return 
       
    return (
        <div>
            <section className="min-h-[80vh] mx-8 mt-6  bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
           {!profileUpdate ? <div>
            <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">few second ago</span>
            <span onClick={()=> setProfileUpdate(true)} className="text-emerald-400 cursor-pointer " title="update profile">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
        </div>
        <div className="mt-6 w-fit mx-auto">
            <img src={userData?.photoURL || user?.photoURL} className="rounded-full w-28 " alt="profile picture" srcSet="" />
        </div>

        <div className="mt-8 ">
            <h2 className="text-white text-center font-bold text-2xl tracking-wide">{userData?.displayName}</h2>
        </div>
        <p className="text-emerald-400 text-2xl font-semibold text-center mt-2.5" >
            {userData?.email}
        </p>

        
        <div className="mt-3 text-white text-sm text-center">
            <span className="text-gray-400 font-semibold">Phone: </span>
            <span className="text-gray-400 font-semibold"> {userData?.phone}</span>
            
        </div>
        <div className="mt-3 text-white text-sm text-center">
            <span className="text-gray-400 font-semibold">Address: </span>
            <span className="text-gray-400 font-semibold"> {userData?.address}</span>
            
        </div>
        <div className="h-1 w-full bg-black mt-8 rounded-full">
            <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>

           {!updatepass ? <button onClick={()=>setUpdatePass(true)} className="btn btn-xs block mx-auto mt-6 text-gray-300">change password</button> :
           <div className="w-full flex justify-center mt-6">
           <input onChange={(e) => setpassword(e.target.value)} type="text" className=" btn-sx"/>
            <button disabled={updating} onClick={update_password} className="btn rounded-none bg-primary text-gray-200 btn-xs">
            update now
           </button>
           <button onClick={()=>setUpdatePass(false)} className="ml-6 border px-2 text-gray-200">back</button>
           </div>
        }
        </div>
            </div>
        : <EditProfile profile={userData} setProfileUpdate={setProfileUpdate}/>   
        }

    </section>
        <Toaster/>
        </div>
    );
};

export default Profile;