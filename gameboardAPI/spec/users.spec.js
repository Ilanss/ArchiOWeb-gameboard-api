const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

const File = require('../db/models/User');
const User = File.User;

const { cleanUpDatabase } = require('./utils');

const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY || 'changeme';

//clean the database before testing
beforeEach(cleanUpDatabase);

//MINIMAL TEST - post user route TEST
describe('POST /users', function() {
    it('should create a user', async function() {
        const res = await supertest(app)
            .post('/users')
            .send({
                username: 'John Doe',
                personal_info: { password: '1234', email: 'test@gmail.com' }
            })
            .expect(201)
            .expect('Content-Type', /json/);
        expect(res.body).to.be.an('object');
        expect(res.body._id).to.be.a('string');
        expect(res.body.username).to.equal('John Doe');
        expect(res.body).to.have.all.keys(
            '_id',
            'username',
            'collections',
            'createdAt',
            'updatedAt',
            'personal_info',
            '__v'
        );
    });
});

//MINIMAL TEST -- get user list rout TEST
describe('GET /users', function() {
    beforeEach(async function() {
        // Create 2 users before retrieving the list.
        await Promise.all([
            User.create({ username: 'John Doe', personal_info: { password: '1234', email: 'test@gmail.com' } }),
            User.create({ username: 'Jane Doe', personal_info: { password: '1234', email: 'test2@gmail.com' } })
        ]);
    });
    it('should retrieve the list of users', async function() {
        const res = await supertest(app).get('/users').expect(200).expect('Content-Type', /json/);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(2);
        //test user 1
        expect(res.body[0]).to.be.an('object');
        expect(res.body[0]._id).to.be.a('string');
        expect(res.body[0].username).to.equal('John Doe');
        expect(res.body[0]).to.have.all.keys(
            '_id',
            'username',
            'collections',
            'createdAt',
            'updatedAt',
            'personal_info',
            '__v'
        );
        //test user 2
        expect(res.body[1]).to.be.an('object');
        expect(res.body[1]._id).to.be.a('string');
        expect(res.body[1].username).to.equal('Jane Doe');
        expect(res.body[1]).to.have.all.keys(
            '_id',
            'username',
            'collections',
            'createdAt',
            'updatedAt',
            'personal_info',
            '__v'
        );
    });
});

//ADAVANCED TEST -- user id route TEST.
describe('GET /users/:id', function() {
    let user;

    beforeEach(async function() {
        user = await User.create({
            username: 'John Doe',
            personal_info: { password: '1234', email: 'test@gmail.com' }
        });
    });

    it('should retrieve a specific user', async function() {
        const res = await supertest(app).get('/users/' + user._id).expect(200).expect('Content-Type', /json/);
    });

    it('should not be able to retrieve a specific user with invalid id', async function() {
        const res = await supertest(app).get('/users/testid').expect(404);
    });

    it('should not be able to retrieve a specific user with non-existent id', async function() {
        const res = await supertest(app).get('/users/5dcd2578e706374f0b46b1f3').expect(404);
    });
});

//MINIMAL TEST -- patch user route TEST
describe('PATCH /users/:id', function() {
    let user;

    beforeEach(async function() {
        user = await User.create({
            username: 'John Doe',
            personal_info: { password: '1234', email: 'test@gmail.com' }
        });
    });

    it('should update a user', async function() {
        /*
        const exp = (new Date().getTime() + 7 * 24 * 3600 * 1000) / 1000;
        const claims = { sub: user._id.toString(), exp: exp };

        let token = jwt.sign(claims, secretKey);
        */
        const res = await supertest(app)
            .patch('/users/' + user._id)
            .send({
                username: 'John Doe patched'
            })
            //    .set('Authorization', 'Bearer ' + token)
            .expect(200)
            .expect('Content-Type', /json/);
    });
});

//MINIMAL TEST -- delate user route TEST
describe('DELETE /users/:id', function() {
    let user;

    beforeEach(async function() {
        user = await User.create({
            username: 'John Doe',
            personal_info: { password: '1234', email: 'test@gmail.com' }
        });
    });

    it('should delete a user', async function() {
        /*
        const exp = (new Date().getTime() + 7 * 24 * 3600 * 1000) / 1000;
        const claims = { sub: user._id.toString(), exp: exp };

        let token = jwt.sign(claims, secretKey);
        */
        const res = await supertest(app)
            .del('/users/' + user._id)
            //.set('Authorization', 'Bearer ' + token)
            .expect(204);
        expect(res.body).to.eql({});
    });
});

after(mongoose.disconnect);
