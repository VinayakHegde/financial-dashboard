import { NextResponse } from 'next/server'
import mockExpenses from '@/mock-responses/expenses.json'

export async function GET() {
  return NextResponse.json(mockExpenses, { status: 200 })
}