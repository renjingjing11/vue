var path = require('path')
var webpack = require('webpack')
var fs = require("fs")
const bodyParser = require("body-parser")

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|woff|ttf2|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": path.resolve("./src")
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        before(app) {
            app.get("/api/list", (req, res, next) => {
                let data = JSON.parse(fs.readFileSync("./data.json"));
                res.send({ code: 1, data })
            })
            app.post("/api/delete", bodyParser.json(), (req, res, next) => {
                let id = req.body.payload;
                let data = fs.readFileSync("./data.json");
                data = JSON.parse(data);
                let index = data.findIndex(item => item.id == id * 1);
                data.splice(index, 1);
                fs.writeFileSync("./data.json", JSON.stringify(data));
                res.send({ code: 1, data })
            })
            app.post("/api/add", bodyParser.json(), (req, res, next) => {
                console.log(req.body)
                let { name, className } = req.body.payload;
                let data = JSON.parse(fs.readFileSync("./data.json"))
                data.push({
                    name,
                    id: data.length + 1,
                    className
                })
                fs.writeFileSync("./data.json", JSON.stringify(data));
                res.send({ code: 1, })
            })
            app.post("/api/updata", bodyParser.json(), (req, res, next) => {
                let id = req.body.payload.id;
                console.log(req, "=============修改")
                console.log(req.body.payload, "=================req")
                console.log(req.body, "=================req")
                let data = fs.readFileSync("./data.json");
                data = JSON.parse(data);
                let index = data.findIndex(item => item.id == id * 1);
                // data[index].name = req.body.payload.name; //修改数据
                // data[index].className = req.body.payload.className
                // data[index].id = req.body.payload.id
                data[index] = req.body.payload
                console.log(data[index])
                fs.writeFileSync("./data.json", JSON.stringify(data));
                console.log(data)
                res.send({ code: 1, data })
            })
        }
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}