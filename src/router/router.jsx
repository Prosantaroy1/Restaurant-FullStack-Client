import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import MenuSec from "../page/OurMenu page/MenuSec/MenuSec";
import OurShop from "../page/Our Shop page/OurShopSec/OurShop";
import Login from "../page/Login page/Login";
import SignUp from "../page/SignUp page/SignUp";
import Errorpage from "../page/Home/ErrorPage/Errorpage";
import PrivetRouter from "./PrivetRouter";
import Scriket from "../page/Home/ScriketPage/Scriket";
import Dashboard from "../layout/Dashboard";
import Cart from "../page/Dashboard page/Cart sec/Cart";
import UserHome from "../page/Dashboard page/UserHome/UserHome";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Errorpage/>,
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
                path: 'shop',
                element:<OurShop/>
            },
            {
                path: 'scriket',
                element: <PrivetRouter><Scriket/></PrivetRouter>
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
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children:[
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path:'userhome',
                element: <UserHome/>
            }
        ]
    }
   
])

export default router;