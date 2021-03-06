const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output:{
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
        port: 8080,
        historyApiFallback:{
            index: 'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            // optional but good practice in the host 
            name: 'container',
            remotes: {
                marketing:'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
                dashboard: 'dashboard@http://localhost:8083/remoteEntry.js'
            },
            // webpack will automatically deal with shared modules (optimization)
            shared:packageJson.dependencies
        })
    ]
};

// merge is a method provided by webpack-merge that combines two different config files
// second argument (devConfig) will overwrite shared config values
module.exports = merge(commonConfig,devConfig);