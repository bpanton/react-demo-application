const path = require('path');

const config = {
    entry: ['babel-polyfill','./lib/components/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, use: ['file-loader']}
        ]
    }
};

module.exports = config;