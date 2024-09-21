import React from 'react';
import { ArrowUpRight, Headphones } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "World's largest print-on-demand network",
      description: "140+ print partners in 32 countries. Gelato is a truly global service.",
    },
    {
      title: "Sell globally, produce locally",
      description: "Your products are produced close to your customers, wherever they are.",
    },
    {
      title: "100% free editing tools",
      description: "Create your custom products using our suite of free tools.",
    },
    {
      title: "60+ logistics partners",
      description: "Our global network of logistics partners ensures your products are delivered fast.",
    },
    {
      title: "High-quality products",
      description: "We partner with the world's leading brands to ensure the best quality products.",
    },
    {
      title: "Endless creativity with Shutterstock Images",
      description: "Access millions of images to create unique designs.",
    },
  ];
  return (
    <div className=" min-h-screen w-full">
      <div className="bg-[#FAF6EF] w-full px-24 mx-auto flex flex-col items-center ">
        <h2 className="text-3xl md:text-5xl font-bold p-2 border-b">Why choose Gelato</h2>
        <div className="flex flex-col md:flex-row">
          <img src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/" className='w-full md:w-1/2 p-4' alt="" />
          <div className="md:w-1/2 p-6">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <ArrowUpRight className="flex-shrink-0 w-6 h-6 mt-1 mr-2 text-blue-500" />
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='flex bg-white flex-col p-24 items-center md:flex-row'>
        <img className='w-full md:w-1/2 p-4' src="https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/" alt="" />
        <div className="w-[80%] mx-auto md:w-[30%] md:pl-8">
            <p className="text-gray-600 mb-2 text-2xl">For print producers</p>
            <h2 className="text-3xl sm:text-4xl md:text-[4.5rem] font-bold mb-4">GelatoConnect</h2>
            <p className="text-[1rem] sm:text-xl my-6">
              Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry
            </p>
            <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
              Learn more
            </button>
          </div>
      </div>
      <div className='flex bg-[#FAF6EF] flex-col p-24 items-center md:flex-row'>
        
        <div className="w-[80%] mx-auto md:w-[50%] md:pl-8">
            <p className="text-gray-600 mb-2 text-2xl">For print on demand sellers</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Accelerate business growth with innovative design tools and apps</h2>
            <p className="text-[1rem] sm:text-xl my-6">
            See how our cutting-edge solutions can help you reach new customers and maximize your profits.
            </p>
            <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
          <img className='w-full md:w-1/2 p-4' src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/" alt="" />
      </div>
      
    </div>
  );
};

export default Benefits;