import {  NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Dashboard = () => {
    return (
<div className="flex">
    {/* dashboard sidebar */}
<div className="w-64 min-h-full bg-orange-500">

<ul className="menu p-4">
<li>
          <NavLink className="text-white" to="/dashboard/profile">
          <FaUserAlt />  Profile
            <span className="badge">New</span>
          </NavLink>
        </li>
<li> <NavLink className="text-white" to="/dashboard/myCart"><FaShoppingCart /> My Cart</NavLink> </li>
<li> <NavLink className="text-white" to="/dashboard/userHome"> <FaHome /> User Home</NavLink> </li>


</ul>
</div>
<div className="flex-1">
    <Outlet></Outlet>
</div>
</div>
    );
};

export default Dashboard;