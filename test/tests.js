'use strict';

const should = require('should');
const isPlainObj = require('is-plain-obj');
const config = require('./../index.js');
const lint = require('./helper/testHelper.js');

describe('npm-package-json-lint config tests', () => {
  context('npm-package-json-lint config object', () => {
    it('should be an object', () => {
      isPlainObj(config).should.equal(true);
    });
  });

  context('rules', () => {
    it('should be an object', () => {
      isPlainObj(config.rules).should.equal(true);
    });
  });

  context('run npm-package-json-lint and make sure it runs', () => {
    it('npm-package-json-lint should run without failing', () => {
      const packageJsonData = {
        author: 'Caitlin Snow'
      };
      const results = lint(packageJsonData, config);
      const expectedErrorCount = 2;

      results.errors.length.should.equal(expectedErrorCount);
      results.hasOwnProperty('warnings').should.be.false();
    });
  });
});
