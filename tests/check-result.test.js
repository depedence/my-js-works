// tests/check-result.test.js
const chai = require('chai');
const { add } = require('./src/script.js');

const expect = chai.expect;

describe('Test the addition functionality', () => {
  it('should correctly add two numbers', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });
});
