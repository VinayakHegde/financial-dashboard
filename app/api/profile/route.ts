import { NextResponse } from 'next/server'
import mockProfile from '@/mock-responses/profile.json'

let inMemoryProfile: typeof mockProfile | null = null;
export async function GET() {
  return NextResponse.json(inMemoryProfile ?? mockProfile, { status: 200 })
}

export async function PUT(req: Request) {
  const body = await req.json();
  inMemoryProfile = {
    ...inMemoryProfile,
    ...body
    
  }
  return NextResponse.json(inMemoryProfile, { status: 200 })
}