import axios from "axios";
import { useEffect, useState } from "react";
import Singelcard from "./Singelcard";

const Alldata = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  return (
    <div>
      <div className="grid  gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {showAll
        ? products.map((singlecard) => (
            <Singelcard
              key={singlecard._id}
              products={products}
              setProducts={setProducts}
              singlecard={singlecard}
            ></Singelcard>
          ))
        : products.slice(0, 4).map((singlecard) => (
            <Singelcard
              key={singlecard._id}
              products={products}
              setProducts={setProducts}
              singlecard={singlecard}
            ></Singelcard>
          ))}
    
    </div>
 <div className="flex justify-center">
 {products.length > 6 && (
       <div className="my-auto mx-auto">
         <button className="hover:bg-orange-500  border-orange-500 text-orange-500 text-xl border  hover:text-white rounded-3xl px-6 py-3" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See All"}
        </button>
       </div>
      )}
 </div>
    </div>
  );
};

export default Alldata;
