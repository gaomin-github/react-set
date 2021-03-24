
const path=require('path');

const webpack=require('webpack');
const merge=require('webpack-merge');
const WebpackDevServer=require('webpack-dev-server');
const devConfig=require('../config/webpack.dev.config.js');

let webpackConfig=devConfig;
// console.log(webpackConfig,8)
const compiler=createCompiler(webpackConfig);
// console.log('webpackConfig',webpackConfig,9)

function createCompiler(config){
    let compiler;
    try{
        compiler=webpack(config);
    }catch(err){
        console.log('fail to compile',err);
        process.exit(1)
    }

    return compiler;
}

const devServerConfig={
    historyApiFallback:true,
    compress:true,
    clientLogLevel:'none',
    hot:true,
    contentBase: path.resolve(__dirname, "../"),


}
const devServer=new WebpackDevServer(compiler,devServerConfig);
devServer.listen('3003','0.0.0.0',err=>{
    if(err){
        return console.log('devServer listen err',er);
    }
})
