import { NextResponse } from 'next/server';
import toursData from '@/lib/cms/tours.json';

export async function GET() {
  return NextResponse.json(toursData);
}
