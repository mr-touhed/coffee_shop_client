import { useState } from 'react';
import { URL_PATH } from '../../utils/URL';
import { send_token } from '../../utils/send_token';
import toast, { Toaster } from 'react-hot-toast';
const EditProfile = ({profile, setProfileUpdate}) => {
    const [updateData,setUpdateData] = useState(profile);
    console.log({profile});
    const handelChange = (e) =>{
        setUpdateData(prev => ({
            ...prev,
            [e.target.name]:e.target.value
    }))
    }


    const handel_update = async (e) =>{
        e.preventDefault()
            try {
                const response = await fetch(`${URL_PATH}/api/user/${updateData._id}`,{
                    method:"PATCH",
                    headers:send_token(),
                    body: JSON.stringify(updateData)
                })
                const result = await  response.json();
                if(result.status){
                    toast('your profile now updated !')
                }
            } catch (error) {
                console.log(error);
            }
    }

    return (
        <div>
                <button onClick={()=>setProfileUpdate(false)} className=' text-gray-200'>Back</button>
            <div className="avatar flex justify-center pb-6">
  <div className="w-64 rounded-full">
    <img src={updateData?.img || ''} alt='profile image'/>
  </div>
</div>
            <form onSubmit={handel_update} className='max-w-[500px] mx-auto flex flex-col gap-6'>
            <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow" placeholder="display name" value={updateData.displayName} readOnly/>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" placeholder="email" value={updateData.email} readOnly/>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                Phone 
                <input onChange={(e) =>handelChange(e)} type="text" name="phone" className="grow" placeholder="phone number" value={updateData.phone}/>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                Addresss 
                <input onChange={(e) =>handelChange(e)} type="text" name="address" className="grow" placeholder="address" value={updateData.address}/>
                </label>
                <input type="submit" className="grow btn text-white" value="update Profile" />
            </form>
            <Toaster />
        </div>
    );
};

export default EditProfile;