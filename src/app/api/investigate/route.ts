import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { repoUrl, description } = await req.json();
    const tfBase = process.env.TRUEFORGE_BASE_URL || 'http://localhost:8790';
    const agentId = process.env.TRUEFORGE_AGENT_ID || 'evalipie';
    
    // 1. Create Session
    const sessionRes = await fetch(`${tfBase}/api/v1/sessions`, {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({ agent: { name: agentId } })
    });
    
    if (!sessionRes.ok) {
      const errorText = await sessionRes.text();
      console.error('Failed to create session:', errorText);
      return NextResponse.json({ error: 'Failed to create TrueForge session' }, { status: 500 });
    }
    
    const session = await sessionRes.json();
    const sessionId = session.data.id;

    // 2. Create Turn (Streaming)
    const prompt = `Please investigate the following project for bugs.
Repository: ${repoUrl}
Problem Statement: ${description}

Perform a full investigation: clone the repo in your sandbox, run it, test it, reproduce the issue, propose a fix, and verify it.

CRITICAL INSTRUCTION:
At the very end of your response, you MUST output a structured JSON block enclosed in \`\`\`json ... \`\`\` containing the exact results of your investigation matching this structure:
{
  "status": "RESOLVED" | "UNRESOLVED" | "UNVERIFIED",
  "reproduction": "Summary of what you observed when reproducing.",
  "rootCause": "Summary of the root cause.",
  "fix": "Summary of the fix proposed or applied.",
  "tests": {
    "total": number,
    "passed": number,
    "failed": number
  }
}
DO NOT fabricate numbers. If you did not run tests, set them to 0.`;
    
    const turnRes = await fetch(`${tfBase}/api/v1/sessions/${sessionId}/turns`, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json', 'Accept': 'text/event-stream' },
       body: JSON.stringify({
         input: [{ type: 'user.message', content: prompt }],
         stream: true
       })
    });
    
    if (!turnRes.ok) {
      const errorText = await turnRes.text();
      console.error('Failed to create turn:', errorText);
      return NextResponse.json({ error: 'Failed to create TrueForge turn' }, { status: 500 });
    }

    // 3. Proxy the SSE response back to the client
    // @ts-ignore
    return new Response(turnRes.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      }
    });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
