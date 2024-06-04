import { getAuth } from "firebase/auth";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { app } from "../firebase/firebase.config";


const MenuBar = () => {
    const auth = getAuth(app)
    const [user ] = useAuthState(auth);
    const [signOut] = useSignOut(auth);


    const MenuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/spacial">Spacial Offer</Link></li>
   {user && <li><Link to="/dashboard">Dashboard</Link></li>}
    </>
    return (
        <div className=" sticky top-[0px] z-50 bg-[#3c161692] backdrop-blur-md border-b-2 border-[#5124242c]" >
            <section className="navbar text-gray-200">
            <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {MenuItems}
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">COFFEE BITE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-gray-300">
    {MenuItems}
      
     
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ? <Profile signOut={signOut} img={user?.photoURL}/> : <Link to="/auth">Login</Link>
    }
  </div>
            </section>
</div>
    );
};

export default MenuBar;


function Profile({img,signOut}){
    return (
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={img || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link to="/dashboard/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li onClick={()=> signOut()}><a>Logout</a></li>
      </ul>
    </div>
    )
}