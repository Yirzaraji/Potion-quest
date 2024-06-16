import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  plugins: {
    "postcss-import-alias": {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
