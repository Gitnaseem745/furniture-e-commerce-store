import Link from "next/link";
import HomeCard from "../components/HomeCard";
import ProductCard from "../components/ProductCard";
import SpecialOfferCard from "@/components/SpecialOfferCard";
import HeroCard from "@/components/HeroCard";
import BrowseByRooms from "@/components/BrowseByRooms";

 const Home: React.FC = () => (
     <>
        <div className="flex flex-col gap-10 w-full max-h-fit flex-wrap justify-center items-center px-20">
            <HeroCard />
            <BrowseByRooms />
            <SpecialOfferCard />
        </div>
    </>
  );

export default Home;
