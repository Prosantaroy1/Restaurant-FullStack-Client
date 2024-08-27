import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const {user,loading}= useContext(AuthContext);

    //
    const location=useLocation();
    if(user){
        return children;
    }
    if(loading){
        <p>loading.........</p>
    }
    return <Navigate to='/login' state={{from: location}}/>

};

export default PrivetRouter;