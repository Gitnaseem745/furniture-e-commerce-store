'use client';

import Image from "next/image";

interface ProductCategoryCardProps {
    categroyName: string;
    categoryImgUrl: string;
    categoryProductsCount: number;

}
const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
    categroyName,
    categoryImgUrl,
    categoryProductsCount
}) => {
  return (
    <div className="flex flex-row gap-6 justify-center items-center w-[196px] h-[60px]">
        <div className="w-[70px] h-[70px]">
            <img src={categoryImgUrl} className="w-full h-full rounded-full object-cover" alt="" />
        </div>
        <div className="flex flex-col gap-1 justify-center items-start">
            <h1 className="font-semibold">{categroyName}</h1>
            <p>{categoryProductsCount} products</p>
        </div>
    </div>
  )
}

export default ProductCategoryCard
