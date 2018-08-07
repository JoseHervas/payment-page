const path = require( 'path' )
const webpack = require( 'webpack' )

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join( __dirname, 'public' ),
        filename: 'bundle.js'
    },
    module: {
        loaders: [ {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [ 'react' ]
            }
        },
        {
            test: /\.(s*)css$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
        ]
    }
}
