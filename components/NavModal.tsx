'use client';
import { CgClose } from "react-icons/cg";
import NavbarItems from "./NavbarItems";
import { useState } from "react";
import CategoryItems from "./CategoryItems";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const NavModal: React.FC = () => {
    const [showModal, setShowModal] = useState(true); // shift this to navbar and pass from there
    const handleShowModal = () => {
        setShowModal(true);
    }
    const handleHideModal = () => {
        setShowModal(false);
    }
    return (
    showModal &&
        <div className="w-full fixed z-20 font-semibold ml-14 pl-8 pr-[86px] py-14 bg-[#16191D] h-screen flex flex-col  gap-12 text-neutral-400">
        <h1 className="text-3xl font-semibold text-white">Furniture</h1>
        <div className="w-full h-screen relative">
            <CgClose onClick={handleHideModal} className="absolute right-5 top-6 cursor-pointer text-xl" />
        </div>
        <NavbarItems divCss="flex-col gap-3" />
        <hr className="text-neutral-300 opacity-20" />
        <CategoryItems divCss="flex-col gap-3"/>
        <div className="flex flex-row gap-7">
            {socialIcons.map((icon, i) => <p className="cursor-pointer hover:text-white" key={i}>{icon.icon}</p>)}
        </div>
    </div>
  )
}
const socialIcons = [{ icon: <FaFacebook />}, { icon: <FaTwitterSquare />}, { icon: <FaInstagram />}, { icon: <FaLinkedin />}, { icon: <FaGithub />}, { icon: <SiLeetcode />}];
export default NavModal
