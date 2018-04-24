import supertest from 'supertest';
import {app} from '../index.js';
import should from 'should'; //eslint-disable-line

describe('Products API unit test', function() {
  it('should return a collection of product documents', function(done) {
    const superserver = supertest(app);
    superserver
    .get('/api/products')
    .expect('Content-type', /json/)
    .expect(200)
    .end(function(err, res) {
      console.log('products returned: ' + res.body);
      res.status.should.equal(200);
      done();
    });
  });
});
