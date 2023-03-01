// CONF COMMON
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// CONF DEV
const { merge } = require("webpack-merge");
const { DefinePlugin } = require("webpack");

// CONF PROD
const ESLintPlugin = require("eslint-webpack-plugin");

// CONF
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { VuetifyLoaderPlugin } = require("vuetify-loader");


// use default public value ?
const locUrl = new URL("http://localhost:8080");
const pubUrl = new URL("http://localhost:8080");
let port = locUrl.port;
if (!port) port = locUrl.protocol === "https:" ? 443 : 80;

const commonConfig = {
    entry: ["/src/main.js"],
    output: {
        filename: "bundle.js",
        chunkFilename: "[contenthash].bundle.js",
        path: path.resolve(process.env.INIT_CWD, "./dist")
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [ /src\/static/],
                use: {
                    loader: "babel-loader",
                    options: {
                        /* 
                        useBuiltIns add necessary polyfill using corejs 3 
                        "usage" and not "entry" else, core-js & runtime-genetators must be in entry point
                        */
                        presets: [["@babel/preset-env", { debug: false, useBuiltIns: "usage", corejs: 3 }]]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{ from: "./src/static", to: "static", globOptions: { ignore: ["*.md"] } }]
        }),
        new HtmlWebpackPlugin({
            inject: false, // disable auto asset injection, preventing the bundle to be auto injected
            title: "Your App",
            template: path.resolve("src", "index.html"),
            minify: { collapseWhitespace: false } // prevent the plugin to change original indentation and spacing/whitespace
        })
    ]
};

const prodConfig = merge(
    commonConfig,
    {
    mode: "production",
    //plugins: [new ESLintPlugin({ extensions: ["js", "vue"] })],
    performance: {
        maxAssetSize: 1000000
    }
}
);

const devConfig = merge(
    commonConfig,
    {
        mode: "development",
        devtool: "inline-source-map",
        devServer: {
            contentBase: "./dist",
            hot: true,
            compress: true,
            // allow to be called from any host
            disableHostCheck: true,
            // to prevent CORS issues
            headers: { "Access-Control-Allow-Origin": "*" },
            writeToDisk: true,
            // these options are computed from localUrl and publicUrl global parameters
            port,
            host: locUrl.hostname,
            open: ['http://locahost:8080'],
            public: pubUrl.href,
            sockPath: locUrl.pathname + "sockjs-node"
        },
        output: {
            // these options are computed from localUrl and publicUrl global parameters
            publicPath: locUrl.pathname
        },
        plugins: [
            new DefinePlugin({
                "process.env.devVariables": JSON.stringify({ vue: { useExternalDebugger: false } })
            })
        ]
    }
);

const vueConf = {
    module: {
        rules: [{ test: /\.vue$/, loader: "vue-loader"}]
    },
    plugins: [new VueLoaderPlugin()]
};

const vuetifyConf = {
    module: {
        rules: [
            {
                test: /\.(svg|eot|woff|ttf|svg|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "static/fonts"
                        }
                    }
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "static/images"
                }
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                indentedSyntax: true // optional
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new VuetifyLoaderPlugin()]
};


module.exports = [
    { name: "dev", ...merge(devConfig, vueConf, vuetifyConf) },
    // { name: "devS3", ...merge(devS3Conf, vueConf, vuetifyConf, myConf) },
    { name: "prod", ...merge(prodConfig, vueConf, vuetifyConf) }
];
