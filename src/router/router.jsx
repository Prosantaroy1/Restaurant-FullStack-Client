import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import MenuSec from "../page/OurMenu page/MenuSec/MenuSec";
import OurShop from "../page/Our Shop page/OurShopSec/OurShop";
import Login from "../page/Login page/Login";
import SignUp from "../page/SignUp page/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'menu',
                element: <MenuSec/>
            },
            {
                path: 'shop/:category',
                element:<OurShop/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            }
        ]
    }
])

export default router;