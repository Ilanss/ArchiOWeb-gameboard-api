const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

const File = require('../db/models/Game');
const Game = File.Game;

const { cleanUpDatabase } = require('./utils');

//clean the database before testing
beforeEach(cleanUpDatabase);

describe('POST /games', function() {
    it('should create a game', async function() {
        const res = await supertest(app)
            .post('/games')
            .send({
                name: 'uno',
                createdBy: 'testid'
            })
            .expect(201)
            .expect('Content-Type', /json/);
        expect(res.body).to.be.an('object');
        expect(res.body._id).to.be.a('string');
        expect(res.body.name).to.equal('uno');
        expect(res.body.createdBy).to.equal('testid');
        expect(res.body).to.have.all.keys('_id', 'name', 'createdBy', 'createdAt', 'updatedAt', '__v');
    });
});

describe('GET /games', function() {
    beforeEach(async function() {
        // Create 2 games before retrieving the list.
        await Promise.all([
            Game.create({ name: 'uno', createdBy: 'testid' }),
            Game.create({ name: 'duo', createdBy: 'testid' })
        ]);
    });
    it('should retrieve the list of games', async function() {
        const res = await supertest(app).get('/games').expect(200).expect('Content-Type', /json/);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(2);
        //test game 1
        expect(res.body[0]).to.be.an('object');
        expect(res.body[0]._id).to.be.a('string');
        expect(res.body[0].name).to.equal('uno');
        expect(res.body.createdBy).to.equal('testid');
        expect(res.body[0]).to.have.all.keys('_id', 'name', 'createdBy', 'createdAt', 'updatedAt', '__v');
        //test game 2
        expect(res.body[1]).to.be.an('object');
        expect(res.body[1]._id).to.be.a('string');
        expect(res.body[1].name).to.equal('duo');
        expect(res.body.createdBy).to.equal('testid');
        expect(res.body[1]).to.have.all.keys('_id', 'name', 'createdBy', 'createdAt', 'updatedAt', '__v');
    });
});

after(mongoose.disconnect);