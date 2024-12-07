'use client';

import { useState } from 'react';
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
    <div className="flex flex-col md:flex-row gap-10 p-10 max-sm:p-1 max-sm:my-10">
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

      <div className="md:w-1/2 flex flex-col gap-10 max-sm:p-5">
        <div>
          <h2 className="text-2xl font-bold mb-8">Furniture store & showrooms</h2>
          <p className="text-gray-600">
            Et adipiscing mattis egestas mi placerat duis congue id. Scelerisque integer pulvinar justo sed egetpretium ipsum id faucibus euismod
          </p>
        </div>
        <iframe src={mapLocation} max-width="600" height="450" className='bg-slate-300 rounded-xl flex justify-center items-center'>
        </iframe>
        <div className="grid grid-cols-3 text-sm max-sm:grid-cols-2 max-sm:gap-6">
            {Details.map((detail, i) => (
                <div key={i}>
                    <h3 className="font-bold">{detail.title}</h3>
                    {detail.content.map((content, i) => <p key={i}>{content}</p>)}
                </div>))}
        </div>
      </div>
    </div>
  );
};
const Details = [
    {
        title: "Address",
        content: ["7914 Lees Creek", "St. Dayton, OH 45420"],
    },
    {
        title: "Phone",
        content: ["(437) 402-2459", "(928) 630-9272"],
    },
    {
        title: "Email",
        content: ["info@company.com", "sales@company.com"],
    },
]
const mapLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.4513414461344!2d78.76583953366985!3d28.804359684097264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afb75550eecf3%3A0xf7838b48be875b14!2sFair%20Enterprises!5e0!3m2!1sen!2sin!4v1732644889741!5m2!1sen!2sin";
export default ContactForm;
