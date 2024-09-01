/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/www.jurislex.fr",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
