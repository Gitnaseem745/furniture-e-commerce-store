import Link from "next/link";
import HomeCard from "../components/HomeCard";
import OfferCard from "../components/OfferCard";
import ProductCard from "../components/ProductCard";

 const Home: React.FC = () => (
     <>
        <div className="flex flex-row gap-10 w-full max-h-fit flex-wrap justify-center items-center px-20">
        {offerCardData.map((card, i) => (
            <OfferCard key={i} productImgUrl={card.productImgUrl} discountType={card.discountType}
            discount={card.discount} productDiscription={card.productDiscription} buttonText={card.buttonText}
            productLink={card.productLink} backgroundColor={card.backgroundColor}/>
        ))}
        {homeCardData.map((card, i) => (
            <HomeCard key={i} backgroundImgUrl={card.backgroundImgUrl} productTitle={card.productTitle}
            productPrice={card.productPrice} productPageLink={card.productPageLink} width={card.width}
            height={card.height} button={card.button} />
        ))}
        <Link href={'/products/chair-commodo'}><ProductCard /></Link>
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
        productLink: "/products/aliquet",
        backgroundColor: "#9BA89E",
    },
    {
        productImgUrl: "/images/offers-image-3.webp",
        discountType: "Weekly Discount",
        discount: "25% OFF",
        productDiscription: "Nulla facilisi cras fermentum.",
        buttonText: "Browse Now",
        productLink: "/products/nulla",
        backgroundColor: "#D39E76",
    },
    {
        productImgUrl: "/images/offers-image-2.webp",
        discountType: "Birthday Discount",
        discount: "40% OFF",
        productDiscription: "Porta non pulvinar neque.",
        buttonText: "Browse Now",
        productLink: "/products/porta",
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
