const fs=require('fs');
const merge = require('webpack-merge');
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 编译分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');


const baseWebpackConfig=require('./webpack.base.config.js').getBaseWebpackConfig()
const prodConfig={
    mode:'production',
    entry:{
        main:'./src/index.tsx',
    },
    output:{
        filename: 'js/[name].[dev].js',
        chunkFilename: 'js/[name].[dev].js',
        path:path.resolve(__dirname,'../built'),
        publicPath:'./'
    },
    resolve:{
        extensions:['.tsx','.ts','.json','.js','.jsx'],
        alias:{
            $redux:path.resolve(__dirname,'../src/redux'),
            $service:path.resolve(__dirname,'../src/service'),
            $components:path.resolve(__dirname,'../src/components')
        },
    },

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
        // new MinCssExtractPlugin({
        //     filename: 'mybearweb/css/[name].css',
        //     chunkFilename: 'mybearweb/css/[id].css'
        // }),

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

// console.log('merge',merge)

prodConfig.plugins.push(new BundleAnalyzerPlugin({
    // analyzerMode:'server',
    // analyzerHost: 'localhost',
    analyzerPort: 4003,
    // reportFilename: 'report.html',
    // defaultSizes: 'parsed',
    // generateStatsFile: false,
    // statsFilename: 'stats.json',
    // statsOptions: null,
    // logLevel: 'info'
}))

module.exports=prodConfig;
