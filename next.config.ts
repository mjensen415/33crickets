import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      /*
       * 301 map from old Squarespace URLs, required before DNS cutover.
       * /services and /about map 1:1 and need no redirect.
       * /blog/* is temporary (307) until Thinking launches with 3 posts,
       * then switch to permanent /blog/:path* -> /thinking.
       */
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
