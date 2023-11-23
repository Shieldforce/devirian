const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    allowedHosts: "all",
    client: {
      //webSocketURL: "ws://85.31.230.36:9999",
    },
  },
  transpileDependencies: ["vuetify"],
});
