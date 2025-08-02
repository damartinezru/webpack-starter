const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.js'),
    //you can add more entry points here if needed
    // used for code splitting or multiple bundles
  },
    output: {
        path: path.resolve(__dirname, 'dist'),
        //the [name] placeholder will be replaced with the key from the entry object
        //the [contenthash] placeholder will be replaced with a unique hash based on the content of the file
        //this helps with cache busting when the content changes
        filename: '[name][contenthash].js',
        clean: true, // cleans the output directory before each build
        assetModuleFilename: '[name][ext]' // output path for assets
    },
    devtool: 'source-map', // generates source maps for easier debugging
    //devServer configuration
    //this is used for development purposes to serve the files from memory
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        hot: true, // enables Hot Module Replacement
        historyApiFallback: true, // for single page applications
        open: true, // opens the browser automatically
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // injects styles into the DOM
                    'css-loader',   // interprets @import and url() like import/require() and resolves them
                    'sass-loader'   // compiles Sass to CSS
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // transpiles ES6+ down to ES5
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                type: 'asset/resource', // handles image files
                generator: {
                    filename: 'assets/[name][ext][query]' // output path for images
                }
            }	
        ],
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'template.html'),
        }),
        new BundleAnalyzer()
    ],
}