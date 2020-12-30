const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const outputPath = path.resolve(__dirname,'dist')
console.log({outputPath})

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:outputPath
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                  loader: "babel-loader"
              },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|git|svg|ico)$/i,
                loader:'url-loader',
                options: {
                    limit: 2048,
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.html?/,
                loader:'html-loader'
            }
        ]
    },
    devServer:{
        contentBase:outputPath
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        }) 
    ]
}