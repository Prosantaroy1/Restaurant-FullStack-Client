import { Outlet, useLocation } from "react-router-dom";
import Navber from "../page/Shared/Navber/Navber";
import Footer from "../page/Shared/Footer/Footer";


const Main = () => {
    // 
    const location= useLocation();
    // console.log(location)
    const IsNavBarFooter=location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            {IsNavBarFooter || <Navber/>}
            <Outlet/>
            {IsNavBarFooter || <Footer/>}
        </div>
    );
};

export default Main;