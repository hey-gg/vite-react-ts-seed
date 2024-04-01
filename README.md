# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## package.json说明


    "@typescript-eslint/eslint-plugin": "^7.4.0",  //eslint ts默认规则补充

    "@typescript-eslint/parser": "^7.4.0",  //eslint 识别ts语法

    "@vitejs/plugin-react": "^4.2.1",

    "eslint": "^8.57.0", //eslint 安装

    "eslint-config-prettier": "^9.1.0",  //eslint prettier插件安装

    "eslint-plugin-import": "^2.29.1",  //eslint import规则

    "eslint-plugin-prettier": "^5.1.3",  //用来解决与eslint的冲突

    "eslint-plugin-react": "^7.34.1", //eslint react规则

    "eslint-plugin-react-hooks": "^4.6.0",  //eslint react hooks

    "eslint-plugin-react-refresh": "^0.4.6",  //eslint 验证react组件可以安全的被快速更新

    "prettier": "^3.2.5",  //安装prettier

    "typescript": "^5.2.2",

    "vite": "^5.2.0"
