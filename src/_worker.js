// Cloudflare Worker script for handling 500 errors and improving compatibility
export default {
  async fetch(request, env, ctx) {
    try {
      // Forward the request to the Next.js app
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // Log the error
      console.error('Error handling request:', e);
      
      // Return a custom error page
      return new Response(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Something went wrong</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              padding: 2rem;
              max-width: 600px;
              margin: 0 auto;
              text-align: center;
            }
            h1 { margin-top: 2rem; color: #333; }
            p { color: #666; line-height: 1.6; }
            .btn {
              display: inline-block;
              margin-top: 1rem;
              padding: 0.5rem 1rem;
              background: #0070f3;
              color: white;
              border-radius: 5px;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <h1>Something went wrong</h1>
          <p>We're sorry, but there was an error processing your request.</p>
          <a href="/" class="btn">Go back home</a>
        </body>
        </html>`,
        {
          status: 500,
          headers: {
            'content-type': 'text/html',
          },
        }
      );
    }
  },
};