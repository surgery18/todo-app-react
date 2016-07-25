var
	webpack = require("webpack"),
	path = require("path");

var
	BUILD_DIR = path.join(__dirname, "client/build"),
	APP_DIR = path.join(__dirname, "client/src");

var config = {
	devtool: "source-map",
	entry: [
		APP_DIR + "/public/index.jsx"
	],
	plugins: [
		new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
	],
	output: {
		path: BUILD_DIR,
		filename: "bundle.js",
		publicPath: "/public/",
	},
	module: {
		loaders: [
		{
			test: /\.jsx?/,
			include: APP_DIR,
			loader: "babel",
		},
		{
			test: /\.scss?/,
	    loader: 'style!css!sass',
	    include: APP_DIR,
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
