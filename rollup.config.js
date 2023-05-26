import resolve from "@rollup/plugin-node-resolve";

export default {
  input: { alpine: "src/alpine.js" },
  output: {
    dir: "dist",
  },
  plugins: [
    resolve(),
  ],
};
