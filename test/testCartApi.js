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
      res.status.should.equal(201);
      done();
    });
  });

  it('should add an item to a cart', function(done) {
    const superserver = supertest(app);
    let cartId;
    superserver
    .post('/api/cart')
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      cartId = res.body._id; // cart id
      superserver
      .get('/api/products')
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        const productId = res.body[0]._id;
        superserver
        .put('/api/cart/' + cartId)
        .send({product: productId, quantity: 1}) // add item
        .expect('Content-type', /json/)
        .expect(201)
        .end(function(err, res) {
          res.status.should.equal(201);
          done();
        });
      });
    });
  });

  it('should remove an item from the cart', function(done) {
    const superserver = supertest(app);
    let cartId;
    superserver
    .post('/api/cart')
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      // cart created
      cartId = res.body._id; // cart id
      superserver
      .get('/api/products')
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        // products returned
        const productId = res.body[0]._id;
        superserver
        .put('/api/cart/' + cartId)
        .send({product: productId, quantity: 1}) // add item
        .expect('Content-type', /json/)
        .expect(201)
        .end(function(err, res) {
          // product added
          const lineItemId = res.body.items[0]._id;
          superserver
          .delete('/api/cart/' + cartId)
          .send({lineItem: lineItemId})
          .expect('Content-type', /json/)
          .expect(200)
          .end(function(err, res) {
            // lineitem deleted
            res.status.should.equal(200);
            res.body.items.should.be.empty();
            done();
          });
        });
      });
    });
  });

  it('should increase quantity of item in cart', function(done) {
    const superserver = supertest(app);
    let cartId;
    superserver
    .post('/api/cart')
    .expect('Content-type', /json/)
    .expect(201)
    .end(function(err, res) {
      // cart created
      cartId = res.body._id; // cart id
      superserver
      .get('/api/products')
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        // products returned
        const productId = res.body[0]._id;
        superserver
        .put('/api/cart/' + cartId)
        .send({product: productId, quantity: 1}) // add item
        .expect('Content-type', /json/)
        .expect(201)
        .end(function(err, res) {
          // product added
          superserver
          .put('/api/cart/' + cartId)
          .send({product: productId, quantity: 1}) // add same item
          .expect('Content-type', /json/)
          .expect(201)
          .end(function(err, res) {
            // console.log(res.body);
            done();
          });
        });
      });
    });
  });
});
