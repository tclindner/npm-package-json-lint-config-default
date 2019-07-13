const isPlainObj = require('is-plain-obj');
const config = require('../index.js');
const lint = require('./helper/testHelper.js');

describe('npm-package-json-lint config tests', () => {
  describe('npm-package-json-lint config object', () => {
    it('should be an object', () => {
      expect(isPlainObj(config)).toBeTruthy();
    });
  });

  describe('rules', () => {
    it('should be an object', () => {
      expect(isPlainObj(config.rules)).toBeTruthy();
    });
  });

  describe('run npm-package-json-lint and make sure it runs', () => {
    it('npm-package-json-lint should run without failing', () => {
      const packageJsonData = {
        author: 'Caitlin Snow'
      };
      const results = lint(packageJsonData, config.rules);
      const expectedErrorCount = 2;

      expect(results.issues.length).toStrictEqual(expectedErrorCount);
      expect(results.hasOwnProperty('warnings')).toBeFalsy();
    });
  });
});
