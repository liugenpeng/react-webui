/**
* Created by liubo on 15/3/11.
*/
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');





module.exports = function(options) {

    var entry = {
        app:'./app/entry.js'
        ,common:[
             "react"
            ,"react-dom"
            ,"react-router"
        ]
    }


    // 凡是遇到jsx结尾的，都用jsx-loader这个插件来加载，
    // 且启用harmony模式
    var loaders = [
        {
            test: /\.js?$/
            ,exclude: /(node_modules|bower_components)/
            ,loader: 'babel'
            ,query: {
                optional: ['runtime'],
                stage: 0
            }
        }
        ,{ test: /\.css$/, loader: 'style-loader!css-loader' }
        ,{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
        ,{ test: /\.(ttf|eot|svg)?$/, loader: "file-loader" }
        ,{ test: /\.png$/, loader: "file-loader" }
        ,{test: /\.woff$/,   loader: "url?limit=10000&minetype=application/font-woff"}
      ]

   

    var publicPath =  "http://localhost:8080/" ;
        

    var output = {
        path: path.join(__dirname, "./app/extras/", "build")
        ,publicPath: publicPath
        ,filename: '[name].js'
        ,sourceMapFilename: "[file].map"
        ,chunkFilename: "[id].js"
        ,hotUpdateMainFilename: "update.json"
        ,hotUpdateChunkFilename: "[id].update.js"
    };

  

    //deps.forEach(function (dep) {
    //    var depPath = path.resolve(nodeRoot, dep);
    //    alias[dep.split(path.sep)[0]] = depPath;
    //    noParse.push(depPath);
    //});

    //console.log(alias);

    //加载插件
    var plugins = [
        new webpack.ProvidePlugin({
            React: "react"
            ,ReactDom: "react-dom"
            ,ReactRouter: "react-router"
           
            //,_: "lodash"
        })
        
        ,new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(options.devServer || 'false'))
        })
        //,new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 20 })
        ,new webpack.optimize.CommonsChunkPlugin("common", "common.js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""))
    ];

  
    var devServer = {
        contentBase: "./app"
        //,host: (options.hotComponents)? IPv4 : 
        ,host:"localhost"
        ,port: "8080"
        ,inline: true
        ,hot: options.hotComponents
        ,colors: true
    }

    return {
        entry: entry
        ,output: output
        ,devtool: options.devtool
        ,resolve: {
          extensions: ['', '.js', '.jsx', '.css']
        }
        ,devServer: devServer
        ,plugins:plugins
        ,module: {
            loaders: loaders
        }
        ,debug: true
    };
}
