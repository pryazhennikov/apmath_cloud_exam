const path              = require('path');
const webpack           = require('webpack');
const WebpackStrip      = require('webpack-strip');
const JSDocPlugin       = require('jsdoc-webpack-plugin');

const NODE_ENV          = process.env.NODE_ENV || 'development';

const config = {

    entry: [
        './src/js/app/app.react.js'
    ],

    output: {
        path: path.join(__dirname, 'static/js'),
        filename: 'main.js',
        publicPath: '/static/js/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader?sourceMap=inline'
                ]
            }
        ]
    },

    devServer: {
        proxy: [{
            path: '/api/**',
            target: 'http://localhost:8000'
        }],
        port: '1111',
        historyApiFallback: true
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],

    resolve: {
        root: [
            path.resolve('./src/js/engine'),
            path.resolve('./src/js/app/config'),
            path.resolve('./src/js/app/modules'),
            path.resolve('./src/js/engine/modules')
        ]
    },

    devtool: NODE_ENV === 'development' ? 'eval' : null

};

// Production config
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new JSDocPlugin({
        conf: './jsdoc.conf.json'
    }));
    config.module.loaders.push({
        test: /.js$/,
        loader: WebpackStrip.loader('console.log', 'console.error')
    });
}

module.exports = config;
