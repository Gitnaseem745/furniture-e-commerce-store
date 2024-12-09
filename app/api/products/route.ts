import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

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

export async function GET(req: Request) {
  const url = new URL(req.url);
  const name = url.searchParams.get('name');
  const limit = url.searchParams.get('limit');
  const category = url.searchParams.get('category');
  const filePath = path.join(process.cwd(), 'products.json');

  try {
    const data = await fs.readFile(filePath, 'utf8');
    let products: Product[] = JSON.parse(data);

    if (name) {
      const product = products.find(
        (p) => {
            // updated for fetching products with name like Two-Seater | Mid-Century
            const normalizeString = (str: string) => str.toLowerCase().replace(/[^a-z0=9]/g, '');
            return normalizeString(p.name).includes(normalizeString(name));
        }
      );
      if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
      }
      return NextResponse.json(product, { status: 200 });
    }
    if (category) {
        products = products.filter(
            // fixes for ( armchairs includes chairs ) both category products on chairs category
            (p) => (p.category.toLowerCase().replaceAll(' ', '') === (category.toLowerCase().replaceAll('-', '')))
        )
        if (!products) {
            return NextResponse.json( { message: "Category Not Found!" }, { status: 500 })
        }
      }
     // updated for fetching limited products
     if (limit) {
        const productLimit = parseInt(limit, 10);
        if(!isNaN(productLimit)) {
            products = products.slice(0, productLimit);
        }
     }
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Error reading file' }, { status: 500 });
  }
}
