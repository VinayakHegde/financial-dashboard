import { NextResponse } from 'next/server';
import mockTransactions from '@/mock-responses/transactions.json';

export async function GET() {
  return NextResponse.json(mockTransactions, { status: 200 });
}
