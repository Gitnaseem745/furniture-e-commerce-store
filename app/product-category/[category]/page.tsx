"use client"
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
interface PageProps {
    params : Promise<{ category: string; }>
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
      color: string;
      material: string;
      style: string;
    };
  }
const page = ({ params } : PageProps) => {
    const [cat, setCat] = useState<Product[] | null>(null);
    const { category } = use(params);
    useEffect(() => {
        const fetchProductsByCategory = async () => {
            const res = await fetch(`/api/products?category=${category}`);
            if(!res.ok){
                throw new Error("Category Not Found!");
            }
            const data = await res.json();
            setCat(data);
        }
        fetchProductsByCategory();
    }, [category])
  return (
    <div className='flex flex-row flex-wrap px-10 justify-center items-center gap-10'>
        {cat?.map((product) => (
             <Link href={`/products/${product.name.toLowerCase().replaceAll(' ', "-")}`} key={product.id} >
                 <ProductCard productName={product.name} productPrice={product.price} productImgUrl={product.img} productCategory={product.category}  />
            </Link>
        ))}
    </div>
  )
}

export default page
