const { defineConfig } = require("eslint/config");
const { javascriptConfig } = require("./index.js");

module.exports = defineConfig([
	{
		extends: [javascriptConfig]
	},
]);