import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/AddProduct";
import Allproducts from "../pages/Dashboard/Allproducts";
import { URL_PATH } from "../utils/URL";
import EditProduct from "../pages/Dashboard/EditProduct";
import ProductDetails from "../pages/ProductDetails";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Speacial from "../pages/Speacial";

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
                element:<About/>
            },
            {
                path: 'contact',
                element:<Contact/>
            },
            {
                path:"spacial",
                element:<Speacial/>,
                loader: () => fetch(`${URL_PATH}/api/products`)
            },
            
            {
                path:"product/:id",
                element: <ProductDetails/>,
                loader: ({params}) => fetch(`${URL_PATH}/api/product/${params.id}`)
            },
            {
                path:"dashboard",
                element:<Dashboard/>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    },
                    {
                        path:"add_product",
                        element:<AddProduct/>
                    },
                    {
                        path:"all_products",
                        element:<Allproducts/>,
                        loader: () => fetch(`${URL_PATH}/api/products`)
                    },
                    {
                        path: "product/:id/edit",
                        element:<EditProduct/>,
                        loader: ({params}) => fetch(`${URL_PATH}/api/product/${params.id}`)
                    }
                ]
            }
            
        ]
    }
])


export default router;