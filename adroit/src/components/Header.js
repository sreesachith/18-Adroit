import React from "react";
import logoDark from "./../images/logofinal.png"; // Import the logoDark image file

const Header = () => {
    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-gray-800">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                    <img className="w-28" src={logoDark} alt="logoDark" width= '150px'/>
                </div>
                <ul className="flex items-center gap-8">
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline cursor-pointer duration-300">
                        Home
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline cursor-pointer duration-300">
                        Contact
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline cursor-pointer duration-300">
                        Shop
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline cursor-pointer duration-300">
                        Element
                    </li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline cursor-pointer duration-300">
                        About
                    </li>
                </ul>

            </div>
           
        </div>
        
    );
};

export default Header;