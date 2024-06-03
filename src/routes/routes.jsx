import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";

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
            },
            {
                path:"dashboard",
                element:<Dashboard/>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            }
            
        ]
    }
])


export default router;