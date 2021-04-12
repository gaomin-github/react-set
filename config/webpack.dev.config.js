const fs=require('fs');
const merge = require('webpack-merge');
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


// const utils=require('./util.js')
const baseWebpackConfig=require('./webpack.base.config.js').getBaseWebpackConfig()
// console.log(path.resolve())
// console.log('path',path)
const devConfig={
    mode:'development',
    entry:{
        main:'./src/index.tsx',
    },
    output:{
        filename: 'js/[name].[dev].js',
        chunkFilename: 'js/[name].[dev].js',
    },
    resolve:{
        extensions:['.tsx','.ts','.json','.js','.jsx'],
        alias:{
            $redux:path.resolve(__dirname,'../src/redux'),
            $service:path.resolve(__dirname,'../src/service'),
            $components:path.resolve(__dirname,'../src/components'),
            $structure:path.resolve(__dirname,'../src/structure'),
            $libs:path.resolve(__dirname,'../src/libs'),
            $modules:path.resolve(__dirname,'../src/modules')
        },
    },
    devServer:{
        historyApiFallback:true,
        host:'0.0.0.0',
        port:'3003',
        open:false,
        contentBase: path.resolve(__dirname, "../"),
        publicPath: "/",
        disableHostCheck: true,
    },
    devtool: "inline-source-map",

    module:{
        rules:[

            // ...utils.styleLoaders({sourceMap:false}),
            {
                test:/\.(css|less)$/,
                use:['style-loader','css-loader','postcss-loader','less-loader'],
                include:[
                    path.resolve(__dirname,'../src'),
                    // path.resolve(__dirname,'../common/components')
                ]
            },
            {
                test:/\.(ts|tsx|js|jsx)$/,
                use:['source-map-loader'],
                // exclude:/node_modules/,
                enforce:'pre'
            },
            {
                test:/\.(ts|tsx|js|jsx)$/,
                use:['babel-loader'],
                // exclude:/node_modules/,
                // enforce:'pre'
            },
            {
                test:/\.(ts|tsx)$/,
                use:['ts-loader'],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:true,
            // template:index_template,
            template:'./index.html',
            filename:'index.html',
            // chunksSortMode:'manual',
            // chunks:['app']
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    // maxSize: 5000,
                    chunks: 'initial',
                    priority: 10,
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    test: /[\\/]src[\\/]/,
                    // minSize: 1024,
                    chunks: 'async',
                    priority: 5,
                    reuseExistingChunk: true,
                }
            }
        },
        minimizer: [new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }),
        ]
    },
    stats:{
        warnings:false
    },
    devtool:'source-map-inline',
}

// devConfig.plugins.push(new BundleAnalyzerPlugin({
//     analyzerPort: 4003,
// }))

// console.log('merge',merge)

// let config=merge(baseWebpackConfig,devConfig);

module.exports=devConfig;
