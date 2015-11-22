var webpack = require('webpack');
module.exports = function(config){
    config.set({
        basePath: '',
        frameworks: [
            'mocha',
            'sinon-chai'
        ], 
        files: [
            'test/index.js'
        ],
        webpack:{
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { 
                        test: /\.js$/, 
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    }
                ]
            } 
        },
        preprocessors: {
            'test/index.js': [ 'webpack', 'sourcemap' ]
        },
        webpackServer: {
            noInfo: true
        },
        autoWatch: true,
        singleRun: true,
        port: 9876,
        colors: true,
        browsers: [ 'Chrome' ],

    });
}
