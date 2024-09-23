import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hook/useAdmin";


const PrivetAdmin = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const [isAdmin]=useAdmin();

    //
    const location=useLocation();
    if(user && isAdmin){
        return children;
    }
    if(loading){
        <p>loading.........</p>
    }
    return <Navigate to='/login' state={{from: location}}/>

};

export default PrivetAdmin;