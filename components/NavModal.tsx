'use client';
import { CgClose } from "react-icons/cg";
import NavbarItems from "./NavbarItems";
import { useState } from "react";
import CategoryItems from "./CategoryItems";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

interface NavModalProps {
    onClickHideModal: any;
}
const NavModal: React.FC<NavModalProps> = ({onClickHideModal}) => {
    return (
        <div className="w-full fixed top-0 z-20 font-semibold ml-14 pl-8 pr-[86px] py-14 bg-[#16191D] h-screen flex flex-col  gap-12 text-neutral-400">
        <div className="w-8/12 relative flex justify-end items-start flex-wrap">
            <CgClose onClick={onClickHideModal} className="absolute top-4 right-4 md:top-6 md:right-6 max-sm:left-64 max-sm:top-0 cursor-pointer text-xl text-white"/>
        </div>
        <h1 className="text-3xl font-semibold text-white">Furniture</h1>
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
