var webpack = require('webpack');
module.exports = {
    entry:{
        bundle1:'./entry1.js',
        bundle2:'./entry2.js'
    },       //指定打包的入口文件，每有一个键值对，就是一个入口文件       //指定打包的入口文件，每有一个键值对，就是一个入口文件
    output: { //配置打包结果
        path: __dirname,       //定义了输出的文件夹
        filename: "[name].js"  //定义了打包结果文件的名称
    },
    module: {  //定义模块的加载逻辑
        loaders: [ //定义了一系列的加载器
            //loader可以省略
           // {test: /\.less$/ ,loader:"style-loader!css-loader!less-loader"},
            {test: /\.css$/, loader: "style!css"}, //当需要加载的文件匹配`test`的正则时，就会调用后面的`loader`对文件进行处理
            {test: /\.(png|jpg)$/, loader: 'url?limit=40000'},//两种方式传参数
            {test: /\.js?$/,loader: 'babel', exclude: /node_modules/,  query: {compact: false,presets: ['es2015']}},//匹配js文件，用babel处理，忽略node_modules下的js文件
            //noparse:[moment-width-locales] //如果你确定一个模块中没有其他新的依赖，提高性能

        ]
    }, plugins: [
        new webpack.BannerPlugin('//我是郑磊'),
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ], resolve: {
        alias: {
            jquery: "./lib/jquery/jquery.js"
        }//是webpack的一个配置项，它的作用是把用户的一个请求冲定向到另一个路径
    }
};