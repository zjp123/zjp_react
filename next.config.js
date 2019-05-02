const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
// const withTM = require('next-transpile-modules');
// const cssLoaderGetLocalIdent = require("css-loader/lib/getLocalIdent.js");

module.exports = withPlugins([withCss, withLess], {} );