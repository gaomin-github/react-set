const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path');
const fs=require('fs');


// const index_entry=path.resolve.apply(path,[fs.realpathSync(process.cwd()),'./src/index.js'])
// const index_template=path.resolve.apply(path,[fs.realpathSync(process.cwd()),'./index.html'])
// console.log('indexPath',5,index_entry)

function getBaseWebpackConfig(){
    const config={
        entry:{
            main:['./src/index.js']
        },
        alias:{
            $redux:'../src/redux',
            $service:'../src/service'
        },
        resolve:{
            extensions:['.js','.jsx']
        },
        // entry:['src/index.js'],
        module:{
            rules:[
                {
                    test:/\.(js|jsx)?$/,
                    exclude:/node_modules/,
                    use:getBabelLoader()
                }
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                inject:true,
                // template:index_template,
                template:'./index.html',
                filename:'index.html',
                chunksSortMode:'manual',
                chunks:['app']
            })
        ]
    
    }
    return config;
}

function getBabelLoader(options){
    const configFile='../.babelrc';
    return{
        loader:'babel-loader',
        options:{
            babelrc:false,
            configFile,
            ...options
        }
    }
}
module.exports={
    getBaseWebpackConfig
}