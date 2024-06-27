import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// All routes protected by default except those here.
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(
  (auth, request) => {
    if (!isPublicRoute(request)) {
      auth().protect();
    }
  },
  { debug: false }
);

// c.f. https://clerk.com/docs/references/nextjs/clerk-middleware
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
