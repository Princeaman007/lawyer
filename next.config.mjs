/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/lawyer",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
