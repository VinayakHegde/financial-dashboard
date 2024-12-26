import { NextResponse } from 'next/server'
import mockActivities from '@/mock-responses/activities.json'

export async function GET() {
  return NextResponse.json(mockActivities, { status: 200 })
}