const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

const { expect } = chai;

chai.use(chaiHttp);
describe('Application', () => {
  it('should return with a status 200', (done) => {
    chai.request(app).get('/').end((err, res) => {
      expect(res.status).to.eql(200);
    });
    done();
  });
  it('should load with Hello team', (done) => {
    chai.request(app).get('/').end((err, res) => {
      expect(res.text).to.equals('Hello team');
    });
    done();
  });
});
