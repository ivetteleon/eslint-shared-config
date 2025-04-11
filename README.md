# 🔧 @ivetteleonf/eslint-config

> Shared ESLint configurations for JavaScript and TypeScript projects.

Centralize and standardize linting rules across multiple codebases.  
Supports both JavaScript and TypeScript projects.

---

## 📦 Installation

To use this shared ESLint configuration in your project, follow these steps:

1. Install the package as a development dependency:

```bash
npm install -D @ivetteleonf/eslint-config
```

2. Install the required peer dependencies based on your project type:


### 🟢 For JavaScript Projects

Install the following peer dependencies:

```bash
npm install -D eslint @eslint/js globals
```

### 🔵 For TypeScript Projects

Install the following peer dependencies:

```bash
npm install -D eslint @eslint/js globals \
  typescript \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser
```

### 3. Configure ESLint

Extend the shared configuration in your Eslint configuration file:

```javascript
// .eslintrc.js
import { javascriptConfig } from "@ivetteleonf/eslint-config";

export default javascriptConfig;
```

```typescript
// .eslintrc.ts
import { typesConfig } from "@ivetteleonf/eslint-config";

export default typesConfig;
```

## Features

...


## License

...