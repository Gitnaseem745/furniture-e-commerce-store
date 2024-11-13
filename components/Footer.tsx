// Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer = () => {
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

  return (
    <footer className="bg-gray-100 p-8 text-gray-700 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between mb-8">
          <div>
            <h3 className="text-lg font-semibold">Get in touch with us</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold">Address:</span>
              <p>Street Name, India 244411</p>
            </div>
            <div>
              <span className="font-semibold">Phone:</span>
              <p>(+91) 123 456 7890</p>
            </div>
            <div>
              <span className="font-semibold">Opening hours</span>
              <p>9AM - 5PM / 10AM - 3PM</p>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link} className="hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8">
          <p className="text-sm">Copyright © 2024 - Naseem Ansari</p>
          <div className="flex space-x-4">
            <Link href="/" className="hover:opacity-75">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="/" className="hover:opacity-75">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link href="/" className="hover:opacity-75">
              <i className="fab fa-medium"></i>
            </Link>
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="/" className="hover:underline">Privacy Policy</Link>
            <Link href="/" className="hover:underline">Terms & Conditions</Link>
            <Link href="/" className="hover:underline">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
