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
    
}
