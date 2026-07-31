import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "es"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export const config = {
  // Skip all paths that should not be internationalized: the "api", "_next"
  // folders, files with an extension (e.g. favicon.ico), and the Next.js
  // metadata file-convention routes (opengraph-image, twitter-image, icon,
  // apple-icon), which live outside the [locale] segment.
  matcher: [
    "/((?!api|_next|opengraph-image|twitter-image|icon|apple-icon|.*\\..*).*)",
  ],
};
