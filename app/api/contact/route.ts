import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Telegram Bot Configuration
    const BOT_TOKEN = "8507618426:AAHfLCS2WIC26lrqRM6jTL0yTMFqPoFrfFo";
    const CHAT_ID = "1870688843";
    
    const telegramMessage = `
📬 *New Portfolio Message*
👤 *Name:* ${name}
📧 *Email:* ${email}
💬 *Message:* ${message}
    `;

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API Error:', errorData);
      return NextResponse.json({ error: 'Failed to send message', details: errorData }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}