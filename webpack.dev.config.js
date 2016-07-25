var
	webpack = require("webpack"),
	path = require("path");

var
	BUILD_DIR = path.join(__dirname, "client/build"),
	APP_DIR = path.join(__dirname, "client/src");

var config = {
	devtool: "eval",
	entry: [
		'webpack-hot-middleware/client',
		//"webpack-dev-server/client?http://localhost:3000/", // WebpackDevServer host and port
		//"webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
		APP_DIR + "/public/index.jsx"
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
	],
	output: {
		path: BUILD_DIR,
		filename: "bundle.js",
		publicPath: "/public/",
	},
	module: {
		loaders: [{
			test: /\.jsx?/,
			include: APP_DIR,
			loader: "babel",
		},
		{
			test: /\.scss?/,
			include: APP_DIR,
	    loader: 'style!css!sass',
		}
		]
	},
	externals: {
	  'react/addons': true,
	  'react/lib/ExecutionEnvironment': true,
	  'react/lib/ReactContext': true
	}
};

module.exports = config;
