'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Message Sent!');
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-10">
      {/* Contact Form */}
      <div className="md:w-1/2 bg-white border-[1px] p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-600 mb-6">
        Blandit at maecenas dui sed amet sit enim vitae. Amet purus dictum urna sagittis dignissim.At fermentum nisl ullamcorper orci.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="name" className="font-medium mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-full px-4 py-3"
                required
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="email" className="font-medium mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-full px-4 py-3"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border rounded-full px-4 py-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="font-medium mb-1">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border rounded-3xl px-4 py-2"
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="hover:bg-[#456A6D] text-white px-6 py-4 rounded-full max-w-fit bg-[#274C4F]"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info & Map */}
      <div className="md:w-1/2 flex flex-col gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-8">Furniture store & showrooms</h2>
          <p className="text-gray-600">
            Et adipiscing mattis egestas mi placerat duis congue id. Scelerisque integer pulvinar justo sed egetpretium ipsum id faucibus euismod
          </p>
        </div>
        <div className='w-full bg-slate-300 h-[350px] rounded-xl flex justify-center items-center'>
            <h1 className='text-3xl text-neutral-600'>Loading Map...</h1>
        </div>
        <div className="grid grid-cols-3 text-sm">
          <div>
            <h3 className="font-bold">Address</h3>
            <p>7914 Lees Creek</p>
            <p>St. Dayton, OH 45420</p>
          </div>
          <div>
            <h3 className="font-bold">Phone</h3>
            <p>(437) 402-2459</p>
            <p>(928) 630-9272</p>
          </div>
          <div>
            <h3 className="font-bold">Email</h3>
            <p>info@company.com</p>
            <p>sales@company.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
