const path = require('path');
const { merge } = require('webpack-merge')
const parts = require('./webpack.parts.js')

const commonConfig = () => {
  return merge([
    {
      entry: './src/index.js',
      output: {
        chunkFilename: 'chunk.[id].js',
        path: path.resolve(__dirname, 'dist'),
      },
    },
    parts.clean(),
    parts.page({ title: '🎸 Demo' }),
    parts.loadJavaScript(),
    parts.loadCSS()
  ])
}

const developmentConfig = merge([
  parts.devServer()
])

const productionConfig = merge([
  parts.generateSourceMaps({ type: 'source-map' }),
  {
    entry: {
      app: {
        import: path.join(__dirname, 'src', 'index.js'),
        dependOn: 'vendor'
      },
      vendor: ['react', 'react-dom']
    }
  }
])

const getConfig = (mode) => {
  switch(mode) {
    case 'production':
      return merge(commonConfig(), productionConfig, { mode })
    case 'development':
      return merge(commonConfig(), developmentConfig, { mode })
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`) 
  }
}

module.exports = (env, argv) => { 
  return getConfig(argv.mode) 
}