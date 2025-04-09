import React from "react";
import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const Footer = () => {
    return (
        <>
            <div className="flex flex-col py-12 md:flex-row items-center justify-between">
                {/* First divv  */}
                <div className=" w-full items-center flex flex-col justify-center px-2 sm:w-1/3 gap-2">
                    <h1 className="text-xl font-bold text-gray-700">About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam dolor nobis beatae quisquam, facere consectetur est cumque provident voluptates laudantium omnis quos, repudiandae optio.</p>
                    <h4 className="text-lg font-normal">Email : user@gamil.com</h4>
                    <h4 className="text-lg font-normal">Phone: 1239921132</h4>
                </div>

                {/* Secound div  */}
                <div>
                    <h1 className="text-xl font-bold text-gray-700 mb-5">Quick Link</h1>
                    <ul className="flex flex-col gap-2">
                        <Link className="cursor-pointer hover:text-black text-gray-700" to="/">Home</Link>
                        <Link className="cursor-pointer hover:text-black text-gray-700" to="/blogs">Blogs</Link>
                        <Link className="cursor-pointer hover:text-black text-gray-700" to="/about">About</Link>
                        <Link className="cursor-pointer hover:text-black text-gray-700" to="/contact">Contact</Link>
                    </ul>
                </div>

                {/* Third div   */}
                <div>
                    <h1 className="text-xl font-bold text-gray-700 mb-5">Categories</h1>
                    <ul className="flex flex-col gap-2">
                        <Link className="cursor-pointer hover:text-black text-gray-700" >Weather</Link>
                        <Link className="cursor-pointer hover:text-black text-gray-700" >Lifestyle</Link>
                        <Link className="cursor-pointer hover:text-black text-gray-700" >Technology</Link>
                        <Link className="cursor-pointer hover:text-black text-gray-700">News</Link>
                    </ul>
                </div>
            </div>
            <hr className="h-1 text-gray-600 bg-gray-700 w-full"/>
            <div className="flex justify-between flex-col sm:flex-row items-center my-6  ">
                <div className="flex gap-2  items-center justify-center">
                    <img src={assets.logo} alt="" />
                    <p>Meta <span className="font-bold text-xl">Blog</span></p>
                </div>
                <ul className="flex flex-col sm:flex-row items-center gap-3">
                    <li>Privacy Policy</li>
                    <li>Terms and conditions</li>
                    <li> copyright @code bless me</li>
                </ul>
            </div>
        </>
    );
}

export default Footer