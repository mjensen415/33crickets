import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    // Example API Integration (e.g. Brevo) can be done here:
    // const API_KEY = process.env.BREVO_API_KEY;
    // ... fetch call to email provider ...

    // Simulating network delay for now
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('New subscriber received:', email);

    return NextResponse.json({ message: 'Success! You are now subscribed.' }, { status: 200 });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
