export async function onRequest(context) {
  // Return a simple HTML response to confirm the function is working
  return new Response(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Domain Debug Page</title>
      </head>
      <body>
        <h1>Domain is working!</h1>
        <p>If you can see this page, your domain is correctly configured with Cloudflare Pages.</p>
        <p>Hostname: ${context.request.headers.get('host')}</p>
        <p>URL: ${context.request.url}</p>
        <pre>${JSON.stringify({
          cf: context.request.cf,
          headers: Object.fromEntries([...context.request.headers]),
        }, null, 2)}</pre>
      </body>
    </html>
    `,
    {
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
} 