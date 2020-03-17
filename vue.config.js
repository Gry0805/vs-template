const PROD_TAG = 'production';
const env = process.env.NODE_ENV;
const baseUrl = '/';

module.exports = {
    publicPath: '/',
    // css: {
    //     loaderOptions: {
    //       css: {
    //         test: /\.css$/i,
    //         use: ['style-loader', 'css-loader']
    //       }
    //     }
    // },
    chainWebpack: (config) => {
        config.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
    },
    configureWebpack: {
        devtool: env === PROD_TAG ? false : 'source-map',
        resolve: {
            extensions: ['.js', '.vue', '.json', '.ts', '.tsx']
        },
        devServer: {
            publicPath: baseUrl,
            host: '0.0.0.0',
            historyApiFallback: true,
            noInfo: true
        },
    }
}