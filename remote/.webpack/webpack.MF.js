import { merge } from "webpack-merge";
import { dirname } from "path";
import { fileURLToPath } from "url";
import common from "./webpack.common.js";
import webpack from "webpack";
import packageJson from "./package.json" assert { type: "json" };

const { ModuleFederationPlugin } = webpack.container;
const { dependencies: deps } = packageJson;

export default merge(common, {
  mode: "development",
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
});
