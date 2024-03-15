import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import axios from "axios";
import Swal from "sweetalert2";

const Detailsproduct = () => {
  const dataapi = useLoaderData();
  // console.log(dataapi)
  const { id } = useParams();

  const singledata = dataapi.find((singledata) => singledata._id === id);
  // console.log(singledata);
  const { _id, imgage, category, name, price, rating } = singledata;


  const user = useContext(AuthContext);

    const handeladdtocart=async(data1)=>{

  const payload={
  imgage:data1?.imgage,
  name:data1?.name,
  category:data1?.category,
  price:data1?.price,
  rating:data1?.rating,
  email:user?.user?.email
  }
  console.log("================>",payload)
  try {
    const response=await axios.post('https://electronics-bazar-server.vercel.app/user',payload);
    console.log(response?.data)
    if(response?.data?.insertedId){
      Swal.fire(
        'Good job!',
        'added to cart !',
        'success'
      )
      // alert('')
    }

  } catch (error) {
    console.log('add product api error',error)

  }


    }

  console.log(id,dataapi)
  return (
    <div className="bg-white py-6  lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className=" flex flex-col md:flex-row justify-evenly gap-10">
          {/* <!-- image - start --> */}
          <div className="h-[200px] w-full overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-[400px]">
            <img
              src={imgage}
              loading="lazy"
              alt="Photo by Theo Crazzolara"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* <!-- image - end --> */}

          {/* <!-- content - start --> */}
          <div className="flex flex-col items-center justify-center sm:items-start">
            <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
              {category}
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
              {name}
            </h1>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <button className="flex items-center justify-evenly">
            <span className="font-bold">Rating: </span>
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                {/*  use [...Array(5)] to create an array with 5 elements, as i want to display 5 stars. */}
                                {[...Array(5)].map((_, index) => (
                                  <svg
                                    key={index}
                                    className={`w-4 h-4 ${
                                      parseInt(rating) >
                                      index
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
            <p className="mb-4 text-center text-gray-500 sm:text-left md:mb-8 md:text-lg">
              ₹{price}
            </p>
            <span className="text-red-400">Discription</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              minima provident, eius cumque voluptate dolores veritatis deleniti
              totam eveniet nihil exercitationem pariatur ex facilis distinctio
              odit veniam nostrum animi inventore?
            </p>

            <nav className="flex gap-4 sm:block sm:space-y-1 md:space-y-2">
              <div className="py-2">
                <Link
                  to="/mycart"
                  onClick={() => handeladdtocart(singledata)}
                  className=" text-sm  bg-orange-400 hover:bg-orange-700 text-white
                  "
                >
                  <button className=" bg-orange-400 px-4 rounded-md py-3 text-white hover:bg-orange-700">Add to cart</button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsproduct;
