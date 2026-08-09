/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      // www and the bare domain were both serving the site at 200, which means
      // Google saw two hostnames and had to guess they were the same campaign.
      // The canonical tag in app/layout.tsx already pointed at the bare domain,
      // so this only makes explicit what was implied — but it also means a
      // shared "www." link stops splitting the traffic stats in Search Console.
      //
      // Host-scoped, so it can never fire on the bare domain and loop. The
      // Google verification file lives on the bare domain, which is the one
      // that is verified, so this does not touch it.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.votenoahsmith.com" }],
        destination: "https://votenoahsmith.com/:path*",
        permanent: true,
      },
    ];
  },
};
