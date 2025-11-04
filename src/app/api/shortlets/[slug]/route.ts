import { NextResponse } from 'next/server';
import shortletsData from '@/lib/cms/shortlets.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const shortlet = shortletsData.shortlets.find((s) => s.slug === slug);
  
  if (!shortlet) {
    return NextResponse.json({ error: 'Shortlet not found' }, { status: 404 });
  }
  
  return NextResponse.json(shortlet);
}
