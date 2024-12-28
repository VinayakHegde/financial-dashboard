import { NextResponse } from 'next/server';
import mockCards from '@/mock-responses/my-cards.json';

export async function GET() {
  return NextResponse.json(mockCards, { status: 200 });
}
