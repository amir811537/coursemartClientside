import {  Link, NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import { TiSpanner } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
const Dashboard = () => {

    const {user,logOut}=useContext(AuthContext);


    const [isAdmin,isAdminLoading]=useAdmin();

    const handelsingout = () => {
        logOut()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

if(isAdminLoading){
    return <p> loading ............</p>
}

    return (
<div className="relative max-h-screen md:flex">
    {/* dashboard sidebar */}
<div className="w-64 min-h-screen max-h-[100vh] bg-orange-500">

<ul className="menu p-4">
<li>
          <NavLink className="text-white" to="/dashboard/profile">
          <FaUserAlt />  Profile
            <span className="badge">New</span>
          </NavLink>
        </li>
{
    isAdmin? <> 
    
    
    <li> 
        
        <NavLink className="text-white" to="/dashboard/AddProduct"><FcAddImage />Add items</NavLink> 
        
        
        </li>
    
    <li> 
        
        <NavLink className="text-white" to="/dashboard/ManageItem"><TiSpanner />Manage items</NavLink> 
        
        
        </li>
    <li> 
        
        <NavLink className="text-white" to="/dashboard/ManageUser"><FaUserEdit />Manage Users</NavLink> 
        
        
        </li>
<li> <NavLink className="text-white" to="/dashboard/adminHome"> <FaHome /> Admin Home</NavLink> </li>
    
    
       </> :
    
    
    
    <><li> <NavLink className="text-white" to="/dashboard/myCart"><FaShoppingCart /> My Cart</NavLink> </li>
    <li> <NavLink className="text-white" to="/"> <FaHome /> User Home</NavLink> </li></>
}


</ul>
<hr className="h-px" />

{/* shared navlink */}


  <div className="flex py-10 items-center gap-2 text-center justify-center">
  <ol><NavLink className="text-white" to="/">Return Home</NavLink></ol>
    <FaHome className="text-2xl text-sky-300" />
  </div>
<div>

{user ? (
              
                <button className="flex mx-auto justify-end items-center text-white" onClick={handelsingout}>
                Sign Out
              </button>
            
            ) : (
             <Link to="/login">
             <button className="flex mx-auto justify-end items-center text-white">Login</button>
           </Link>
            )}
</div>
</div>
<div className="flex-1">
    <Outlet></Outlet>
</div>
</div>
    );
};

export default Dashboard;