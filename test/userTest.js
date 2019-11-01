const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const { expect } = chai;

chai.use(chaiHttp);

describe('User', () => {
  describe('Create user', () => {
    it('POST create-user', (done) => {
      const user = {
        firstName: 'Ajayi',
        lastName: 'Olakunle',
        email: 'kunsal2003@gmail.com'
      };
      chai.request(app).post('/auth/create-user')
        .send(user)
        .end((err, res) => {
          status = res.status;
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('data');
          done();
        });
    });
  });

  describe('Create user with bad data', () => {
    it('POST create-user', (done) => {
      const user = {};
      chai.request(app).post('/auth/create-user')
        .send(user)
        .end((err, res) => {
          status = res.status;
          expect(res.status).not.to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('error');
          done();
        });
    });
  });
});