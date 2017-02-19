'use strict';

const NpmPackageJsonLint = require('npm-package-json-lint');

module.exports = function lint(packageJsonData, config) {
  const options = {
    ignoreWarnings: true
  };
  const npmPackageJsonLint = new NpmPackageJsonLint(packageJsonData, config, options);

  return npmPackageJsonLint.lint();
};
