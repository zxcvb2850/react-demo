const path = require("path");

exports.assetsPath = function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === "production"
    ? "/"
    : "/"

    return path.posix.join(assetsSubDirectory, _path);
}

exports.resolve = function (dir) {
    return path.join(__dirname, "..", dir)
}