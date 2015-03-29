var path = require("path");
var webpack = require("webpack");
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
	path: path.join(__dirname, "dist/"),
	filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
	loaders: [
            { test: /\.css$/, loader: "style!css" },
	    // for bootstrap.css
            { test: /\.woff$/, loader: "url-loader?mimetype=application/font-woff" },
            { test: /\.woff2$/, loader: "url-loader?mimetype=application/font-woff2" },
            { test: /\.ttf$/, loader: "url-loader?mimetype=application/x-font-ttf" },
            { test: /\.eot$/, loader: "url-loader?mimetype=application/vnd.ms-fontobject" },
            { test: /\.svg$/, loader: "url-loader?mimetype=image/svg+xml" },
	    // for bootstrap-multiselect
            { test: /jquery\.js$/, loader: "expose?jQuery" }
        ]
    },
    plugins: [
        new BowerWebpackPlugin({
            excludes: /.*\.less/
	}),
        new webpack.ProvidePlugin({
	    $: "jquery",
            // multiselect が window.jQuery を参照しているため、expose-loader で jQuery を設定している
            // jQuery: "jquery",
            _: "underscore"
        })
    ]
};
