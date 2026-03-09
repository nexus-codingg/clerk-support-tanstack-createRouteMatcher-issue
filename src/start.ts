import { clerkMiddleware } from '@clerk/tanstack-react-start/server'
import { createStart } from '@tanstack/react-start'

export const startInstance = createStart(() => {
  return {
    requestMiddleware: [
      clerkMiddleware(async (auth, req) => {
        const url = new URL(req.url)
        const isPublicRoute = ['/', '/sign-in', '/sign-up'].includes(
          url.pathname,
        )

        if (!isPublicRoute) {
          await auth.protect()
        }
      }),
    ],
  }
})
