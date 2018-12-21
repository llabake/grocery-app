import request from 'supertest';
import { expect } from 'chai';

import app from './../../app'
import GroceryItem from './../model/groceryItem';

const baseUrl = '/api/groceries';
const items = [{
  name: 'item1',
  purchased: true
}, {
  name: 'item7',
  purchased: false
}];

describe('Grocery Controller', () => {
  before((done) => {
    GroceryItem.create(items);
    done();
  });

  after((done) => {
    GroceryItem.remove({}).then(() => {
      done();
    });
  });
  it('should get all groceries', (done) => {
    request(app)
      .get(`${baseUrl}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.groceries.length).to.equal(2);
        expect(res.body.message).to.equal('Groceries retrieved successfully');
        done();
      });
  });
  it('should add a grocery', (done) => {
    request(app)
      .post(`${baseUrl}`)
      .send({ name: 'grocery name' })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal('Successfully added a grocery');
        expect(res.body.grocery.name).to.equal('grocery name');
        done();
      });
  });
  it('should purchase a grocery', (done) => {
    GroceryItem.create({ name:  'any name'}).then((createdItem) => {
      request(app)
        .patch(`${baseUrl}/${createdItem._id}`)
        .send({ purchased: 'true' })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal(`Grocery successfully ${res.body.grocery.purchased ? 'bought' : 'unbought'}`);
          expect(res.body.grocery.purchased).to.equal(true);
          done();
        });
    })

  });

  it('should delete an item', (done) => {
    GroceryItem.create({ name: 'yemicoal'}).then((createdItem) => {
      request(app)
        .delete(`${baseUrl}/${createdItem._id}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal(`Grocery deleted successfully`);
          done();
        });
    });
  });
});