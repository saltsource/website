import fs from 'fs';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {

    entry: path.join(__dirname, 'server', 'server.js'),

    output: {
        filename: 'server.bundle.js',
        path: path.join(__dirname + "/server")
    },

    target: 'node',

    // keep node_module paths out of the bundle
    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
        .concat(['react-dom/server'])
        .filter( s=> !/\.css$/.test(s) )
        .reduce( (ext, mod) => ({
            ...ext,
            [mod]: 'commonjs ' + mod
        }), {}),

    node: {
        __filename: true,
        __dirname: true
    },

    plugins: [
        new ExtractTextPlugin("style.css")
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
