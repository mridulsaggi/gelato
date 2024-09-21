import { Star } from 'lucide-react'
import React from 'react'
// import { Envelope, Image as ImageIcon, FileText } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-[white]">
            <div className="max-w-7xl w-full min-h-screen flex flex-col-reverse md:flex-row mx-auto py-5">
                <div className="flex items-center flex-col bg-[#FAF6EF] md:bg-[white] md:items-start text-start w-[100%] md:w-[50%] px-8">
                    <h1 className="mt-[5rem] text-3xl sm:text-5xl md:text-5xl font-bold text-gray-900  ">
                        Print on demand for your ecommerce business
                    </h1>
                    <p className="mt-3 text-black md:mt-5 text-xl sm:text-2xl">
                        Sign up for free and only pay for what you sell
                    </p>
                    <p className="my-3 text-sm text-black">
                        Turn your passion into profit with the world's largest print on demand network.
                    </p>
                    <div className="my-5 flex items-center flex-col sm:flex-row sm:justify-around sm:items-center sm:w-[70%]">
                        <a className='bg-black text-[0.9rem] w-[10rem] text-center text-white font-bold rounded-[2rem] h-[2.2rem] py-1'>Get started for free</a>
                        <a className='bg-white text-[0.9rem] mt-[2rem] sm:mt-[0rem] w-[10rem] text-center text-black border-2 rounded-[2rem] h-[2.2rem] py-1'>See our products</a>
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <img src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg" alt="" className='h-[3rem] w-[10rem] my-[2rem]' />
                        <div className="flex">
                            <div className='flex mx-3'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>
                            <p>4.8/5</p>
                        </div>
                        <p className='text-center my-3 mx-5'>based on 919 reviews</p>
                    </div>
                </div>
                <img src="https://a.storyblok.com/f/165154/1280x720/5ed0187b38/02_hp_top-banner_1280x720-white-version-1.jpg/m/" className='w-[100%] h-[20rem] md:hidden' alt="" />

                <img src="https://a.storyblok.com/f/165154/1450x1450/1656f2d64a/cc-1061-new-home-page-hero-banner_1450x1450-2-1.png/m/1000x0/" className='hidden md:block md:h-[40rem] md:w-[50%]' alt="" />
            </div>
            <div className="hidden md:flex my-[3rem] h-[15rem] flex-row items-center justify-around w-full bg-[#FAF6EF]">
                <div className="w-[20%] text-center text-black font-bold text-[1.3rem] flex flex-row md:flex-col">
                    <p>90%</p>
                    <p>of all orders are produced locally</p>
                </div>
                <div className="w-[20%] text-center text-black font-bold text-[1.3rem] flex flex-row md:flex-col">
                    <p>90%</p>
                    <p>of orders arrive within 5 days of ordering</p>
                </div>
                <div className="w-[20%] text-center text-black font-bold text-[1.3rem] flex flex-row md:flex-col">
                    <p>140%</p>
                    <p>print providers across 32 countries</p>
                </div>

            </div>
            <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col-reverse md:flex-row justify-evenly">
                    <div className="w-full md:w-1/2 p-12 sm:p-24  md:p-24 flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4">We're lowering prices by up to 40%</h1>
                        <p className="text-2xl sm:text-3xl mb-6">
                            Thanks to our global production network we are lowering prices on dozens of products across select markets
                        </p>
                        <button className="bg-black text-white py-2 px-6 rounded-full w-fit hover:bg-gray-800 transition">
                            Order today
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-12">
                        <img src="https://a.storyblok.com/f/165154/1280x720/a3d54e1afd/cc-1358_icp-creatives-required_poster-calendar-card_40-_1280x720-2-1.png/m/1000x0/" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
