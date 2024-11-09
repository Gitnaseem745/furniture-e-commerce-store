import Link from "next/link";
import { GiBedLamp } from "react-icons/gi";
import { IoBedSharp } from "react-icons/io5";
import { LiaChairSolid } from "react-icons/lia";
import { LuSofa } from "react-icons/lu";
import { MdTableRestaurant } from "react-icons/md";
import { RiArchiveDrawerFill, RiSofaFill } from "react-icons/ri";
interface CategoryItemsProps {
    divCss?: string;
    linkCss?: string;
}
const CategoryItems: React.FC<CategoryItemsProps> = ({ divCss, linkCss }) => (
    <div className={`flex ${divCss}`}>
            {
                categoryItems.map((category, i) => (
                    <Link href={category.name.toLowerCase().replaceAll(" ", "-")} className="flex gap-2 items-center  hover:text-white cursor-pointer">
                        <p className="text-xl">{category.icon}</p>
                        <p className={`${linkCss}`} key={i}>{category.name}</p>
                    </Link>
                ))
            }
        </div>
)
const categoryItems = [
{
    name: "Chairs",
    icon: <LiaChairSolid />,
},
{
    name: "Storage",
    icon: <RiArchiveDrawerFill /> ,
},
{
    name: "Armchairs",
    icon: <RiSofaFill />,
},
{
    name: "Sofas",
    icon: <LuSofa />,
},
{
    name: "Beds",
    icon: <IoBedSharp />,
},
{
    name: "Tables",
    icon: <MdTableRestaurant />,
},
{
    name: "Decor",
    icon: <GiBedLamp />,
}
];
export default CategoryItems;
