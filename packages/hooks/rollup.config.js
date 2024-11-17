import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import swc from "rollup-plugin-swc3"; // 改用 rollup-plugin-swc3

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].mjs",
    },
    {
      dir: "dist",
      format: "cjs",
      preserveModules: true,
      preserveModulesRoot: "src",
      entryFileNames: "[name].cjs",
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "./dist",
      exclude: ["**/*.test.ts", "**/*.test.tsx"],
    }),
    swc({
      include: /\.[jt]sx?$/,
      exclude: /node_modules/,
      tsconfig: "./tsconfig.json",
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
        },
        transform: {
          react: {
            runtime: "automatic",
          },
        },
        target: "es2020",
      },
    }),
  ],
});
