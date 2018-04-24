import supertest from 'supertest';
import {app} from '../index.js';
import should from 'should'; //eslint-disable-line

describe('Users API unit tests', function() {
  beforeEach(function() {
    console.log('before each user api test');
  });

  it('should deny access to user profile (not authenticated)',
  function(done) {
    const superserver = supertest(app);
    superserver
    .post('/api/users/')
    .send({'firstname': 'Test 1',
           'lastname': ' User 1',
           'email': 'testuser1@example.com',
           'password': 'test'})
    .expect('Content-type', /json/)
    .expect(201) // This is the HTTP response
    .end(function(err, res) {
      const userId = res.body._id;
      superserver
      .get('/api/users/' + userId)
      .expect('Content-type', /json/)
      .expect(401) // unauthorised
      .end(function(err, res) {
        // HTTP status should be 401
        res.status.should.equal(401);
        done();
      });
    });
  });

  it('should authenticate user', function(done) {
    const superserver = supertest(app);
    superserver
    .post('/api/users/')
    .send({'firstname': 'Test 2',
           'lastname': ' User 2',
           'email': 'testuser2@example.com',
           'password': 'test'})
    .expect('Content-type', /json/)
    .expect(201) // This is the HTTP response
    .end(function(err, res) {
      superserver
      .post('/api/auth/')
      .send({'email': 'testuser2@example.com',
            'password': 'test'})
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        res.body.token.should.not.be.empty();
        done();
      });
    });
  });
});

