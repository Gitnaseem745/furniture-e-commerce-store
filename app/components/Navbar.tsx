'use client';

import Link from "next/link";
import { FaRegHeart, FaShuffle } from "react-icons/fa6";
import { IoIosSearch, IoMdContact } from "react-icons/io";
import { RiShoppingBag2Line } from "react-icons/ri";
import NavbarItems from "./NavbarItems";
interface NavbarProps {
    desktop?: boolean;
    mobile?: boolean;
}
const Navbar: React.FC<NavbarProps> = ({
    desktop = true,
    mobile = false,
}) => (
    <nav className="w-full h-[100px] fixed top-0 bg-white text-black z-10 grid grid-cols-2 gap-9 px-[120px]">
        <div className="flex flex-row justify-start items-center gap-8">
            <h1 className="text-2xl font-semibold">Furniture</h1>
            <div className="relative">
                <input className="w-[382px] h-[45px] border-[2px] p-2 pl-5 rounded-full focus:outline-none focus:border-[#274C4F]" type="text" placeholder="Search" />
                <IoIosSearch className="absolute right-5 top-[29%] text-xl "/>
            </div>
        </div>
        <div className="flex flex-row items-center gap-10 justify-end">
            <NavbarItems divCss="gap-8" linkCss="hover:text-[#456A6D] transition-all ease-in delay-75"/>
            <div className="flex gap-8">
                {
                    icons.map((icon, i) => <Link href={icon.link} key={i} className="hover:text-[#456A6D] text-[18px] transition-all ease-in delay-75">{icon.icon}</Link>)
                }
            </div>
        </div>
    </nav>
)
const icons = [
    {
        icon: <IoMdContact />,
        link: "user-info"
    },
    {
        icon: <FaRegHeart />,
        link: "favorites"
    },
    {
        icon: <FaShuffle />,
        link: "compare"
    },
    {
        icon: <RiShoppingBag2Line />,
        link: "cart"
    }
]
export default Navbar
