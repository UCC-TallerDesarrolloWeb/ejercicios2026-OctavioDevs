import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
export default [
  { ignores: ["docs/**"] },
  js.configs.recommended,
  { languageOptions: { globals: globals.node } },
  prettier,
];
