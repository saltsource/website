var fs = require('fs');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {

    entry: path.resolve(__dirname, 'server.js'),

    output: {
        filename: 'server.bundle.js'
    },

    target: 'node',

    // keep node_module paths out of the bundle
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .concat([
        'react-dom/server'
    ])
    .filter( s=> !/\.css$/.test(s) )
    .reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod
        return ext
    }, {}),

    node: {
        __filename: true,
        __dirname: true
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("public/style.css")
    ],

    module: {
        loaders: [
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader",
                    "css-loader?modules&importLoaders=1&localIdentName=[local][hash:base64:5]!postcss-loader",
                    "sass-loader"
                )
            },

            {
                test : /\.jsx?$/,
                exclude : /(node_modules|bower_components)/,
                loader  : 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },

            {
                test: /\.(png|jpe?g|gif|svg|mp3|mpe?g)$/,
                loader: "file-loader"
            }

        ]

    }

}
