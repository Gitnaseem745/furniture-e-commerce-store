"use client"
import PageIntro from '@/components/PageIntro';
import ProductCard from '@/components/ProductCard';
import ProductCategoryCard from '@/components/ProductCategoryCard';
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

    const toCapitalCase = (word: string) => {
        let firstChar: string = word.charAt(0).toUpperCase();
        let remainingWord: string = '';
        for(let i=1; i<word.length; i++){
            remainingWord += word.charAt(i);
        }
        return firstChar + remainingWord;
    }

  return (
    <div className='flex justify-center items-center flex-col gap-10'>
         <div className='w-11/12'>
            <PageIntro sectionBgImage={`/images/${category}-category-hero-image.webp`} sectionName={toCapitalCase(category)} />
         </div>
         <div className='flex flex-row justify-center items-center w-11/12 gap-10 flex-wrap'>
            {
                categories.map((cat, i) => (
                   cat.name.toLowerCase() != category && <Link key={i} href={`/product-category/${cat.name.toLowerCase()}`}>
                        <ProductCategoryCard categroyName={toCapitalCase(cat.name)} categoryProductsCount={cat.count} categoryImgUrl={`/images/${cat.name}-category-hero-image.webp`} />
                   </Link>
                ))
            }
         </div>
        <div className='flex flex-row flex-wrap px-10 justify-center items-center gap-10'>
        {cat?.map((product) => (
             <Link href={`/products/${product.name.toLowerCase().replaceAll(' ', "-")}`} key={product.id} >
                 <ProductCard productName={product.name} productPrice={product.price} productImgUrl={product.img} productCategory={product.category}  />
            </Link>
        ))}
        </div>
    </div>
  )
}
const categories = [
    {
        name: "Chairs",
        count: 5
    },
    {
        name: "Storage",
        count: 4
    },
    {
        name: "Armchairs",
        count: 7
    },
    {
        name: "Sofas",
        count: 3
    },
    {
        name: "Beds",
        count: 9
    },
    {
        name: "Tables",
        count: 4
    },
    {
        name: "Decor",
        count: 8
    }
    ];
export default page
