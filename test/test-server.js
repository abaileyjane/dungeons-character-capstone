const chai = require('chai');
const mocha = require('mocha');
const chaiHttp=require('chai-http');
const mongoose = require('mongoose');
const faker = require('faker');

const expect = chai.expect;
const Assertion=chai.Assertion;

chai.use(chaiHttp);

const{Character}=require('../models');
const{runServer, closeServer, server, app}=require('../server');
const{TEST_DATABASE_URL,TEST_PORT}=require('../config');



function tearDownDb(){
  console.warn('Deleting Database');
  return mongoose.connection.dropDatabase();
}

function seedCharacterData(){
  let charData=[];
  for (let i=0; i<5; i++){
    let newTestChar = {
      name: faker.name.firstName(),
      class: faker.random.word(),
      race: faker.random.word(),
      level: 5
    };
    charData.push(newTestChar);
  }

  return Character.insertMany(charData);
}

describe('API Function', function(){
	before (function(){
    return runServer(TEST_DATABASE_URL, TEST_PORT);
  })
  after(function(){
		return closeServer();
	})
  beforeEach(function(){
    return seedCharacterData()
  })

  afterEach(function(){
    return tearDownDb();
  })

  describe("get requests", function(){
  	it('should return a status of 200 on homepage page load', function(){
      return chai.request(app)
      .get('/')
  		.then(function(res){
  			expect(res).to.have.status(200);
  		})
    })

    it('should return a status of 200 on character create page load', function(){
      return chai.request(app)
      .get('/create-character')
      .then(function(res){
        expect(res).to.have.status(200);
      })
    })

    it('should return a status of 200 on character-sheet page load THIS IS THE TEST THAT FAILS', function(){
      return chai.request(app)
      .get('/sheet')
      .then(function(res){
        expect(res).to.have.status(200);
      })
    })

    it('should return a status of 200 on view character list page load', function(){
      return chai.request(app)
      .get('/view-characters')
      .then(function(res){
        expect(res).to.have.status(200);
      })
    })

    it('should return list of characters', function(){
      return chai.request(app)
      .get('/characterSheets')
       .then(function(res){
        expect(res.body.characters[0]).to.be.a('object');
        expect(res.body.characters).to.have.lengthOf.at.least(1);
        expect(res.body.characters[0]).to.include.keys('name','class','race','level');
        })
        expect(res).to.have.status(201)
      })
    it('should return one character', function(){
      
    })
    })
  describe('Push Requests', function(){
    it('should create new character on put', function(){
      const newTestChar = {
        name: faker.name.firstName(),
        class: faker.random.word(),
        race: faker.random.word(),
        level: 5
      };
      return chai.request(app)
        .post('/characterSheets')
        .send(newTestChar)
        .then(function(res){
          expect(res).to.have.status(201);
          expect(res).to.be.json;
          expect(res.body).to.be.a('object');
          expect(res.body).to.include.keys('name','class','race','level')
          expect(res.body.name).to.equal(newTestChar.name);
          expect(res.body.class).to.equal(newTestChar.class);
          expect(res.body.race).to.equal(newTestChar.race);
          expect(res.body.level).to.equal(newTestChar.level);
          expect(res.body.level).to.be.a('number');

        })

    })
  })

  describe('Put requests', function(){
    it('should update character', function(){
      const updatedChar = {
        name: "new name",
        class: "new class",
        level: 8
      }
      return Character
        .findOne()
        .then(function(character){
          updatedChar.id=character.id;
          return chai.request(app)
          .put(`/characterSheets/${updatedChar.id}`)
          .send(updatedChar);
        })
        .then(function(res){
          expect(res).to.have.status(204);
          return Character.findById(updatedChar.id);
        })
        .then(function(character){
          expect(character.name).to.equal(updatedChar.name);
          expect(character.class).to.equal(updatedChar.class);
          expect(character.race).to.be.a('string');
        })
    })
  })

  describe('delete endpoint', function(){
    it('should delete character', function(){
      return Character
      .findOne()
      .then(function(character){
        return chai.request(app)
        .delete(`/characterSheets/${character.id}`)
        .then(function(res){
          expect(res).to.have.status(204)
        })
      })
    })
  })
	})


