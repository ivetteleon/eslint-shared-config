const { defineConfig } = require("eslint/config");
const myconfig = require("./index.js");

module.exports = defineConfig([
	{
		files: ["**/*.js"],
		extends: [myconfig],
	},
]);