# 🛠️ How I Built a Shared ESLint Configuration for My Team

A step-by-step guide on creating, packaging, and publishing a reusable ESLint configuration for JavaScript and TypeScript projects.

---

## 1. 🧰 Create the Project

Initialize the project:

```bash
mkdir eslint-shared-config
cd eslint-shared-config
npm init -y
```

---

## 2. 🧱 Define Your Config Files

Export your shared ESLint rules:

### JavaScript Configuration

Create the file `src/javascriptConfig.js`:

```javascript
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: globals.node,
    },
    plugins: { js },
    extends: ["eslint:recommended"],
    rules: {
      semi: ["error", "always"],
    },
  },
]);
```

### TypeScript Configuration

Create the file `src/typescriptConfig.js` similarly, but include TypeScript-specific rules and plugins.

---

### Export Both Configurations

Export both configurations in your `index.js`:

```javascript
module.exports = {
  javascriptConfig: require("./src/javascriptConfig.js"),
  typesConfig: require("./src/typescriptConfig.js"),
};
```

---

## 3. 🧩 Setup `package.json`

Use scoped naming for your package:

```json
{
  "name": "@ivetteleonf/eslint-config",
  "version": "1.0.0",
  "type": "commonjs",
  "main": "index.js",
  "peerDependencies": {
    "eslint": "^9.0.0",
    "@eslint/js": "^9.0.0",
    "globals": "^16.0.0",
    "typescript": "^5.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0"
  }
}
```

> **Tip:** Use `peerDependencies` so the consuming projects manage their own versions of the dependencies.

---

## 4. 🚀 Publish to npm

### Log in to npm:

```bash
npm login
```

### Publish the package publicly:

```bash
npm publish --access public
```

---

## 5. 📚 Document It

Create a clear `README.md` so other developers can:

- Install the package.
- Know which peer dependencies to install.
- Use the correct configuration (JavaScript or TypeScript).

---

## ✅ Bonus Tips

- **No need for a `postinstall` script** — use documentation instead.
- Use `"type": "commonjs"` in `package.json` to ensure compatibility with both CommonJS and ESM projects.
- You can create variants later (e.g., `@company/eslint-config-react`) based on this structure.


