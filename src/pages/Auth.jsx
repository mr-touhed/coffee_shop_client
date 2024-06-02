import { useState } from "react";
import Register from "../components/Auth/Register";

const Auth = () => {
    const [register,setRegister] = useState(true)
    return (
        <div className="bg-zinc-400 min-h-[100vh] flex justify-center items-center ">
            <section className="bg-[#ffffff46] backdrop-blur-sm w-[60vw] min-h-[70vh] rounded-xl p-4">
                    {register ? <Register setRegister={setRegister}/> : "login"}
                    <div className="flex justify-center mt-6">
                        <button className="btn ">google</button>
                    </div>
            </section>
        </div>
    );
};

export default Auth;