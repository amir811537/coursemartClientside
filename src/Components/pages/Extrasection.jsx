import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Extrasection = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className="bg-gray-100 p-6 rounded-md border border-gray-300 m-4"  data-aos="zoom-in-right"
        onMouseEnter={() => AOS.refresh()}>
            <h2 className="text-2xl font-bold mb-4">
                Welcome to the Largest Coures shop in India 
            </h2>
            <p className="text-lg mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nisi tempora, mollitia a facere ex?.
            </p>
            <p className="text-lg mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nisi tempora, mollitia a facere ex?.
            </p>
            <p className="text-lg mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nisi tempora, mollitia a facere ex?.
            </p>
            <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nisi tempora, mollitia a facere ex?.
            </p>
        </div>
    );
};

export default Extrasection;
