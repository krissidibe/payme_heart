/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    BASE_URL: process.env.BASE_URL,
    BASE_API_URL: process.env.BASE_API_URL,
    APP_WEP_URL: process.env.APP_WEP_URL,
     
  },

  reactStrictMode:true,

/*   experimental: { 
    serverComponentsExternalPackages: [
      '@react-email/components',
      '@react-email/render',
      '@react-email/tailwind'
  ]
  }, */
    webpack: (config, { isServer }) => {
        if (!isServer) {
          // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.resolve.fallback = {
            fs: false,
          };
        }
    
        return config;
      },


      async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                    { key:"Access-Control-Max-Age",value: "86400",}
                  ]
            }
        ]
    }
}

module.exports = nextConfig
