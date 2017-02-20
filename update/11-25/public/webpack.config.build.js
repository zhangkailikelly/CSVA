var webpack=require("webpack");
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
			loader:"url?limit=20&&name=./img/[name].[ext]",
			test:/\.(gif|png|jpeg|jpg|bmp)$/
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)$/,//小于1000字节转换为base64,否则赋值给一个路径
			loader: "file?limit=1000&&name=/node_modules/bootstrap/dist/fonts/[name].[ext]",
			exclude: "/node_modules/"//提高寻找效率,不在此文件夹内寻找
		},
		{
			test: /\.(js|jsx)$/,
			loader: "babel-loader",
			query: {
				presets: ["es2015", "react"],
			compact: false
			},
			exclude: "/node_modules/"
		}
		]
	},
	  resolve: {
        extensions: ['', '.js', '.css', '.jsx', '.css', '.jpg', '.png'],//自动补全后缀名
        alias: {}
    },
	plugins:[
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV:JSON.stringify("production")
			}
		}),
		new webpack.optimize.CommonsChunkPlugin("vendors","vendors.js")]
}
//安装依赖 webpack style-loader css-loader url-loader(npm3.x需单独下载file-loader)
//babel-loader(npm3.x需单独安装babel-core)   babel-preset-es2015  babel-preset-react
//react react-dom react-router
		