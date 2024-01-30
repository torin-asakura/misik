module.exports = {
  experimental: {
    externalDir: true,
    swcFileReading: false,
    workerThreads: true,
    outputStandalone: true,
    esmExternals: 'loose',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  staticPageGenerationTimeout: 1000,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(gltf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name][ext]',
        },
      },
      {
        test: /\.(bin)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name][ext]',
        },
      }
    )

    return config
  },
}
