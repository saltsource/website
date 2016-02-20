import path from 'path';
import cssnano from 'cssnano';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import webpack from 'webpack';

export default {
    entry: "./app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
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
        new ExtractTextPlugin("style.css")
    ],

    cssLoader: {
        modules: true
    },

    postcss : [

        precss(),

        cssnano({
            autoprefixer : {
                add      : true,
                remove   : true,
                browsers : ['last 2 versions']
            },

            discardComments : {
                removeAll : true
            }

        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true,
        compress: true
    }

};
