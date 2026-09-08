import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ContactPayload {
  fullName?: string;
  phone?: string;
  email?: string;
  location?: string;
  companyName?: string;
  projectType?: string;
  units?: string;
  preferredModel?: string;
  message?: string;
  notes?: string;
  honeypot?: string;
}

interface StoredInquiry {
  inquiryId: string;
  timestamp: string;
  dateIndia: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  companyName: string;
  projectType: string;
  units: string;
  preferredModel: string;
  details: string;
  source: string;
}

const ADMIN_KEY = process.env.ADMIN_KEY || 'niva2026';
const DESTINATION_EMAIL = 'nivadoms@gmail.com';

function getInquiriesFilePath(): string {
  return path.join(process.cwd(), 'data', 'inquiries.json');
}

function saveInquiry(record: StoredInquiry) {
  try {
    const filePath = getInquiriesFilePath();
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    let existing: StoredInquiry[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (Array.isArray(parsed)) existing = parsed;
      } catch {
        existing = [];
      }
    }
    existing.unshift(record);
    if (existing.length > 500) existing = existing.slice(0, 500);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8');
  } catch (err) {
    process.stdout.write('[STORAGE WARNING]: Could not write to inquiries.json: ' + String(err) + '\n');
  }
}

function loadInquiries(): StoredInquiry[] {
  try {
    const filePath = getInquiriesFilePath();
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (Array.isArray(data)) return data;
    }
  } catch (err) {
    console.error('Error loading inquiries:', err);
  }
  return [];
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // 1. Anti-spam honeypot check
    if (body.honeypot && body.honeypot.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Inquiry received' }, { status: 200 });
    }

    // 2. Validate mandatory fields
    const fullName = body.fullName?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();
    const location = body.location?.trim();

    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { success: false, error: 'Full name, phone number, and email address are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (phone.length < 7 || phone.length > 25) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid contact number.' },
        { status: 400 }
      );
    }

    // 3. Structure inquiry record
    const inquiryId = 'NIVA-' + Date.now().toString(36).toUpperCase();
    const now = new Date();
    const formattedDate = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const inquiryRecord: StoredInquiry = {
      inquiryId,
      timestamp: now.toISOString(),
      dateIndia: formattedDate,
      fullName,
      email,
      phone,
      location: location || 'Not specified',
      companyName: body.companyName?.trim() || 'Individual / Private Estate',
      projectType: body.projectType || 'Resort',
      units: body.units || '1-2 Units',
      preferredModel: body.preferredModel || 'NIVA D1',
      details: body.message?.trim() || body.notes?.trim() || 'No additional notes provided.',
      source: 'nivadoms.com website inquiry',
    };

    // 4. Save persistently to disk
    saveInquiry(inquiryRecord);

    // 5. Always write to server stdout for Hostinger Runtime logs
    const logMessage = '[NIVA INQUIRY RECEIVED]: ' + JSON.stringify(inquiryRecord, null, 2) + '\n';
    process.stdout.write(logMessage);
    console.info('[NIVA LEAD]:', inquiryId, fullName, phone, email);

    // 6. Forward to private company email (nivadoms@gmail.com) via FormSubmit
    try {
      await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Referer': 'https://nivadoms.com/contact',
          'Origin': 'https://nivadoms.com',
        },
        body: JSON.stringify({
          _subject: `[NIVA DOMS Inquiry] ${fullName} - ${inquiryRecord.preferredModel}`,
          _template: 'table',
          _captcha: 'false',
          'Inquiry ID': inquiryId,
          'Date & Time (IST)': formattedDate,
          'Client Name': fullName,
          'Client Email': email,
          'Client Phone': phone,
          'Location': inquiryRecord.location,
          'Company / Property': inquiryRecord.companyName,
          'Project Type': inquiryRecord.projectType,
          'Preferred Model': inquiryRecord.preferredModel,
          'Units Required': inquiryRecord.units,
          'Project Requirements / Message': inquiryRecord.details,
          'Source': inquiryRecord.source,
        }),
      });
    } catch (emailErr) {
      process.stdout.write('[EMAIL DISPATCH WARNING]: ' + String(emailErr) + '\n');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you. Your inquiry has been received. Our architectural team will contact you within 24 hours.',
        inquiryId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[NIVA API ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to process inquiry at this time. Please contact info@nivadoms.com directly.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const key = searchParams.get('key');
  const format = searchParams.get('format');

  if (key !== ADMIN_KEY) {
    return new NextResponse('Unauthorized. Access key required.', { status: 401 });
  }

  const inquiries = loadInquiries();

  if (format === 'json') {
    return NextResponse.json({ total: inquiries.length, inquiries });
  }

  if (format === 'csv') {
    const headers = ['Inquiry ID', 'Date IST', 'Name', 'Email', 'Phone', 'Location', 'Company', 'Model', 'Units', 'Details'];
    const rows = inquiries.map((i) => [
      i.inquiryId || '',
      i.dateIndia || i.timestamp || '',
      `"${(i.fullName || '').replace(/"/g, '""')}"`,
      i.email || '',
      i.phone || '',
      `"${(i.location || '').replace(/"/g, '""')}"`,
      `"${(i.companyName || '').replace(/"/g, '""')}"`,
      i.preferredModel || '',
      i.units || '',
      `"${(i.details || '').replace(/"/g, '""')}"`,
    ]);
    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="niva-leads.csv"',
      },
    });
  }

  // Render luxury administrative dashboard
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NIVA DOMS — Client Inquiries Dashboard</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: #0D0D0F;
      color: #F2EFE6;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      padding: 24px 16px;
      line-height: 1.5;
    }
    .container { max-width: 1200px; margin: 0 auto; }
    header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(201,164,106,0.25);
      margin-bottom: 28px;
      gap: 16px;
    }
    .brand h1 {
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0.15em;
      color: #F2EFE6;
    }
    .brand span {
      font-size: 11px;
      letter-spacing: 0.25em;
      color: #C9A46A;
      text-transform: uppercase;
    }
    .actions { display: flex; gap: 12px; }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 10px 18px;
      background: #C9A46A;
      color: #0D0D0F;
      text-decoration: none;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.05em;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn:hover { background: #E1B977; }
    .stats {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
      flex-wrap: wrap;
    }
    .stat-card {
      background: #141418;
      border: 1px solid rgba(201,164,106,0.2);
      border-radius: 6px;
      padding: 16px 24px;
      min-width: 180px;
    }
    .stat-num { font-size: 28px; font-weight: 600; color: #C9A46A; }
    .stat-label { font-size: 11px; color: #B7B0A1; text-transform: uppercase; letter-spacing: 0.1em; }
    .table-wrap {
      background: #141418;
      border: 1px solid rgba(201,164,106,0.2);
      border-radius: 6px;
      overflow-x: auto;
    }
    table { width: 100%; border-collapse: collapse; text-align: left; font-size: 13px; }
    th {
      background: #1A1A20;
      color: #C9A46A;
      padding: 14px 16px;
      font-weight: 600;
      font-size: 11px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border-bottom: 1px solid rgba(201,164,106,0.2);
    }
    td {
      padding: 16px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      vertical-align: top;
    }
    tr:hover td { background: rgba(201,164,106,0.03); }
    .tag {
      display: inline-block;
      padding: 3px 8px;
      background: rgba(201,164,106,0.15);
      color: #C9A46A;
      border: 1px solid rgba(201,164,106,0.3);
      border-radius: 3px;
      font-size: 11px;
      font-weight: 500;
    }
    a.contact-link {
      color: #F2EFE6;
      text-decoration: none;
      display: block;
      transition: color 0.2s;
    }
    a.contact-link:hover { color: #C9A46A; }
    .meta { font-size: 11px; color: #B7B0A1; margin-top: 4px; }
    .empty { padding: 48px; text-align: center; color: #B7B0A1; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <h1>NIVA DOMS</h1>
        <span>Commercial Inquiries &amp; Client Leads</span>
      </div>
      <div class="actions">
        <a href="?key=${ADMIN_KEY}&format=csv" class="btn">Download CSV</a>
        <a href="?key=${ADMIN_KEY}&format=json" target="_blank" class="btn" style="background:#1A1A20;color:#F2EFE6;border:1px solid rgba(201,164,106,0.3);">View JSON</a>
      </div>
    </header>

    <div class="stats">
      <div class="stat-card">
        <div class="stat-num">${inquiries.length}</div>
        <div class="stat-label">Total Inquiries Received</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">nivadoms@gmail.com</div>
        <div class="stat-label">Forwarding Destination</div>
      </div>
    </div>

    <div class="table-wrap">
      ${
        inquiries.length === 0
          ? '<div class="empty">No client inquiries received yet. Once submitted, they will appear here and in nivadoms@gmail.com instantly.</div>'
          : `<table>
        <thead>
          <tr>
            <th>Date &amp; ID</th>
            <th>Client Name</th>
            <th>Contact Details</th>
            <th>Project &amp; Model</th>
            <th>Location &amp; Estate</th>
            <th>Message / Notes</th>
          </tr>
        </thead>
        <tbody>
          ${inquiries
            .map(
              (i) => `<tr>
            <td>
              <strong style="color:#C9A46A;">${i.inquiryId || 'NIVA'}</strong>
              <div class="meta">${i.dateIndia || i.timestamp || ''}</div>
            </td>
            <td><strong>${i.fullName}</strong></td>
            <td>
              <a href="tel:${(i.phone || '').replace(/\s+/g, '')}" class="contact-link">📞 ${i.phone}</a>
              <a href="mailto:${i.email}" class="contact-link" style="color:#B7B0A1;font-size:12px;">✉️ ${i.email}</a>
            </td>
            <td>
              <span class="tag">${i.preferredModel || 'NIVA D1'}</span>
              <div class="meta">${i.units || '1 Unit'} • ${i.projectType || 'Resort'}</div>
            </td>
            <td>
              <div>${i.location || 'Not specified'}</div>
              <div class="meta">${i.companyName || 'Private'}</div>
            </td>
            <td style="max-width:320px;font-size:12px;color:#CCC7BC;">${i.details || 'No additional notes.'}</td>
          </tr>`
            )
            .join('')}
        </tbody>
      </table>`
      }
    </div>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
