import React from 'react';
// import { Tiktok, Linkedin, Headphones } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Print on demand",
      links: ["What is print on demand?", "Product catalog", "Shipping and delivery", "Dropshipping products", "Pro sellers", "White label products", "Returns policy", "Global, yet local", "Sustainability", "Support"]
    },
    {
      title: "Integrations",
      links: ["Shopify", "Etsy", "WooCommerce", "Wix", "Squarespace", "BigCommerce", "API"]
    },
    {
      title: "Start selling",
      links: ["Embroidery", "Print on demand t-shirts", "Print on demand hoodies", "Print on demand posters", "Print on demand canvas", "Print on demand calendars", "Print on demand mugs", "Custom products", "Custom clothing", "Custom merchandise", "Custom phone cases", "Print on demand Europe", "Print on demand UK", "Print on demand France", "Print on demand Canada", "Merch maker"]
    },
    // {
    //   title: "Company",
    //   links: ["GelatoConnect", "About Gelato", "Leadership team", "Board & investors", "Newsroom", "Blog", "Customer Stories", "Partners", "Careers", "Affiliates program"]
    // }
  ];

  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <img src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg" alt="Gelato Logo" className="mb-4" />
            <p className="mb-4">Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
            <button className="bg-white text-black px-4 py-2 rounded-full mb-4">Get started</button>

          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-2">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-1">
                    <a href="#" className="text-sm hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <select className="bg-black text-white border border-white rounded px-2 py-1">
              <option>English (India)</option>
            </select>
            <button className="flex items-center bg-white text-black px-4 py-2 rounded-full">
             Contact Us
            </button>
          </div>
        </div>
        <div className="mt-8 text-sm">
          <a href="#" className="mr-4 hover:underline">Contact us</a>
          <a href="#" className="mr-4 hover:underline">Legal</a>
          <a href="#" className="mr-4 hover:underline">Privacy policy</a>
          <a href="#" className="mr-4 hover:underline">Cookie policy</a>
          <a href="#" className="mr-4 hover:underline">API terms</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;