import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Components/pages/Home";
import AddProduct from "../Components/pages/AddProduct";
import MyCart from "../Components/mycart/MyCart";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/pages/ErrorPage";
import Alldata from "../Components/pages/Alldata";
import Updateproduct from "../Components/pages/Updateproduct";
import Singelbranddata from "../Components/pages/Singelbranddata";
import PrivateRoute from "./PrivateRoute";
import Detailsproduct from "../Components/pages/Detailsproduct";
import Dashboard from "../Layouts/Dashboard";
import Profile from "../Components/Dashboard/Profile/Profile";
import UpdateProfileInfo from "../Components/Dashboard/Profile/UpdateProfileInfo";
import CartcountBadge from "../Components/Navbar/CartcountBadge";
import AdminHome from "../Components/Dashboard/User/AdminHome/AdminHome";
import ManageItems from "../Components/Dashboard/ManageItem/ManageItems";
import ManageUser from "../Components/Dashboard/ManageUser/ManageUser";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: "/myCart",
                element:<PrivateRoute> <MyCart></MyCart></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
path:'/bage',
element:<CartcountBadge></CartcountBadge>
            },
            {
                path:'/alldata',
                element:<Alldata></Alldata>,
            },
            {
                path:'/updateproduct/:id',
                element:<PrivateRoute><Updateproduct></Updateproduct></PrivateRoute>,
                loader:({params})=>fetch(`https://electronics-bazar-server.vercel.app/productsbyid/${params.id}`)
            },
            {
                path:'/singelbranddata/:brand',
                element:<Singelbranddata></Singelbranddata>
            },
            {
                path:'/products/:id',
                element:<PrivateRoute><Detailsproduct></Detailsproduct></PrivateRoute>,
                loader:()=>fetch('http://localhost:5000/courses')
            },
            
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
{
    path:'myCart',
    element:<MyCart></MyCart>
},
{
    path:'profile',
    element:<Profile></Profile>
},
{
    path:'updateprofileInfo/:id',
    element:<UpdateProfileInfo></UpdateProfileInfo>,
    loader:()=>fetch('http://localhost:5000/profileInfo')
},
{
    path:"adminHome",
    element:<AdminHome></AdminHome>
} ,

{
    path: "AddProduct",
    element: <AddProduct></AddProduct>
},
{
    path:"ManageItem",
    element:<ManageItems></ManageItems>
},
{
    path:"ManageUser",
    element:<ManageUser></ManageUser>
}
        ]
    }
]);
export default router;