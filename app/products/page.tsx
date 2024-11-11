import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='text-black'>
        <h1>Products</h1>
        <ul>
            <Link href={"/products/mug/coffe-table/$199.99/notavailable/null/nan/new"}><ProductCard /></Link>
        </ul>
    </div>
  )
}

export default Page
