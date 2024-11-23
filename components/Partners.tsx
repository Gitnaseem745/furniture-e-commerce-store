'use client';

import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <div className="w-full max-h-fit px-20 py-12 flex gap-28 justify-center items-center bg-[#EEF4F5]">
        <Image width={100} alt="" height={100} src={'images/brand-goldline.svg'} />
        <Image width={120} alt="" height={100} src={'images/brand-magnolia.svg'} />
        <Image width={100} alt="" height={100} src={'images/brand-boltshift.svg'} />
        <Image width={100} alt="" height={100} src={'images/brand-contrast.svg'} />
        <Image width={100} alt="" height={100} src={'images/brand-asgardia.svg'} />
        <Image width={100} alt="" height={100} src={'images/brand-komplex.svg'} />
    </div>
  )
}

export default Partners
