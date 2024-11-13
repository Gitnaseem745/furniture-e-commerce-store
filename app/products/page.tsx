"use client"
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Product {
    id: string;
    name: string;
    price: string;
    shortDis: string;
    img: string;
    category: string;
    longDis: string;
    additionalInfo: string;
  }
const Page = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/products');
            if (!res.ok) {
                throw new Error('Products not found');
            }
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    }, [])
  return (
    <div className='text-black w-full flex justify-center items-center max-h-fit flex-wrap flex-row gap-10'>
            { products?.map( product =>(
                    <Link href={`/products/${product.name.toLowerCase().replaceAll(' ', "-")}`} key={product.id} >
                        <ProductCard productName={product.name} productPrice={product.price} productImgUrl={product.img} productCategory={product.category}  />
                    </Link>
            ))}
    </div>
  )
}
export default Page
