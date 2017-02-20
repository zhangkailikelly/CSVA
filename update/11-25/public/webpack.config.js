var webpack=require("webpack");
var openBrower=require("open-browser-webpack-plugin");
module.exports={
	entry:{
		users:"./users.js",
		manage:"./manage.js",
		vendors:["react","react-router","react-dom","react-redux","redux"]
	},
	output:{
		path:__dirname+"/dist",
		filename:"[name].js"
	},
	module:{
		loaders:[
		{
			loader:"style!css",
			test:/\.css$/
		},
		{
			loader:"url-loader?limit=200000&&name=./img/[name].[ext]",
			test:/\.(gif|png|jpeg|jpg|bmp)$/
		},
		{
			loader:"babel-loader",
			test:/\.(js|jsx)$/,
		}
		]
	},
	  resolve: {
        extensions: ['', '.js', '.css', '.jsx', '.css', '.jpg', '.png'],//自动补全后缀名
        alias: {}
    },
    devServer:{//如果route组件的history值browserHistory webserver添加--history-api-fallback
    	hot: true,
        inline: true,
        port: 3003
    },
	plugins:[
	new openBrower({url:"http://localhost:3003/manage.html"}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.optimize.CommonsChunkPlugin("vendors","vendors.js")]
}
//安装依赖 webpack style-loader css-loader url-loader(npm3.x需单独下载file-loader)
//babel-loader(npm3.x需单独安装babel-core)   babel-preset-es2015  babel-preset-react
//react react-dom react-router
//
//热替换配置
//webpack-dev-server  babel-plugin-react-transform：代替react-hot-loader的插件 react-transform-hmr：安装这个才能实现热替换的功能。
// babel-preset-react-hmre：让Babel知道HMR（热替换） react-transform-catch-errors、redbox-react：
//open-browser-webpack-plugin自动打开浏览器插件
//