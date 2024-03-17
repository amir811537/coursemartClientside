import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Authprovider/Authprovider";
import axios from "axios";

const Profile = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const {user} = useContext(AuthContext);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        userInfo();
    }, [user]);

    const userInfo = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/profileInfo/${user?.user?.email}`);
            setUserData(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false); 
        }
    };


  console.log("thsi is user data ",userData)

    const handleUpdateInfo = () => {
        // Pass user information as state during navigation
        navigate(`/dashboard/updateprofileInfo/${userData._id}`);
    };

    return (
        <div className="w-full justify-center">
            {loading ? (
                <span className="loading loading-spinner loading-lg"></span>
            ) : (
                <div className="">
                    <div className="bg-white shadow-xl rounded-lg py-3">
                        <div className="photo-wrapper p-2">
                            <img className="w-32 h-32 rounded-full mx-auto" src={user.photoURL?user.photoURL:""} alt="John Doe"/>
                        </div>
                        <div className="p-2 text-center">
                            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">name</h3>
                            <div className="text-center text-gray-400 text-xs font-semibold">
                                <p>admin/user</p>
                            </div>
                            <div className="my-3">
                                <div className="flex items-center mb-2">
                                    <div className="w-1/3 text-gray-500 font-semibold">Gmail:</div>
                                    <div className="w-2/3 text-red-500"><p>{user.email}</p></div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="w-1/3 text-gray-500 font-semibold">Address</div>
                                    <div className="w-2/3">address here </div>
                                </div>
                           
                                <div className="flex items-center mb-2">
                                    <div className="w-1/3 text-gray-500 font-semibold">Mobile</div>
                                    <div className="w-2/3">user mobile no</div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="w-1/3 text-gray-500 font-semibold">Add social link</div>
                                    <div className="w-2/3">facebook/github</div>
                                </div>
                            </div>
                            <button onClick={handleUpdateInfo} className="underline text-blue-600">
                                Update your information
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
