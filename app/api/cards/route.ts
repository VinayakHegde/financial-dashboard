import { NextResponse } from 'next/server'

type Card = {
  id: number
  cardNumber: number
  cardholderName: string
  balance: number
  expires: string
  category: 'credit' | 'debit'
}

export async function GET() {
  const mockCards: Card[] = [
    {
      id: 1,
      cardNumber: 3778123412341234,
      cardholderName: 'Jane Smith',
      expires: '12/29',
      balance: 2500.32,
      category: 'credit',
    },
    {
      id: 2,
      cardNumber: 4665123412345678,
      cardholderName: 'Jane Smith',
      expires: '10/28',
      balance: 4820.75,
      category: 'debit',
    },
    {
      id: 3,
      cardNumber: 3778123412341234,
      cardholderName: 'Jane Smith',
      expires: '12/29',
      balance: 2500.32,
      category: 'credit',
    },
    {
      id: 4,
      cardNumber: 4665123412345678,
      cardholderName: 'Jane Smith',
      expires: '10/28',
      balance: 4820.75,
      category: 'debit',
    },
  ]

  return NextResponse.json(mockCards, { status: 200 })
}