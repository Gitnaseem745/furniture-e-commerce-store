"use client";
import { use, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductTopSection from '@/components/ProductTopSection';
import ProductBottomSection from '@/components/ProductBottomSection';

interface ProductPageProps {
  params: Promise<{ name: string }>
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

const ProductPage = ({ params }: ProductPageProps) => {
  const { name } = use(params);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`/api/products?name=${name}`);
      if (!response.ok) {
        throw new Error('Product not found');
      }
      const data = await response.json();
      setProduct(data);
    }

    fetchProduct();
  }, [name]);

  if (!product) return <p className='flex justify-center items-center w-full h-[400px] text-2xl font-semibold'>Loading Product Details...</p>;

  return (
    <div className="px-10">
      <Navbar />
      <ProductTopSection
        productDescription={product.shortDis}
        productName={product.name}
        productPrice={product.price}
        productImgUrl={product.img}
        productCategory={product.category}
      />
      <ProductBottomSection desc={product.longDis} information={product.additionalInfo} />
    </div>
  );
};

export default ProductPage;
