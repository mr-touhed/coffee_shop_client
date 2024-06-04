import { URL_PATH } from "./URL";

export const insert_user_Db = async (newUser) =>{
    try {
        const response = await fetch(`${URL_PATH}/api/user`,{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(newUser)
        });

                await response.json();
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}