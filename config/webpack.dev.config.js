const fs=require('fs');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path=require('path');
const utils=require('./util.js')
const baseWebpackConfig=require('./webpack.base.config.js').getBaseWebpackConfig()
// console.log(path.resolve())
// console.log('path',path)
const devConfig={
    mode:'development',
    entry:{
        main:['./src/index.js']
    },

    output:{
        filename: 'js/[name].[dev].js',
        chunkFilename: 'js/[name].[dev].js',
    },
    module:{
        rules:[
            ...utils.styleLoaders({sourceMap:false}),
            {
                test:/\.js$/,
                use:['source-map-loader'],
                // exclude:/node_modules/,
                enforce:'pre'
            },
            {
                test:/\.js$/,
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
