import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form"; // Import useForm

const Updateproduct = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm(); // Destructure setValue
  const courses = useLoaderData();
  const navigate = useNavigate();

  const { _id,imgage,name,category,type,price,rating } = courses;

  const onSubmit = (data) => { // Remove _id from onSubmit parameters
    fetch(`https://course-mart-serverside.vercel.app/courses/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      navigate('/dashboard/manageItem')

        Swal.fire({
          title: 'Success!',
          text: 'Product updated successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update product',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
 
 
 console.log(data)
 
  };



  return (
    <div>
    <h1 className="text-xl lg:text-3xl text-center">Add a Course</h1>
    <div className="flex-1 p-5 justify-between items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 md:gap-6">
<div className="relative z-0 w-full mb-6 group">
  <input
    type="text"
    {...register("imgage", { required: true })}
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=""
    defaultValue={imgage}
  />
  {errors.imgage && <span className="text-red-500">This field is required</span>}
  <label
    htmlFor="floating_email"
    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    Enter your photourl
  </label>
</div>
<div className="relative z-0 w-full mb-6 group">
  <input
    type="text"
    {...register("name", { required: true })}
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
    defaultValue={name}
  />
  {errors.name && <span className="text-red-500">This field is required</span>}
  <label
    htmlFor="floating_company"
    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    Course Name
  </label>
</div>
<div className="relative z-0 w-full mb-6 group">
  <div className="relative">
    <select
      {...register("category", { required: true })}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
   defaultValue={category}
   >
      <option value="" disabled selected>
        Course category
      </option>
      <option value="web_development">Web Development</option>
      <option value="digital_marketing">Digital Marketing</option>
      <option value="graphic_design">Graphic Design</option>
      <option value="3D_animation">3D Animation</option>
      {/* <!-- Add more options as needed --> */}
    </select>
    {errors.type && <span className="text-red-500">This field is required</span>}
    <label
      htmlFor="floating_company"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    ></label>
  </div>
</div>
<div className="relative z-0 w-full mb-6 group">
  <div className="relative">
    <select
      {...register("type", { required: true })}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    defaultValue={type}
    >
      <option value="" disabled selected>
        Course Type
      </option>
      <option value="online">Online</option>
      <option value="offline">Offline</option>
      {/* <!-- Add more options as needed --> */}
    </select>
    {errors.type && <span className="text-red-500">This field is required</span>}
    <label
      htmlFor="floating_company"
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    ></label>
  </div>
</div>
<div className="relative z-0 w-full mb-6 group">
  <input
    type="number"
    {...register("price", { required: true })}
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
    defaultValue={price}
  />
  {errors.price && <span className="text-red-500">This field is required</span>}
  <label
    htmlFor="floating_company"
    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    Price
  </label>
</div>
<div className="relative z-0 w-full mb-6 group">
            <select
              {...register("rating", { required: true })}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
           defaultValue={rating}
           >
              <option value="" disabled selected>
                Select Rating
              </option>
              <option value="1">1 star</option>
              <option value="2">2 stars</option>
              <option value="3">3 stars</option>
              <option value="4">4 stars</option>
              <option value="5">5 stars</option>
            </select>
            {errors.rating && <span className="text-red-500">This field is required</span>}
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Rating
            </label>
          </div>
        </div>

          {/* Other input fields go here */}
        
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update course
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Updateproduct;
