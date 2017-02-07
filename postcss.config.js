const webpack = require('webpack');
module.exports = {
  plugins: [
    require('autoprefixer')({ /* ...options */ }),
    require('cssnano')({ /* ...options */ }),
    require('postcss-url')({ /* ...options */ }),
    require('postcss-smart-import')({ addDependencyTo: webpack }),
    require('postcss-cssnext')({ /* ...options */ }),
  ]
}