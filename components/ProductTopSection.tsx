'use client';

import Link from "next/link";
import Breadcrumb from "./BreadCrumb";

interface ProductTopSectionProps {
    productImgUrl?: string;
    productName?: string;
    productPrice?: string;
    productDescription?: string;
    productCategory?: string;
}

const ProductTopSection: React.FC<ProductTopSectionProps> = ({
    productName = "Aliquam Blandit",
    productPrice = "$320.00",
    productDescription = "Porttitor lacus luctus accumsan tortor posuere ac ut. Amet luctus venenatis lectus magna fringilla urna. At erat pellentesque adipiscing commodo elit at imperdiet dui. Quis varius quam quisque id. Facilisis gravida neque convallis a cras semper auctor neque vitae. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Dolor magna eget est lorem ipsum. Integer quis auctor elit sed vulputate mi sit amet mauris. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Duis ut diam quam nulla. Aliquet lectus proin nibh nisl condimentum id venenatis. Mauris nunc congue nisi vitae suscipit.",
    productImgUrl = "/images/heroCard1.webp",
    productCategory
}) => {
  return (
    <section className="flex flex-row gap-8 w-full max-w-screen-xl max-h-screen mx-auto mt-20 bg-white p-8 rounded-lg shadow-md max-md:flex-col">
        <div className="w-1/2 max-md:w-full flex justify-center items-center bg-gray-100 rounded-lg p-6">
            <img src={productImgUrl} className="w-[480px] h-[600px] object-cover hover:scale-110 transition-transform duration-300" alt={productName} />
        </div>
        <div className="w-1/2 max-md:w-full flex flex-col gap-6 justify-start items-start py-10">
            <Breadcrumb />
            <div>
                <h1 className="text-3xl font-semibold mb-2 capitalize">{productName}</h1>
                <p className="text-xl font-bold text-gray-600">{productPrice}</p>
            </div>
            <div>
                <p className="text-sm text-gray-700 leading-7">{productDescription}</p>
            </div>
            <div className="flex items-center flex-col gap-4 mt-6">
                <div className="flex flex-row gap-4">
                    <div className="relative flex justify-center items-center">
                        <p className="absolute left-6 text-neutral-400 text-4xl mb-1">-</p>
                        <Link className="text-sm rounded-full bg-white text-black border-[2px] border-neutral-400 w-[120px] h-[50px] justify-center items-center flex transition-all ease-in delay-50" href={'/'}> 1 </Link>
                        <p className="absolute right-6 text-2xl text-neutral-400">+</p>
                    </div>
                    <Link className="text-sm rounded-full bg-[#274C4F] hover:bg-[#456A6D] text-white w-[166px] h-[50px] justify-center items-center flex transition-all ease-in delay-50" href={'/'}>
                        Add to cart
                    </Link>
                </div>
                <div className="flex flex-row gap-4 items-start justify-center w-full h-[10px] text-sm">
                    <button className="text-gray-500 hover:text-gray-700">Wishlist</button>
                    <button className="text-gray-500 hover:text-gray-700">Compare</button>
                    <button className="text-gray-500 hover:text-gray-700">Size Guide</button>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-sm text-gray-400">Category: {productCategory || "Furniture"}</p>
                <div className="flex gap-4 mt-2">
                    <a href="#" className="text-gray-500 hover:text-gray-700">Share</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Facebook</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">Twitter</a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">LinkedIn</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductTopSection;
