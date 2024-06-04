import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex md:flex-row flex-col gap-6">
            <aside className="p-6 md:w-[20vw] bg-[#2D1818] md:h-[100vh]">
                <ul className="space-y-4 h-full">
                    <li className="w-full ">
                        <NavLink to="/dashboard" className={({isActive}) => isActive ? "border-2 bg-slate-500 text-gray-100 px-4 py-2 rounded-xl  block" : "bg-transparent px-4 py-2 rounded-xl border block text-gray-400"} end>DashBoard</NavLink>
                       
                    </li>
                    <li>
                    <NavLink to="/dashboard/profile" className={({isActive}) => isActive ?  "border-2  bg-slate-500 text-gray-100  px-4 py-2 rounded-xl  block" : "bg-transparent px-4 py-2 rounded-xl border block text-gray-400"} end>Profile</NavLink>
                        
                    </li>
                    <li>
                    <NavLink to="/dashboard/all_products" className={({isActive}) => isActive ?  "border-2 bg-slate-500 text-gray-100  px-4 py-2 rounded-xl  block" : "bg-transparent px-4 py-2 rounded-xl border block text-gray-400"} end>Products</NavLink>
                    </li>
                    <li>
                    <NavLink to="/dashboard/add_product" className={({isActive}) => isActive ?  "border-2 bg-slate-500 text-gray-100  px-4 py-2 rounded-xl  block" : "bg-transparent px-4 py-2 rounded-xl border block text-gray-400"} end>Add New Product</NavLink>
                    </li>
                    
                        
                </ul>
            </aside>
            <main className="w-full  ">
                <Outlet/>
            </main>
        </div>
    );
};

export default Dashboard;