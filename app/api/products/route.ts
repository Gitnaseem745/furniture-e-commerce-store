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
  const filePath = path.join(process.cwd(), 'products.json');

  try {
    const data = await fs.readFile(filePath, 'utf8');
    const products: Product[] = JSON.parse(data);

    if (name) {
      const product = products.find(
        (p) => p.name.toLowerCase().replaceAll(' ', '') === name.replaceAll('-', '').toLowerCase()
      );

      if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
      }

      return NextResponse.json(product, { status: 200 });
    }

    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Error reading file' }, { status: 500 });
  }
}
