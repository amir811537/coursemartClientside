import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import MyCartcard from "./MyCartcard";
import { ImSad } from "react-icons/im";
// import { useNavigate } from "react-router-dom";

const MyCart = () => {
    // const navigate = useNavigate();

    const [product,setProduct]=useState([]);
    const user=useContext(AuthContext);
    useEffect(()=>{
      if(user?.user?.email){
        getProdcut()
      }
    
    },[user,product])


    // const countMybage = () => {
    //     // Pass user information as state during navigation
    //     navigate(`/bage`,{ state: product.length });
    // };


    const totalPrice=(productList)=>{
        return productList.reduce((acc,curr)=>acc+Number(curr?.price),0)
    }

    const getProdcut=async()=>{
      
        
        try {
            const res=await axios.get(`https://course-mart-serverside.vercel.app/user/${user?.user?.email}`,)
           setProduct(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    return (

        
<div>
<div className="grid mx-6 gap-5 my-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
        
        {
        product.length>0?<>
        
        {product.map(singelproduct  =><MyCartcard key={singelproduct.ID} singelproduct={singelproduct}></MyCartcard>)}
         </>
        
        
        :
        
        <>
        
        
        <div className="flex flex-col items-center justify-center mx-auto">
        
        <ImSad className="text-5xl text-red-600" />
        <h1 className="text-center">Sorry No Data Found!</h1>
            
            </div>
            
            
            </>

}

<h1>{}</h1>
<button className="hover:bg-green-500 bg-green-200 px-6 py-3 hover:text-white " >total Pay Amount ₹{totalPrice(product)}</button>
    </div>
</div>
    );
};

export default MyCart;