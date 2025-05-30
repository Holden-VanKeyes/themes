import { NextResponse } from 'next/server'
import db from '../../../../db'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Insert email into database
    await db('subscribers').insert({ email })

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    )
  } catch (error: any) {
    // Handle duplicate emails
    if (error.code === '23505') {
      // Postgres unique constraint violation code
      return NextResponse.json(
        { message: 'You are already subscribed' },
        { status: 409 }
      )
    }

    console.error('Subscription error:', error)

    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
