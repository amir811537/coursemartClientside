import { useEffect, useState } from "react";
import axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";

const Newarrival = () => {




    const [products, setProducts] = useState([]);
  
    const getData = async () => {
      try {
        const response = await axios.get("https://course-mart-serverside.vercel.app/courses");
        setProducts(response.data);
      } catch (error) {
        console.log("error in data fetching", error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
    // console.log("=====>",products)

    return (
      <div>
      <br />
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
          {products.map(product => (
              <SwiperSlide key={product._id}>
                  <div className="flex flex-col justify-center items-center">
                      <img className="w-1/2" src={product.imgage} alt={product.name} />
                      <p>{product.name}</p>
                      <Link className="flex items-center gap-2 justify-between" to={`/products/${product._id}`}>
            <button className="bg-orange-500  border-orange-500 text-sm p-1 border text-white rounded-3xl">৳{product.price}</button>
<button className="bg-orange-500  border-orange-500 text-sm p-1 border text-white rounded-3xl">buy now</button>
            </Link>                     
                  </div>

 

              </SwiperSlide>
          ))}
          <div className="flex justify-center py-3">
          <button className="hover:bg-orange-500  border-orange-500 text-orange-500 text-xl border  hover:text-white rounded-3xl lg:px-6 lg:py-3 px-3 py-px">show more </button>

          </div>
      </Swiper>
  </div>
    );
};

export default Newarrival;