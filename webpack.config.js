var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: "./index.js",
    output: {
	path: __dirname,
	filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
	loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
        modulesDirectories: [
            path.join(__dirname, "bower_components")
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.ProvidePlugin({
	    $: "jquery",
	    jQuery: "jquery",
            _: "underscore"
        })
    ]
};
