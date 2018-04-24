import supertest from 'supertest';
import {app} from '../index.js';
import should from 'should'; //eslint-disable-line

describe('Cart API unit test', function() {
  it('should return a new cart', function(done) {
    const superserver = supertest(app);
    superserver
    .post('/api/cart')
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      console.log(res.body);
      res.status.should.equal(201);
      done();
    });
  });
});
