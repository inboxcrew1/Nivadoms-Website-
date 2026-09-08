import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface StoredSubscriber {
  email: string;
  timestamp: string;
  dateIndia: string;
}

const DESTINATION_EMAIL = 'nivadoms@gmail.com';

function saveSubscriber(email: string) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'subscribers.json');
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    let existing: StoredSubscriber[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (Array.isArray(parsed)) existing = parsed;
      } catch {
        existing = [];
      }
    }
    const record: StoredSubscriber = {
      email,
      timestamp: new Date().toISOString(),
      dateIndia: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };
    existing.unshift(record);
    if (existing.length > 500) existing = existing.slice(0, 500);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');
  } catch (err) {
    process.stdout.write('[NEWSLETTER STORAGE WARNING]: ' + String(err) + '\n');
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body.email?.trim();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email address is required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Save to disk
    saveSubscriber(email);

    // Log to stdout for Hostinger runtime logs
    const logLine = `[NIVA NEWSLETTER SUBSCRIPTION]: ${email} at ${new Date().toISOString()}\n`;
    process.stdout.write(logLine);
    console.info('[NIVA SUBSCRIBER]:', email);

    // Forward notification to private inbox (nivadoms@gmail.com)
    try {
      await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Referer': 'https://nivadoms.com',
          'Origin': 'https://nivadoms.com',
        },
        body: JSON.stringify({
          _subject: `[NIVA DOMS] New Newsletter Subscriber: ${email}`,
          _template: 'table',
          _captcha: 'false',
          'Date & Time (IST)': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          'Subscriber Email': email,
          'Source': 'Footer Newsletter Subscription',
        }),
      });
    } catch (emailErr) {
      process.stdout.write('[EMAIL NEWSLETTER DISPATCH WARNING]: ' + String(emailErr) + '\n');
    }

    return NextResponse.json(
      { success: true, message: 'Thank you for subscribing to the NIVA journal.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[NIVA NEWSLETTER ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to process subscription.' },
      { status: 500 }
    );
  }
}
