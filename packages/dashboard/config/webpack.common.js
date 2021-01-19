const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    resolve:{
        extensions: ['.js','.vue']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use:[
                    {loader: 'file-loader'}
                ]
            },
            {
                test:/\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss|\.css$/,
                use: ['vue-style-loader','style-loader','css-loader','sass-loader']
            },
            //we will define a loader
            {
                // run on any file that ends with mjs or js excluding files inside node_modules
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        // babel is going to process all jsx code, babel will convert es6-20 codes into es5
                        presets: ['@babel/preset-env'],
                        // add additional code to allow functionality like async await 
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }

        ]
    },
    plugins: [new VueLoaderPlugin()],
}