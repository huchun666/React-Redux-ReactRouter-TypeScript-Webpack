const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = {
    entry: {
        app: path.resolve(__dirname, '..', 'src/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css)$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(less)$/,
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            },
            {
                test: /\.(scss)$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader" 
            },
            {
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'public/index.html'),
            filename: 'index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.tsx', '.ts'],
        alias: {
            '@': path.resolve(__dirname, '..', 'src')
        }
    }
}

module.exports = baseConfig