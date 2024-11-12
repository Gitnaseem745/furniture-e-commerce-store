"use client"
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='text-black w-full flex justify-center items-center h-screen'>
        <ul>
            <Link href="/products/product-6" ><ProductCard /></Link>
        </ul>
    </div>
  )
}
export default Page
