import cssnano from 'cssnano';
import cssnext from 'postcss-cssnext';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack'

import cssVars from './app/theme.js';




export default {

    module: {
        loaders: [
            {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader",
                    "css-loader?modules&importLoaders=1&localIdentName=[local]-[hash:base64:5]!postcss-loader"
                )
            },

            {
                test : /\.jsx?$/,
                exclude : /(node_modules|bower_components)/,
                loader  : 'babel'
            },

            {
                test: /\.(png|jpe?g|gif|svg|mp3|mpe?g)$/,
                loader: "file-loader?name=assets/[name]-[hash:2].[ext]"
            }

        ]

    },

    plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': `"${process.env.NODE_ENV||"production"}"`
        })
    ],


    cssLoader: {
        modules: true
    },

    postcss : [

        cssnext({
            features: {
                customProperties: {
                    variables: cssVars
                }
            }
        }),

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
    ]
};
