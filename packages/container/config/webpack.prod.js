const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

// secret that tells container where to go in prod
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output:{
        // all the files built will use this template to name themselves
        filename: '[name].[contenthash].js',
        // adds a path to where to look for the js file (prepends to filename)
        publicPath: '/container/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name:' container',
            remotes:{
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
                auth: `auth@${domain}/auth/latest/remoteEntry.js`
            },
            shared:packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig,prodConfig);