import Link from "next/link";
import HomeCard from "../components/HomeCard";
import ProductCard from "../components/ProductCard";
import SpecialOfferCard from "@/components/SpecialOfferCard";
import HeroCard from "@/components/HeroCard";

 const Home: React.FC = () => (
     <>
        <div className="flex flex-row gap-10 w-full max-h-fit flex-wrap justify-center items-center px-20">
            <HeroCard />
            <SpecialOfferCard />
        </div>
    </>
  );


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
