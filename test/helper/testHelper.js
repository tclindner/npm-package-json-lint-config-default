'use strict';

const NpmPackageJsonLint = require('npm-package-json-lint').NpmPackageJsonLint;

module.exports = function lint(packageJsonData, config) {
  const npmPackageJsonLint = new NpmPackageJsonLint();

  return npmPackageJsonLint.lint(packageJsonData, config);
};
