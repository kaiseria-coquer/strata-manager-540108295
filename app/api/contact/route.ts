export async function POST(req: Request) {
    const body = await req.json();
    const { name, message } = body;
  
    const committeeEmail = process.env.COMMITTEE_EMAIL;
  
    console.log(`📨 Sending message to: ${committeeEmail}`);
    console.log(`🧑 From: ${name}`);
    console.log(`📝 Message: ${message}`);
  
    return new Response(JSON.stringify({ status: 'ok' }), { status: 200 });
  }
  