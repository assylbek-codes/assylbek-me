export default function middleware(request) {
  // Simple middleware to log requests and potentially catch errors
  // This can help diagnose issues in production
  console.log(`Handling request to: ${request.nextUrl.pathname}`);
  
  // Continue with the request
  return Response.next();
}

export const config = {
  // Only run on specific routes if needed
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}; 