module.exports = (env) => {
  console.log("LOL");
  console.log("dev: ", env.dev);

  return {
    entry: {
      index: "./src/index.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: __dirname,
    },
    mode: env.dev ? "development" : "production",
    target: "node",
  };
};
