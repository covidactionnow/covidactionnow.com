require("eslint-config-lostfictions/patch");
module.exports =
  /** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config}  */ ({
    extends: ["lostfictions"],
    parserOptions: { tsconfigRootDir: __dirname },
    ignorePatterns: ["out/"],
    rules: {},
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
          extraFileExtensions: [".astro"],
        },
        rules: {},
      },
      // FIXME: add to eslint-config
      {
        files: ["*.cjs"],
        rules: {
          "import/no-commonjs": "off",
        },
      },
    ],
  });
