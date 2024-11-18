import Link from "next/link";
import HomeCard from "../components/HomeCard";
import OfferCard from "../components/OfferCard";
import ProductCard from "../components/ProductCard";
import Button from "@/components/Button";

 const Home: React.FC = () => (
     <>
        <div className="flex flex-row gap-10 w-full max-h-fit flex-wrap justify-center items-center px-20">
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
        </div>
    </>
  );
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
  const heroCardData = [
    {
        backgroundImgUrl: "/images/heroCard1.webp",
        productTitle: "Wooden Chair",
        productPrice: "$199",
        productPageLink: "/products/wooden-chair",
        width: 333,
        height: 500,
        button: true,
    },
    {
        backgroundImgUrl: "/images/heroCard2.webp",
        productTitle: "Pretium Elite",
        productPrice: "$130",
        productPageLink: "/products/pretium-elite",
        width: 331,
        height: 303,
        button: true,
    },
  ]
  const homeCardData = [
    {
        backgroundImgUrl: "/images/homeCard1.webp",
        productTitle: "Living Room",
        productPrice: "15 products",
        productPageLink: "/products/living-room",
        width: 580,
        height: 455,
        button: false,
    },
    {
        backgroundImgUrl: "/images/homeCard2.webp",
        productTitle: "Bedroom",
        productPrice: "24 products",
        productPageLink: "/products/bedroom",
        width: 580,
        height: 283,
        button: false,
    },
    {
        backgroundImgUrl: "/images/homeCard3.webp",
        productTitle: "Walk-in Closet",
        productPrice: "30 products",
        productPageLink: "/products/walk-in-closet",
        width: 275,
        height: 275,
        button: false,
    },
    {
        backgroundImgUrl: "/images/homeCard4.webp",
        productTitle: "Kitchen",
        productPrice: "24 products",
        productPageLink: "/products/kitchen",
        width: 275,
        height: 275,
        button: false,
    },
  ]
export default Home;
