import { NextResponse } from 'next/server';

const products = Array.from({ length: 10 }, (_, index) => ({
  id: `product-${index + 1}`,
  name: `Molten Steel Mug ${index + 1}`,
  price: "$199.00",
  shortDis: "New Molten Cup, Made of molten lava from Mount Fuji's lava dust.",
  img: "/images/homeCard4.webp",
  category: "Decor",
  longDis: "Not Available Right Now.",
  additionalInfo: "Nothing...",
}));

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const product = products.find(p => p.id == resolvedParams.id);
  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
}
