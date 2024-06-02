import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children:[
            {
                path:"/",
                index:true,
                element:<Home/>
            },
            {
                path:"auth",
                element: <Auth/>
            },
            {
                path:"about",
                element:'about'
            },
            {
                path: 'contact',
                element:'contact'
            },
            {
                path:"menu",
                element:"Menu"
            },
            {
                path:"events",
                element:'event'
            }

        ]
    }
])


export default router;