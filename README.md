# Minimum Reproduction

## Clerk Tanstack Start Middleware Selective Route Protection

### Steps to reproduce:

1.  Initialize Clerk as normal.
2.  Create sign-in and sign-up pages (Or public-only pages).
3.  Create /dashboard (Or private pages).
4.  Add the following async function to clerkMiddleware in start.ts.

    `clerkMiddleware(async (auth, req) => {

    const url = new URL(req.url)

    const isPublicRoute = ['/', '/sign-in', '/sign-up'].includes(url.pathname)

    if (!isPublicRoute) {
    await auth.protect()
    }
    }),`

5.  Typescript error pops up in vscode and the website errors out too. i.e. `Argument of type '(auth: any, req: any) => Promise<void>' is not assignable to parameter of type 'ClerkMiddlewareOptions | ClerkMiddlewareOptionsCallback | undefined'.
Type '(auth: any, req: any) => Promise<void>' is not assignable to type 'ClerkMiddlewareOptionsCallback'.
  Target signature provides too few arguments. Expected 2 or more, but got 1.`
