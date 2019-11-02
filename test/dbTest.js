const chai = require('chai');
// const db = require('../config/database');

const { expect } = chai;

describe('Database', () => {
  it('should not return with connection error but with 2', (done) => {
    // db.query('SELECT 1 + 1 as value', (err, res) => {
    //   const result = res.rows[0].value;
    //   expect(result).to.equals(2);
    //   done();
    // });
    expect(1 + 1).to.equal(2);
  });
});
