const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: `${SRC_DIR}/app/index.js`,
    output: {
        path: `${DIST_DIR}/app`,
        filename: 'bundle.js',
        // publicPath : "/app/"
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: SRC_DIR,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query:
                {
                    presets: ['react', 'es2015', 'stage-2'],
                },
            },
            {
                test: /\.(sass|scss)$/, // Check for sass or scss file names
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.ico$/,
                loader: 'file-loader',
                query: { mimetype: 'image/x-icon' },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: 'src/index.html',
                favicon: 'src/app/img/favicon.ico',
            },
        ),
    ],
    devServer: {
        open: true, // to open the local server in browser
        contentBase: `${__dirname}/src`,
        historyApiFallback: true,
        inline: true,
    },
};
