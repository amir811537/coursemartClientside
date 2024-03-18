import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { AiFillHome } from 'react-icons/ai';
import { SlLogin } from 'react-icons/sl';
import { BsCartCheck } from 'react-icons/bs';
import { MdAddBusiness } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartcountBadge from "./CartcountBadge";
import logo from '.././../assets/finallogo.png'



const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);


    const handelsingout = () => {
        logOut()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const navlinks = (
        <>
            <li>
                <NavLink to="/"> <AiFillHome></AiFillHome> Home</NavLink>
            </li>
            <li>
                <NavLink to="/AddProduct"> <MdAddBusiness></MdAddBusiness> Add Product</NavLink>
            </li>
            <li>
                <NavLink to="/myCart"> <BsCartCheck></BsCartCheck> My Cart</NavLink>
            </li>
            <li>
                <NavLink to="/alldata"> <BsCartCheck></BsCartCheck>All courses</NavLink>
            </li>
            <li>
               {
                user? "": <NavLink to="/login"> <SlLogin></SlLogin> Login</NavLink>
               }
            </li>
        </>
    );



    return (
      
        <div className="container mx-auto">
         <div className="hidden lg:block">


         <div className="flex justify-between items-center pt-8">

<div>   <a href="/">
<img className="w-4/6 h-full" src={logo} alt="" />
</a>
</div>
                <div className="relative w-full max-w-[500px]">
                    <input type="text" className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" placeholder="Search product ..." />
                    <CiSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20} />

                </div>
                <div className="flex mr-[70px] gap-4 ">
                    <div className="icon__wrapper relative">
                    <MdOutlineShoppingCart />
                    <CartcountBadge size="w-[25px] h-[25px]"/>
                     </div>
                     <div className="dropdown dropdown-content">
      <div tabIndex={0} role="button" className="border border-gray-400  w-[50px] h-[50px]  place-items-center text-[22px] rounded-full flex items-center justify-center btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={user? user.photoURL :"https://i.ibb.co/gjNbZy2/user.png"} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[150px]">
       
        <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
<li>        <NavLink to="/alldata"> All courses</NavLink>
</li>        {user ? (
              <li>
                <button className="" onClick={handelsingout}>
                Sign Out
              </button>
              </li>
            ) : (
             <li> <Link to="/login">
             <button className="">Login</button>
           </Link></li>
            )}
      </ul>
    </div>

                </div>
                
            </div>
         </div>
{/*  for mobile devices  */}
    <div className="lg:hidden block" >
    <div className="flex items-center min-h-16 w-full  ">
       <div className="flex items-center gap-2">
          <div className="dropdown">
             <label tabIndex={0} className="btn btn-ghost">
             <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box
                 text-black  w-52 dark:text-blue-600"
              >
                {navlinks}

<li className="flex items-center"> <label tabIndex={0} className="">
              <div className="w-10 rounded-full">
                {user ? (
                  <img src={user.photoURL} />
                ) : (
                  <img src="https://i.ibb.co/gjNbZy2/user.png" />
                )}
              </div>
            </label>
            {console.log("user===========>", user)}
            {user ? (
              <button className="btn btn-ghost text-red-500" onClick={handelsingout}>
                Sign Out
              </button>
            ) : (
              <Link to="/login">
                <button className="">Login</button>
              </Link>
            )}</li>




              </ul>
            </div>
           <div className="flex items-center justify-center">












              <div className="w-full rounded">
                <img className=" h-1/3 w-20" src={logo} />
                {/* <HiShoppingBag className="text-3xl"></HiShoppingBag> */}

              </div>
           
           </div>
          </div>
        
          <div className="">
        

<div className="relative w-full max-w-[200px]">
                    <input type="text" className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" placeholder="Search product ..." />
                    <CiSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20} />

                </div>


          </div>

        </div>
    </div>




      

        </div>










    );


















};

export default Navbar;
