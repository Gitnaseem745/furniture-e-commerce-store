import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Footer = () => {

    return (
    <footer className="bg-[#EEF4F5] p-8 text-neutral-600 w-full font-extralight text-sm tracking-wide">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between mb-8 flex-wrap gap-y-10">
          <div>
            <h3 className="text-[16px] font-semibold text-black mb-2">Get in touch with us</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="flex text-[13px] flex-wrap justify-between items-center gap-x-20 gap-y-5">
            {companyDetails.map((details, i) => (
                <div key={i} >
                    <span className="font-semibold text-black">{details.title}:</span>
                    <p>{details.des}</p>
                </div>
            ))}
          </div>
        </div>

        <hr className="my-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-black">{section.title}</h4>
              <ul className="space-y-2 mt-3">
                {section.links.map((link) => <li key={link} className="hover:underline cursor-pointer">{link}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8" />

        <div className="flex justify-between items-center mt-8 flex-wrap gap-y-6 max-sm:justify-center">
          <p className="text-sm">{copy}</p>
          <div className="flex space-x-4">
            {socialIcons.map((icon, i) =>
                <Link key={i} href="/" className="hover:opacity-75">{icon.icon}</Link>
            )}
          </div>
          <div className="flex space-x-4 text-sm">
            {rules.map((pageText, i) =>
                <Link key={i} href={`${pageText.toLowerCase().replaceAll(' ', '-')}`} className="hover:underline">{pageText}</Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

const copy = "Copyright © 2024 - Naseem Ansari";
const rules = ["Privacy Policy", "Terms and Conditions", "Site Map"];
const socialIcons = [{ icon: <FaFacebook />}, { icon: <FaTwitterSquare />}, { icon: <FaInstagram />}, { icon: <FaLinkedin />}, { icon: <FaGithub />}, { icon: <SiLeetcode />}];
const companyDetails = [
    {
        title: "Address",
        des: "Street Name, India 244411",
    },
    {
        title: "Phone",
        des: "(+91) 123 456 7890",
    },
    {
        title: "Opening hours",
        des: "9AM - 5PM / 10AM - 3PM",
    },
]
const footerData = [
  {
    title: 'Shop Categories',
    links: ['Armchairs', 'Beds', 'Chairs', 'Decor', 'Sofas', 'Storage', 'Tables'],
  },
  {
    title: 'Useful Links',
    links: ['Careers', 'Delivery', 'Help Center', 'Returns & Refunds', 'Newsletter', 'Status', 'Testimonials'],
  },
  {
    title: 'Account',
    links: ['User Dashboard', 'Wishlist', 'Shipping & Delivery', 'Affiliate Program', 'Brand Assets', 'Support', 'Recommendations'],
  },
  {
    title: 'About Company',
    links: ['About Us', 'Our Partners', 'Locations', 'Design Services', 'How it Works', 'Customers', 'Other Info'],
  },
];
export default Footer;
