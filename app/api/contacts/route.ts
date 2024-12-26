import { NextResponse } from 'next/server'
import mockContacts from '@/mock-responses/contacts.json'

export async function GET() {
  return NextResponse.json(mockContacts, { status: 200 })
}