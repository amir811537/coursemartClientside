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

    const getProdcut=async()=>{
      
        
        try {
            const res=await axios.get(`http://localhost:5000/user/${user?.user?.email}`,)
           setProduct(res.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="grid mx-6 gap-5 my-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
        
            {product.length>0? product.map(singelproduct  =><MyCartcard key={singelproduct.ID} singelproduct={singelproduct}></MyCartcard>):<>
            
            
            <div className="flex flex-col items-center justify-center mx-auto">
            
            <ImSad className="text-5xl text-red-600" />
            <h1 className="text-center">Sorry No Data Found!</h1>
                
                </div>
                
                
                </>
   
}

        </div>
    );
};

export default MyCart;