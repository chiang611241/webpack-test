const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path:  path.resolve(__dirname, 'build/'),
        filename: 'bundle.js',
        publicPath: '/',
        clean: true,
    },
    module: {
        rules:  [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
                resolve: {
                    extensions: ['.js', '.jsx']
                },
            },
        ],
    },
    devServer: {
        client: {
            logging: 'info',
            overlay: true,
        },
        static: {
            directory: path.join(__dirname, 'build'),
            watch: true,
        },
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
};
