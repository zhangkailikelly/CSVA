var webpack=require("webpack");
module.exports={
	entry:{
		app:"./index.js",
		vendors:["react","react-router","react-dom","react-redux","redux"]
	},
	output:{
		path:__dirname+"/dist",
		filename:"boundle.js"
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
			query:{
				presets:["es2015","react"]
			}
		}
		]
	},
	plugins:[new webpack.optimize.CommonsChunkPlugin("vendors","vendors.js")]
}
//安装依赖 webpack style-loader css-loader url-loader(npm3.x需单独下载file-loader)
//babel-loader(npm3.x需单独安装babel-core)   babel-preset-es2015  babel-preset-react
//react react-dom react-router
		