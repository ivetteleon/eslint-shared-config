# eslint-shared-config

> 🔧 Shared ESLint configurations for JavaScript and TypeScript projects.  
> Published as an npm package to standardize linting across projects at Entel Digital.

---

## 📦 Package Scope

This package is published with an **npm scope** to ensure clear organization and reusability:

- The `"name"` field in `package.json` should follow the format:  
  ```
  @scope/eslint-config
  ```
- In this case, the scope is your personal npm (or GitHub) username:  
  ```
  @ivetteleon/eslint-config
  ```

> If migrated to an organization (e.g., `@enteldigital`) in the future, you can update the scope accordingly.

---

## 🚀 Publishing the Package

This guide assumes you already have a base project (like [eslint-shared-config](https://github.com/ivetteleon/eslint-shared-config)) ready to be used as an npm package.

### 1. Log in to npm

```bash
npm login
```

Make sure you’re logged in with the correct account on [npmjs.com](https://www.npmjs.com/).

### 2. Set correct `package.json` fields

Ensure the `"name"` field in `package.json` uses the correct scope:

```json
"name": "@ivetteleon/eslint-config"
```

### 3. Publish publicly

Scoped packages are private by default, so you need to publish explicitly as public:

```bash
npm publish --access public
```

---

## 🔁 Updating the Package

To release updates to the package:

1. Manually increment the version in `package.json`, for example:

```json
"version": "1.0.1"
```

2. Publish again:

```bash
npm publish
```

---

## 📚 Using the Config in Projects

To use this shared ESLint configuration in a project:

1. Install the package:

```bash
npm install --save-dev @ivetteleon/eslint-config
```

2. Extend it in your ESLint config file:

```js
// .eslintrc.js
module.exports = {
  extends: ['@ivetteleon/eslint-config'],
};
```

> You can also create variations like `@ivetteleon/eslint-config-react` or `...-node` in the future if needed.

---

## 📝 License

MIT © 2025 Entel Digital
