import { ShoppingCart, User, Globe, Headset, Menu } from "lucide-react"
import { useState } from "react";

const Navbar = () => {
    const [toggle, settoggle] = useState(false);
    const togglehandler = () => {
        settoggle(!toggle)
    }
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto ">
                <div className="flex items-center justify-between h-12 sm:h-[16] relative">
                    <div className="flex gap-3">
                        <button onClick={togglehandler}><Menu className="h-[2rem] my-auto relative md:hidden" /></button>
                        <img className="h-[1.7rem] sm:h-[2rem] my-auto " src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg" alt="" />
                    </div>
                    {
                        toggle ?
                            <div className="bg-[#dcdcdc] text-[white] flex absolute top-[4rem] flex-col text-2xl w-full h-[15rem]">
                                <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center font-medium">
                                    Products
                                </a>
                                <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center font-medium">
                                    Start selling
                                </a>
                                <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center font-medium">
                                    Tools and apps
                                </a>
                                <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center font-medium">
                                    Pricing
                                </a>
                                <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center font-medium">
                                    Resources
                                </a>
                                <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center  font-medium">
                                    Pro sellers
                                </a>
                                <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center font-medium">
                                    GelatoConnect
                                </a>
                            </div> : ""
                    }
                    <div className="sm:ml-6 sm:flex text-[0.9rem]  sm:items-center ">
                        <button className="hidden md:flex gap-2 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <Headset className="h-6 w-6" aria-hidden="true" />
                            <span className="font-bold text-black ">Contact us</span>
                        </button>
                        <button className="hidden sm:flex mx-2 gap-2 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <Globe className="h-6 w-6" aria-hidden="true" />
                            <span className="font-bold text-black">IN/INR</span>
                        </button>
                        <button className="hidden sm:flex gap-2 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <ShoppingCart className="h-6 w-6" aria-hidden="true" />
                            <span className="font-bold text-black">Cart</span>
                        </button>
                        <div className="hidden mx-3 md:flex">
                            <a href="#" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Sign In</a>
                            <User />
                        </div>
                        <a href="#" className="ml-3 mt-4 sm:mt-[0] flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[white] bg-black hover:bg-[white] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign up for free
                        </a>
                    </div>
                </div>
                <div className="hidden md:block border-2">
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8 w-full h-[3rem]">
                        <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Products
                        </a>
                        <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Start selling
                        </a>
                        <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Tools and apps
                        </a>
                        <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Pricing
                        </a>
                        <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Resources
                        </a>
                        <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            Pro sellers
                        </a>
                        <a href="#" className="border-transparent text-black hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                            GelatoConnect
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default Navbar