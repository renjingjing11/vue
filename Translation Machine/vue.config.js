module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://148.70.121.59:9001', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                },
                logLevel: 'debug',
            }
        }
    },
}