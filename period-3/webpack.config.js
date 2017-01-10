module.exports = {
    entry: './src/entry.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}