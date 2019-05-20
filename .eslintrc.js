module.exports = {
	parser: "babel-eslint",
	extends: ["airbnb"],
    "env": {
      "browser": true,
      "node": true,
      "mocha": true,
      "es6": true
    },
	"plugins": [
    "react"
	],
	rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
	}
}