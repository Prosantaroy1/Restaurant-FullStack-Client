import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Googlelogin = () => {
    const {googleLogin}=useContext(AuthContext);
    // navigation
    const navigation= useNavigate();
    // 
    const handleClick=()=>{
        googleLogin()
        .then(res=>{
            console.log(res.user)
            navigation('/')
        })
    }

    return (
        <div className="px-3   py-3">
            <button onClick={handleClick} className="bg-black w-full text-white rounded px-4 py-2 text-xl font-sans font-medium">Google</button>
        </div>
    );
};

export default Googlelogin;