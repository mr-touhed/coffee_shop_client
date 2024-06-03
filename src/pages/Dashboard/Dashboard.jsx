import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex gap-6">
            <aside className="p-6 w-[20vw] bg-slate-100 h-[100vh]">
                <ul className="space-y-4 h-full">
                    <li className="w-full ">
                        <NavLink to="/dashboard" className={({isActive}) => isActive ? "border-2 bg-slate-500 text-gray-100 px-4 py-2 rounded-xl  block" : "bg-transparent px-4 py-2 rounded-xl border block"} end>DashBoard</NavLink>
                       
                    </li>
                    <li>
                    <NavLink to="/dashboard/profile" className={({isActive}) => isActive ?  "border-2  bg-slate-500 text-gray-100  px-4 py-2 rounded-xl  block" : "bg-transparent px-4 py-2 rounded-xl border block"} end>Profile</NavLink>
                        
                    </li>
                    <li>
                    <NavLink to="/dashboard/products" className={({isActive}) => isActive ?  "border-2 bg-slate-500 text-gray-100  px-4 py-2 rounded-xl  block" : "bg-transparent px-4 py-2 rounded-xl border block"} end>Products</NavLink>
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