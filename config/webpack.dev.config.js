const fs=require('fs');
const merge = require('webpack-merge');
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const utils=require('./util.js')
const baseWebpackConfig=require('./webpack.base.config.js').getBaseWebpackConfig()
// console.log(path.resolve())
// console.log('path',path)
const devConfig={
    mode:'development',
    entry:{
        main:'./src/index.js',
    },
    output:{
        filename: 'js/[name].[dev].js',
        chunkFilename: 'js/[name].[dev].js',
    },
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            $redux:path.resolve(__dirname,'../src/redux'),
            $service:path.resolve(__dirname,'../src/service'),
            $components:path.resolve(__dirname,'../src/components')
        },
    },

    module:{
        rules:[
            ...utils.styleLoaders({sourceMap:false}),
            {
                test:/\.(js|jsx)$/,
                use:['source-map-loader'],
                // exclude:/node_modules/,
                enforce:'pre'
            },
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                // exclude:/node_modules/,
                // enforce:'pre'
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
    stats:{
        warnings:false
    },
    devtool:'eval-source-map',
}

// console.log('merge',merge)

// let config=merge(baseWebpackConfig,devConfig);

module.exports=devConfig;
