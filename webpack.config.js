var path = require("path");
var webpack = require("webpack");

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
    resolve: {
        alias: {
	    "bootstrap": path.join(__dirname, "bower_components/bootstrap/dist/js/bootstrap.js"),
	    "bootstrap.css": path.join(__dirname, "bower_components/bootstrap/dist/css/bootstrap.css"),
	    "bootstrap-multiselect": path.join(__dirname, "bower_components/bootstrap-multiselect/dist/js/bootstrap-multiselect.js"),
	    "bootstrap-multiselect.css": path.join(__dirname, "bower_components/bootstrap-multiselect/dist/css/bootstrap-multiselect.css"),
        },
        modulesDirectories: [
            path.join(__dirname, "bower_components")
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        new webpack.ProvidePlugin({
	    $: "jquery",
            // multiselect が window.jQuery を参照しているため、expose-loader で jQuery を設定している
            // jQuery: "jquery",
            _: "underscore"
        })
    ]
};
