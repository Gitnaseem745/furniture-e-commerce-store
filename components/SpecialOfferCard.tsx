'use client';
import OfferCard from "../components/OfferCard";
import Button from "@/components/Button";
const SpecialOfferCard = () => {
  return (
    <div className="p-3 flex flex-col gap-10">
    <div className="w-full flex flex-row justify-between items-center">
        <div>
            <h1 className="text-2xl font-semibold mb-4">Special offers</h1>
            <p className="text-neutral-600 text-sm tracking-wider">Quam elementum pulvinar etiam non quam tincidunt eget nullam non.</p>
        </div>
        <Button link="/products/" buttonText="See All" />
    </div>
    <div className="flex flex-row gap-10 w-full max-h-fit flex-wrap justify-center items-center">
        {offerCardData.map((card, i) => (
            <OfferCard key={i} productImgUrl={card.productImgUrl} discountType={card.discountType}
            discount={card.discount} productDiscription={card.productDiscription} buttonText={card.buttonText}
            productLink={card.productLink} backgroundColor={card.backgroundColor}/>
        ))}
    </div>
    </div>
  )
}
const offerCardData = [
    {
        productImgUrl: "/images/offers-image-1.webp",
        discountType: "Special Discount",
        discount: "30% OFF",
        productDiscription: "Aliquet sagittis purus.",
        buttonText: "Browse Now",
        productLink: "/products/",
        backgroundColor: "#9BA89E",
    },
    {
        productImgUrl: "/images/offers-image-3.webp",
        discountType: "Weekly Discount",
        discount: "25% OFF",
        productDiscription: "Nulla facilisi cras fermentum.",
        buttonText: "Browse Now",
        productLink: "/products/",
        backgroundColor: "#D39E76",
    },
    {
        productImgUrl: "/images/offers-image-2.webp",
        discountType: "Birthday Discount",
        discount: "40% OFF",
        productDiscription: "Porta non pulvinar neque.",
        buttonText: "Browse Now",
        productLink: "/products/",
        backgroundColor: "#A7A29C",
    },
  ]
export default SpecialOfferCard
