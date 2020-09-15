const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// console.log('环境变量--------->>>',process.env.NODE_ENV);
const env=process.env.NODE_ENV;
//  这个以生产环境为标准进行配置
const config={
    mode: 'production',
    //  入口：指定webpack打包或本地服务运行时的程序文件入口
    // entry:'./src/main.js',
    entry:path.resolve(__dirname,'./src/main.js'),
    //  出口：打包之后，打包的结果所放的位置
    output:{
        //  导出的文件名称
        filename:'static/js/[name].[hash].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        //  生成index.html的单文件，并自动引入其他相关文件的插件
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./public/index.html'),
            title:'我们',
        }),
        //  自动删除dist文件的插件
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash].css'
        })
    ],
    module:{
        rules:[
            { test: /\.s[ac]ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'] },
            {test:/\.css$/, use:['style-loader','css-loader']},
            // {test:/\.(css|scss)$/,use:['style-loader','css-loader','sass-loader']},
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
            //  js转换
            { test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},
            
        ]
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'./src')
        },
        extensions:[".js",".jsx",".json"]
    }
}
if(env==='development'){
    config.mode='development';
    //关于热更新的两个插件
    config.plugins.push(new webpack.NamedModulesPlugin());
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    //eslint-loader的检验规则
    config.module.rules.push(
        {test:/\.js$/,use:['eslint-loader'],exclude:/node_modules/,enforce:'pre'}
    );
    config.devServer={
        port:'8096',
        //执行后自动打开
        open:true,
        //设置静态资源目录，一样需要使用绝对路径
        contentBase: path.resolve(__dirname,'public'),
        hot:true,   //开启热更新功能
        //eslint视图报错覆盖
        overlay: {
            errors: true
        },
        proxy: {
            "/api":"http://localhost:9999"
        }
    };
    // source map,找出代码错误的具体位置(行数)
    config.devtool = 'inline-source-map';
}

module.exports = config;



// module.exports={
//     entry:'./src/main.js',
//     output:{
//         // mode:'production',
//         filename:'bundle.js',
//         path:path.resolve(__dirname,'dist')
//     },
//     plugins:[
//         new HtmlWebpackPlugin({
//             template:path.resolve(__dirname,'./public/index.html'),
//             title:'我们',
//         }),
//         new CleanWebpackPlugin(),
//         new webpack.NamedModulesPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//         // new ExtractTextPlugin('style.css')
//         new MiniCssExtractPlugin()
//     ],
//     devServer:{
//         port:'8096',
//         //执行后自动打开
//         open:true,
//         //设置静态资源目录，一样需要使用绝对路径
//         contentBase: path.resolve(__dirname,'public'),
//         hot:true,
//         overlay: {
//             errors: true
//         }
//     },
//     module:{
//         rules:[
//             // {test:/\.css$/,use:['style-loader','css-loader']},
//             {test:/\.(css|scss)$/,use:['style-loader','css-loader','sass-loader']},
//             {
//                 test: /\.css$/i,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader'],
//             },
//             // {
//             //     test: /\.scss$/,
//             //     use: ExtractTextPlugin.extract({
//             //     fallback: 'style-loader',
//             //     use: ['css-loader', 'sass-loader']
//             //     })
//             // }
//             //  js转换
//             { test:/\.js$/,use:['babel-loader'],exclude:/node_modules/},
//             { test:/\.js$/,use:['eslint-loader'],exclude:/node_modules/,enforce:'pre'}
//         ]
//     },
//     devtool: 'inline-source-map',
// }






