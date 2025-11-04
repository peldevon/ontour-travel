import { NextResponse } from 'next/server';
import shortletsData from '@/lib/cms/shortlets.json';

export async function GET() {
  return NextResponse.json(shortletsData);
}
