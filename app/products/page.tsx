import Link from 'next/link'

const Page = () => {
  return (
    <div className='text-black'>
        <h1>Products</h1>
        <ul>
            <Link href={"/products/chair"}>Product 1</Link>
            <Link href={"/products/table"}>Product 2</Link>
            <Link href={"/products/coffe-table"}>Product 3</Link>
            <Link href={"/products/mug"}>Product 4</Link>
        </ul>
    </div>
  )
}

export default Page
