'use client';

import Image from "next/image";
import Button from "./Button";

const Newsletter: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center px-32 text-white py-10 mb-[-49px] w-full bg-[#152420]">
        <div className="flex flex-row gap-10 justify-center items-center">
            <Image src={'/images/subscribe-section-image.webp'} width={60} height={100} alt="Newsletter Image"/>
            <div className="flex flex-col gap-1 justify-center items-start">
                <h2 className="font-semibold text-[17px]">Important updates waiting for you!</h2>
                <p>Subscribe and grab 20% OFF!</p>
            </div>
        </div>
        <div className="relative">
            <input type="text" placeholder="Your email*" className="w-[600px] bg-transparent focus:outline-none border-[2px] border-[#264B4E] rounded-full p-5"/>
            <button className="absolute top-[13%] right-2 bg-[#325c51] text-sm rounded-full hover:bg-[#354843] text-white w-[120px] h-[50px] justify-center items-center flex transition-all ease-in delay-50 ">Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter
