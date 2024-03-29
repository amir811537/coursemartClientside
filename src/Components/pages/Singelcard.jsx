/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import AOS from "aos";

const Singelcard = ({ singlecard,  }) => {
  // const { user } = useContext(AuthContext);
  // console.log(products)
  useEffect(() => {
    AOS.init();
  }, []);

  // eslint-disable-next-line react/prop-types
  const { _id, imgage, category, name, price, rating } = singlecard;
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      data-aos="zoom-in-right"
      onMouseEnter={() => AOS.refresh()}
    >
      <img className="w-full" src={imgage} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{category}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <button>
            <span className="font-bold">Price : </span>₹ {price}
          </button>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <button className="flex items-center justify-evenly">
            <span className="font-bold">Rating: </span>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {/*  use [...Array(5)] to create an array with 5 elements, as i want to display 5 stars. */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    parseInt(rating) > index
                      ? "text-yellow-300"
                      : "text-gray-200 dark:text-gray-600"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          </button>
        </span>
        <div className="py-3 flex items-center justify-center ">
          <span className="">
            <Link to={`/products/${_id}`}>
              <button className=" bg-orange-400 px-4 rounded-md py-3 text-white hover:bg-orange-700">
                Details
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Singelcard;
