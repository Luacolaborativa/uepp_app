/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://127.0.0.1:8000/api/:path*' // Proxy to Backend
            }
        ]
    },
    devServer: {
        port: 8000 // Specify the port you want to use
    }
};

export default nextConfig;
