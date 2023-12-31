/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };

        return config;
    },
    images: {
        remotePatterns: [{ hostname: '*' }],
    },
};

module.exports = nextConfig;
