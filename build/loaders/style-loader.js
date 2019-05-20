const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV;

const css = [
    mode === "production" ?
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        
      }
    } :
    "style-loader",
    {
      loader: "css-loader",
      options: {
        sourceMap: true
      }
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true
      }
    }
]

const cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: "css-loader",
    options: {
      sourceMap: options.sourceMap
    }
  }
  
  const postcssLoader = {
    loader: "postcss-loader",
    options: {
      sourceMap: options.sourceMap
    }
  }
  
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCss ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + "-loader",
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // 是否分包打包css
    if (options.extract) {
      return [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: "../../"
        }
      }, ...loaders]
    } else {
      return loaders
    }
  }

  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders("less0"),
    sass: generateLoaders("sass", {
      indentedSyntax: true
    }),
    scss: generateLoaders("scss"),
    stylus: generateLoaders("stylus"),
    styl: generateLoaders("stylus")
  };
}

exports.stylesLoader = function (options) {
  const output = [];
  const loaders = cssLoaders(options);

  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp("\\." + extension + "$"),
      use: loader
    });
  };

  return output;
}