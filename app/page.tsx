import Link from "next/link";
import HomeCard from "../components/HomeCard";
import ProductCard from "../components/ProductCard";
import SpecialOfferCard from "@/components/SpecialOfferCard";
import HeroCard from "@/components/HeroCard";
import BrowseByRooms from "@/components/BrowseByRooms";
import BestSeller from "@/components/BestSeller";

 const Home: React.FC = () => (
     <>
        <div className="flex flex-col gap-10 w-full max-h-fit flex-wrap justify-center items-center px-20">
            <HeroCard />
            <BestSeller limit={8} title={"Bestsellers of the week"}>
                Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget <br/> nullam non nisi elementum sagittis vitae et leo duis ut diam quam.
            </BestSeller>
            <BrowseByRooms />
            <BestSeller limit={4} category="furniture" title={"Top selling furniture"}>
                Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget <br/> nullam non nisi elementum sagittis vitae et leo duis ut diam quam.
            </BestSeller>
            <SpecialOfferCard />
        </div>
    </>
  );

export default Home;
