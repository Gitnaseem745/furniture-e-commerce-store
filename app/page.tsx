import HomeCard from "./components/HomeCard";
import OfferCard from "./components/OfferCard";
import ProductCard from "./components/ProductCard";

 const Home: React.FC = () => (
    <div className="px-6 py-20 flex flex-row gap-10 w-full h-screen flex-wrap justify-center items-center">
        {offerCardData.map((card, i) => (
            <OfferCard key={i} productImgUrl={card.productImgUrl} discountType={card.discountType}
            discount={card.discount} productDiscription={card.productDiscription} buttonText={card.buttonText}
            productLink={card.productLink} backgroundColor={card.backgroundColor}/>
        ))}
        {heroCardData.map((card, i) => (
            <HomeCard key={i} backgroundImgUrl={card.backgroundImgUrl} productTitle={card.productTitle}
            productPrice={card.productPrice} productPageLink={card.productPageLink} width={card.width}
            height={card.height} button={card.button} />
        ))}
        {homeCardData.map((card, i) => (
            <HomeCard key={i} backgroundImgUrl={card.backgroundImgUrl} productTitle={card.productTitle}
            productPrice={card.productPrice} productPageLink={card.productPageLink} width={card.width}
            height={card.height} button={card.button} />
        ))}
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  );
  const offerCardData = [
    {
        productImgUrl: "/offers-image-1.webp",
        discountType: "Special Discount",
        discount: "30% OFF",
        productDiscription: "Aliquet sagittis purus.",
        buttonText: "Browse Now",
        productLink: "#",
        backgroundColor: "#9BA89E",
    },
    {
        productImgUrl: "/offers-image-3.webp",
        discountType: "Weekly Discount",
        discount: "25% OFF",
        productDiscription: "Nulla facilisi cras fermentum.",
        buttonText: "Browse Now",
        productLink: "#",
        backgroundColor: "#D39E76",
    },
    {
        productImgUrl: "/offers-image-2.webp",
        discountType: "Birthday Discount",
        discount: "40% OFF",
        productDiscription: "Porta non pulvinar neque.",
        buttonText: "Browse Now",
        productLink: "#",
        backgroundColor: "#A7A29C",
    },
  ]
  const heroCardData = [
    {
        backgroundImgUrl: "/heroCard1.webp",
        productTitle: "Wooden Chair",
        productPrice: "$199",
        productPageLink: "#",
        width: 333,
        height: 500,
        button: true,
    },
    {
        backgroundImgUrl: "/heroCard2.webp",
        productTitle: "Pretium Elite",
        productPrice: "$130",
        productPageLink: "#",
        width: 331,
        height: 303,
        button: true,
    },
  ]
  const homeCardData = [
    {
        backgroundImgUrl: "/homeCard1.webp",
        productTitle: "Living Room",
        productPrice: "15 products",
        productPageLink: "#",
        width: 580,
        height: 455,
        button: false,
    },
    {
        backgroundImgUrl: "/homeCard2.webp",
        productTitle: "Bedroom",
        productPrice: "24 products",
        productPageLink: "#",
        width: 580,
        height: 283,
        button: false,
    },
    {
        backgroundImgUrl: "/homeCard3.webp",
        productTitle: "Walk-in Closet",
        productPrice: "30 products",
        productPageLink: "#",
        width: 275,
        height: 275,
        button: false,
    },
    {
        backgroundImgUrl: "/homeCard4.webp",
        productTitle: "Kitchen",
        productPrice: "24 products",
        productPageLink: "#",
        width: 275,
        height: 275,
        button: false,
    },
  ]
export default Home;
