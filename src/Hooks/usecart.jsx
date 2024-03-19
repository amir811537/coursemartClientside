import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import axios from "axios";

const useCart = () => {
    const { user } = useContext(AuthContext);

    const { data } = useQuery(["product", user?.user?.email], async () => {
        if (user && user.user && user.user.email) {
            const response = await axios.get(`https://course-mart-serverside.vercel.app/user/${user.user.email}`);
            return response.data; // Assuming response.data is a single object representing a product
        }
    });

    return data;
};

export default useCart;
