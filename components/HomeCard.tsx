'use client';
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface HomeCardProps {
    backgroundImgUrl?: string;
    productTitle?: string;
    productPrice?: string;
    productPageLink?: string;
    width?: number;
    height?: number;
    button?: boolean;
}

const HomeCard: React.FC<HomeCardProps> = ({
    backgroundImgUrl = "/heroCard1.webp",
    productTitle = "Wooden Chair",
    productPrice = "$199",
    productPageLink = "#",
    width = 333,
    height = 500,
    button = true,
}) => (
    <div
        style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${backgroundImgUrl})`,
        }}
        className={`flex flex-col ${button ? 'justify-between' : 'justify-end'} bg-no-repeat bg-cover bg-left-bottom p-4 rounded-xl`}
    >
        <div className="bg-white max-w-fit rounded-[10px] py-3 px-5 z-10 text-black shadow-xl">
            <h1 className="font-bold">{productTitle}</h1>
            <p className="text-neutral-600">{productPrice}</p>
        </div>
        {button && (
            <Link
                className="bg-white rounded-3xl max-w-fit px-6 py-3 hover:bg-[#274C4F] text-black hover:text-white transition-all ease-in delay-50 shadow-lg"
                href={productPageLink}
            >
                <FaArrowRightLong />
            </Link>
        )}
    </div>
);

export default HomeCard;
