# Contributing

## System Dependencies

### Node

* [Node.js](https://nodejs.org/) - v4.2.0+
* [npm](https://www.npmjs.com/) - v2.14.7+

## Install project dependencies

### Code

* Fork and clone the npm-package-json-lint-config-default repo

### Install project dependencies

`npm install`

This installs dependencies from `package.json`.

## Code guidelines

### JavaScript

npm-package-json-lint-config-default utilizes both ESLint and JSCS to enforce JavaScript standards. Please see the `.eslintrc.json` file for ESLint config and `.jscsrc` for JSCS config.

* [eslint](https://github.com/eslint/eslint)
* [jscs](https://github.com/jscs-dev/node-jscs)

#### JSON

npm-package-json-lint-config-default utilizes JSON Lint to ensure JSON files are valid.

* [jsonlint](https://github.com/zaach/jsonlint)

#### package.json

npm-package-json-lint-config-default utilizes npm-package-json-lint to ensure the package.json file is valid.

* [npm-package-json-lint](https://github.com/tclindner/npm-package-json-lint)

#### Checking coding style

Run `npm run lint` before committing to ensure your changes follow our coding standards.

## Versioning

Please use the following grunt commands to increment the package's version numbers
EX: Assume current version is 0.0.1

`npm version patch`

If you run this command the version will increase the patch number (ie 0.0.2)

`npm version minor`

If you run this command the version will increase the minor number (ie 0.1.0)

`npm version major`

If you run this command the version will increase the major number (ie 1.0.0)


## EditorConfig

EditorConfig helps maintain consistent file formatting between different editors and developers. Please [install the plugin for you editor of choice](https://editorconfig.org/#download). Please see the `.editorconfig` file at the root of this repo to see what settings are enforced.

## License

Contributions to npm-package-json-lint-config-default are subject to the [MIT License](https://github.com/tclindner/npm-package-json-lint-config-default/blob/master/LICENSE).
