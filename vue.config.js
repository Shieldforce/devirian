const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    allowedHosts: "all",
    client: {
      webSocketURL: "ws://35.215.227.4:9999",
    },
  },
  transpileDependencies: ["vuetify"],
});
