/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/bot_interaction',
          destination: 'https://mrneuralnet-chain-link-ai.hf.space/bot_interaction*',
        },
      ];
    },
  };
