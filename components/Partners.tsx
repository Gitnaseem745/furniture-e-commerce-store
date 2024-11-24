'use client';

import Image from "next/image";

const Partners: React.FC = () => {
    return (
        <div className="w-full max-h-fit px-20 py-12 flex gap-28 justify-center items-center bg-[#EEF4F5] flex-wrap">
        { images.map((img, i) => <Image width={100} alt={`Partner ${i+1}`} key={i} height={100} src={img} /> )}
    </div>
  )
}

const images = ["images/brand-goldline.svg", "images/brand-magnolia.svg", "images/brand-boltshift.svg", "images/brand-contrast.svg", "images/brand-asgardia.svg", "images/brand-komplex.svg"];

export default Partners
