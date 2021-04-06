// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function cssLoaders(options) {
    options = options || {};
  
    const cssLoader = {
      loader: 'css-loader',
      options: {
        minimize: process.env.NODE_ENV === 'production' && { safe: true },
        sourceMap: options.sourceMap,
        importLoaders: 1
      }
    };
  
    const postcssLoader = {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: options.sourceMap,
        plugins: () => [
          // PostcssFlexbugsFixes,
          Autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9' // React doesn't support IE8 anyway
            ],
            // flexbox: 'no-2009' // ios 10和10一下都有问题 暂时注释掉先
          })
        ]
      }
    };
  
    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
      const loaders=[cssLoader,postcssLoader]
      // const loaders = exports.getCacheLoader([cssLoader, postcssLoader]);
      if (loader) {
        loaders.push({
          loader: loader + '-loader',
          options: Object.assign(
            {
              sourceMap: options.sourceMap
            },
            loaderOptions
          )
        });
      }
  
      // Extract CSS when that option is specified
      // (which is the case during production build)
      // if (options.extract) {
      //   return [MiniCssExtractPlugin.loader].concat(loaders);
      // } else {
        return ['style-loader'].concat(loaders);
      // }
    }
  
    return {
      css: generateLoaders(),
      less: generateLoaders('less'),
    };
  }

  exports.styleLoaders = function styleLoaders(options) {
    const output = [];
    const loaders = cssLoaders(options);
    console.log('loaders',loaders,69)
    for (let extension in loaders) {
      console.log('extension',extension,71)
      output.push({
        test: new RegExp('\\.' + extension + '$'),
        use: loaders[extension]
      });
    }
    console.log('output',JSON.stringify(output),76)
    return output;
  };
  