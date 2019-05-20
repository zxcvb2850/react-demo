const { assetsPath, resolve } = require("../utils");

const js = {
    test: /.(js|jsx)$/,
    loader: "babel-loader",
    include: [resolve("src"), resolve("test")]
}

const img = {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: "url-loader",
    options: {
        limit: 10000,
        name: assetsPath("img/[name].[hash:7].[ext]")
    }
};

const media = {
    test: /\.(mp3|map4|webm|ogg|wav|flac|aac)(\?.*)?$/,
    loader: "utl-loader",
    options: {
        limit: 10000,
        name: assetsPath("media/[name].[hash:7].[ext]")
    }
}

const rules = [
    js,
    img,
    media
];

module.exports = rules;