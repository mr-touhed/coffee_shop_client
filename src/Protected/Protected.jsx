import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Protected = ({children}) => {
    const auth = getAuth(app)
    const [user, loading, error] = useAuthState(auth);
   
    if(loading) return 
    if(!user || error) return <Navigate to="/"/>
    // console.log(user);
    return (
        children
    );
};

export default Protected;