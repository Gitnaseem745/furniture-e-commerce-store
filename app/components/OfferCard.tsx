'use client';
import Link from "next/link";

interface OfferCardProps {
    productImgUrl?: string;
    discountType?: string;
    discount?: string;
    productDiscription?: string;
    buttonText?: string;
    productLink?: string;
    backgroundColor?: string;
}
const OfferCard: React.FC<OfferCardProps> = ({
    productImgUrl = "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/offers-image-1.webp",
    discountType = "Special Discount",
    discount = "30% OFF",
    productDiscription = "Aliquet sagittis purus.",
    buttonText = "Browse Now",
    productLink = "#",
    backgroundColor = "#9BA89E",
}) => (
    <div style={{
        backgroundColor: backgroundColor
    }}
    className={`p-4 flex flex-wrap justify-center items-center w-[410px] max-h-[247px] custom-450:h-fit rounded-xl`}>
        <div className="flex flex-row gap-4 w-full items-center">
            <img src={productImgUrl} className="rounded-xl max-w-[138px]"/>
            <div className="flex flex-col gap-6 justify-start items-start">
                <div className="font-bold">
                    <h1 className="text-xl">{discountType}</h1>
                    <h3 className="text-[16px] mt-1">{discount}</h3>
                </div>
                <p className="text-[16px]">{productDiscription}</p>
                <Link className="bg-white text-neutral-600 text-sm rounded-full hover:bg-[#152420] hover:text-white w-[136px] h-[50px] justify-center items-center flex transition-all ease-in delay-50" href={productLink}>{buttonText}</Link>
            </div>
        </div>
    </div>
)

export default OfferCard
