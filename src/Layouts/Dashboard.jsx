import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
<div className="flex">
    {/* dashboard sidebar */}
<div className="w-64 min-h-full bg-orange-500">

<ul className="menu p-4">

<li> <NavLink to="/dashboard/cart">My Cart</NavLink> </li>
<li> <NavLink to="/dashboard/userHome">User Home</NavLink> </li>

</ul>
</div>
<div className="flex-1">
    <Outlet></Outlet>
</div>
</div>
    );
};

export default Dashboard;