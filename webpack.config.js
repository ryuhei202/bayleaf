import SentryWebpackPlugin from "@sentry/webpack-plugin";

module.exports = {
  devtool: "source-map",
  plugins: [
    new SentryWebpackPlugin({
      authToken: process.env.REACT_APP_SENTRY_AUTH_TOKEN,
      org: process.env.REACT_APP_SENTRY_ORG,
      project: process.env.REACT_APP_SENTRY_PROJECT,
      release: process.env.REACT_APP_VERSION,
      include: "build/static/js/",
      ignore: ["node_modules", "webpack.config.js"],
    }),
  ],
};
