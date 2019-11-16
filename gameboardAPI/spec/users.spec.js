const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const { cleanUpDatabase } = require('./utils');
const File = require('../db/models/User');
const User = File.User;

//clean the database before testing
beforeEach(cleanUpDatabase);

describe('POST /users', function() {
    it('should create a user', async function() {
        const res = await supertest(app)
            .post('/users')
            .send({
                username: 'John Doe',
                password: '1234'
            })
            .expect(201)
            .expect('Content-Type', /json/);
        expect(res.body).to.be.an('object');
        expect(res.body._id).to.be.a('string');
        expect(res.body.username).to.equal('John Doe');
        expect(res.body).to.have.all.keys('_id', 'username', 'collections', 'createdAt', 'updatedAt', '__v');
    });
});

describe('GET /users', function() {
    beforeEach(async function() {
        // Create 2 users before retrieving the list.
        await Promise.all([User.create({ username: 'John Doe' }), User.create({ username: 'Jane Doe' })]);
    });
    it('should retrieve the list of users', async function() {
        const res = await supertest(app).get('/users').expect(200).expect('Content-Type', /json/);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(2);
        //test user 1
        expect(res.body[0]).to.be.an('object');
        expect(res.body[0]._id).to.be.a('string');
        expect(res.body[0].username).to.equal('John Doe');
        expect(res.body[0]).to.have.all.keys('_id', 'username', 'collections', 'createdAt', 'updatedAt', '__v');
        //test user 2
        expect(res.body[1]).to.be.an('object');
        expect(res.body[1]._id).to.be.a('string');
        expect(res.body[1].username).to.equal('Jane Doe');
        expect(res.body[1]).to.have.all.keys('_id', 'username', 'collections', 'createdAt', 'updatedAt', '__v');
    });
});

after(mongoose.disconnect);