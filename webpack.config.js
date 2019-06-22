module.exports = {
    target: 'web',
    entry: './lib/index.js',
    output: {
        path: require('path').resolve(__dirname),
        filename: 'index.js',
        library: 'pixi-tiled-utils',
        libraryTarget: 'window'
    },
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        ['@babel/plugin-transform-runtime', {
                            regenerator: true
                        }]
                    ]
                }
            }
        ]
    }
}
