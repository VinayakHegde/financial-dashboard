import { NextResponse } from 'next/server';
import mockBalanceHistory from '@/mock-responses/balance-history.json';

export async function GET() {
  return NextResponse.json(mockBalanceHistory, { status: 200 });
}
