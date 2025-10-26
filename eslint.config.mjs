/*
 * @Descripttion:
 * @version:
 * @Author: luckzhangfengbo
 * @Date: 2025-10-20 21:33:19
 * @LastEditors: zhangfengbo
 * @LastEditTime: 2025-10-26 10:42:30
 */
import globals from "globals"; // 若仍报错，请运行 `npm install -D globals @types/globals` 安装类型声明

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.commonjs,
        ...globals.node,
        ...globals.mocha,
      },

      ecmaVersion: 2022,
      sourceType: "module",
    },

    rules: {
      "no-const-assign": "warn",
      "no-this-before-super": "warn",
      "no-undef": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "constructor-super": "warn",
      "valid-typeof": "warn",
    },
  },
];
