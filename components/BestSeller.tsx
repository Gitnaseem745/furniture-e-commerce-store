'use client';

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

interface BestSellerProps {
    title: string;
    children: any;
    limit: number;
    category?: string;
}

interface Product {
    id: string;
    name: string;
    price: string;
    shortDis: string;
    img: string;
    category: string;
    longDis: string;
    additionalInfo: {
      material: string;
      color: string;
      style: string;
      dimensions: string;
    };
  }

const BestSeller: React.FC<BestSellerProps> = ({ title, children, limit, category }) => {
    const [products, setProducts] = useState<Product[] | null>(null);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`/api/products?category=${category || ''}&limit=${limit}`);
            const products = await response.json();
            setProducts(products);
          };
          fetchProducts();
    }, [])
  return (
    <div className="w-full max-h-fit p-10 flex flex-col gap-6 justify-center items-center">
        <h1 className="text-2xl font-bold tracking-wide">
            {title}
        </h1>
        <p className="text-center text-neutral-600">
            {children}
        </p>
        <div className="flex flex-row justify-center items-center flex-wrap gap-4 mt-4">
            {products?.map((product) => (
               <Link href={`/products/${product.name.toLowerCase().replaceAll(' ', "-")}`} key={product.id} >
               <ProductCard productName={product.name} productPrice={product.price} productImgUrl={product.img} productCategory={product.category}  />
               </Link>
            ))}
        </div>
    </div>
  )
}

export default BestSeller
