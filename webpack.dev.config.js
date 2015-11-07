module.exports = require("./webpack.config")({
    devServer: true,
    minimize: false,
    devtool: "eval",
    hotComponents: false,
    debug: true
});
