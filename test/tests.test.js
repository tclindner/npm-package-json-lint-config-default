// eslint-disable-next-line unicorn/prefer-module
const {NpmPackageJsonLint} = require('npm-package-json-lint');
// eslint-disable-next-line unicorn/prefer-module, import-x/extensions
const config = require('../index.js');

describe('npm-package-json-lint config tests', () => {
  describe('npm-package-json-lint config object', () => {
    test('should be an object', () => {
      expect(typeof config === 'object').toBe(true);
    });
  });

  describe('rules', () => {
    test('should be an object', () => {
      expect(typeof config.rules === 'object').toBe(true);
    });
  });

  describe('run npm-package-json-lint and make sure it runs', () => {
    test('npm-package-json-lint should run without failing', () => {
      const packageJsonData = {
        author: 'Caitlin Snow',
      };
      const npmPackageJsonLint = new NpmPackageJsonLint({
        packageJsonObject: packageJsonData,
        config,
        packageJsonFilePath: 'npm-package-json-lint-config-tc',
      });

      const output = npmPackageJsonLint.lint();
      const expectedErrorCount = 2;

      expect(output.results).toHaveLength(1);
      expect(output.results[0].issues).toHaveLength(expectedErrorCount);
      expect(output.ignoreCount).toStrictEqual(0);
      expect(output.errorCount).toStrictEqual(expectedErrorCount);
      expect(output.warningCount).toStrictEqual(0);
    });
  });
});
