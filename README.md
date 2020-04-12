# npm-package-json-lint-config-default

> Default [npm-package-json-lint](https://github.com/tclindner/npm-package-json-lint) shareable config


[![license](https://img.shields.io/github/license/tclindner/npm-package-json-lint-config-default.svg?maxAge=2592000&style=flat-square)](https://github.com/tclindner/npm-package-json-lint-config-default/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/npm-package-json-lint-config-default.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/npm-package-json-lint-config-default)
[![CircleCI](https://circleci.com/gh/tclindner/npm-package-json-lint-config-default.svg?style=svg)](https://circleci.com/gh/tclindner/npm-package-json-lint-config-default)
[![Dependency Status](https://david-dm.org/tclindner/npm-package-json-lint-config-default.svg?style=flat-square)](https://david-dm.org/tclindner/npm-package-json-lint-config-default)
[![devDependency Status](https://david-dm.org/tclindner/npm-package-json-lint-config-default/dev-status.svg?style=flat-square)](https://david-dm.org/tclindner/npm-package-json-lint-config-default#info=devDependencies)


## What is npm-package-json-lint-config-default?

Shared configuration for npm-package-json-lint. Follow the instructions below to easily include this configuration in another project without having to duplicate the file.

## How do I install it?

First thing first, let's make sure you have the necessary pre-requisites.

### System Dependencies

#### Node

* [Node.js](https://nodejs.org/) - v10.0.0+
* [npm](http://npmjs.com) - v6.0.0+

### Command

```bash
npm install npm-package-json-lint-config-default --save-dev
```

## Usage

Add the following to your `.npmpackagejsonlintrc.json` file:

```json
{
  "extends": "npm-package-json-lint-config-default"
}
```

If you need to override a rule, your `.npmpackagejsonlintrc.json` file should look like the example below. All shared rules will be used, but `license-type` will be turned off.

```json
{
  "extends": "npm-package-json-lint-config-default",
  "rules": {
    "license-type": "off"
  }
}
```

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md).

## Release History

Please see [CHANGELOG.md](CHANGELOG.md).

## License

Copyright (c) 2017-2020 Thomas Lindner. Licensed under the MIT license.
