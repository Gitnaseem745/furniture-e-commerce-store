"use client";
import { use, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductTopSection from '@/components/ProductTopSection';

interface ProductPageProps {
  params: Promise<{ id: string; }>
}

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

const ProductPage = ({ params }: ProductPageProps) => {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`/api/product/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        console.error('Product not found');
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <Navbar />
      <ProductTopSection
        productDescription={product.shortDis}
        productName={product.name}
        productPrice={product.price}
        productImgUrl={product.img}
        productCategory={product.category}
      />
    </div>
  );
};

export default ProductPage;