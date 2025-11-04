import { NextResponse } from 'next/server';
import toursData from '@/lib/cms/tours.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const tour = toursData.tours.find((t) => t.slug === slug);
  
  if (!tour) {
    return NextResponse.json({ error: 'Tour not found' }, { status: 404 });
  }
  
  return NextResponse.json(tour);
}
