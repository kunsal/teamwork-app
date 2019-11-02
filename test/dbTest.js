const chai = require('chai');
const pool = require('../config/database');

const { expect } = chai;

describe('Database', () => {
  it('should not return with connection error', (done) => {
    pool.connect((err, client, release) => {
      expect(err).to.equal(undefined);
      release();
      done();
    });
  });
});
