export const send_token = () =>{
    const token = localStorage.getItem('tkn');
    return {
        "content-type":"application/json",
        authorization: `bearer ${token}`
    }
      
}