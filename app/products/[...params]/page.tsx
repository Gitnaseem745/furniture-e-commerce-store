import Navbar from '@/components/Navbar';
import ProductTopSection from '@/components/ProductTopSection';
import { useRouter } from 'next/router';
interface PageProps {
    params: {
        id: string;
        productName: string;
        productPrice: string;
        productShortDescription: string;
        productImgUrl: string;
        productCategory: string;
        productLongDescription: string;
        productAdditionalInfo: string;
    }
}
const page = ({ params }: PageProps) => {
    const { id, productName, productPrice, productShortDescription, productImgUrl,
            productCategory, productLongDescription, productAdditionalInfo } = params;
  return (
    <div className='p-10'>
        <Navbar />
        <ProductTopSection productDescription={productShortDescription} productName={productName} productPrice={productPrice} productImgUrl={productImgUrl} productCategory={productCategory} />
        {id}
    </div>
  )
}

export default page
