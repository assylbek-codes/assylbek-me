import { NextRequest, NextResponse } from 'next/server';

// Explicitly specify Edge runtime for middleware
export const runtime = 'edge';

export function middleware(request: NextRequest) {
  // Simple middleware to log requests and potentially catch errors
  // This can help diagnose issues in production
  console.log(`Handling request to: ${request.nextUrl.pathname}`);
  
  // Add CORS headers for API routes if needed
  const response = NextResponse.next();
  
  // Continue with the request
  return response;
}

export const config = {
  // Only run on specific routes if needed
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}; 