'use client';

import Button from "./Button";

const BestQuality: React.FC = () => {
  return (
    <div className="w-full max-h-fit flex flex-row gap-10 p-10">
        <div className="w-5/12 flex flex-col gap-6 justify-center items-start">
            <h2 className="text-4xl font-semibold tracking-tight leading-[52px] pr-16">
                Luxurious Furniture Starts with the Best Quality Materials
            </h2>
            <p className="pr-16 text-[16px] leading-[26px] tracking-wide text-neutral-700">
                Donec et odio pellentesque diam volutpat commodo amet consectetur adipiscing elit ut aliquam purus vitae et leo duis ut diam quam nulla porttitor. Sodales ut eu sem integer vitae justo eget magna.
            </p>
            <Button buttonText="Learn More" link="about-us" />
        </div>
        <div className="w-7/12 flex flex-row gap-6 justify-center items-center">
            <div className="flex gap-4 justify-center items-center w-full h-[580px]">
                <div className="relative overflow-hidden rounded-xl flex-1 w-1/3 h-full">
                    <img
                        src="/images/home-mask-image.webp"
                        alt="Interior"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="relative overflow-hidden rounded-xl flex-1 w-1/3 h-full">
                    <img
                        src="/images/home-mask-image.webp"
                        alt="Interior"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="relative overflow-hidden rounded-xl flex-1 w-1/3 h-full">
                    <img
                        src="/images/home-mask-image.webp"
                        alt="Interior"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default BestQuality;
