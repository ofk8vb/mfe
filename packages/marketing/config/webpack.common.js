module.exports = {
    module: {
        rules: [
            //we will define a loader
            {
                // run on any file that ends with mjs or js excluding files inside node_modules
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        // babel is going to process all jsx code, babel will convert es6-20 codes into es5
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        // add additional code to allow functionality like async await 
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }

        ]
    }
}