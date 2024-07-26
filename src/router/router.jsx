import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home/Home";
import MenuSec from "../page/OurMenu page/MenuSec/MenuSec";
import OurShop from "../page/Our Shop page/OurShopSec/OurShop";


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
            }
        ]
    }
])

export default router;