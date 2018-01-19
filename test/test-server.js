const chai = require('chai');
const mocha = require('mocha');
const chaiHttp=require('chai-http');
const mongoose = require('mongoose');
const faker = require('faker');

const expect = chai.expect;

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
  	it('should return a status of 200 on page load', function(){
      return chai.request(app)
      .get('/')
  		.then(function(res){
  			expect(res).to.have.status(200);
  		})
    })

    it('should return list of characters', function(){
      return chai.request(app)
      .get('/characterSheets')
       .then(function(res){
        console.log(res.body.characters[0])
        expect(res.body.characters).to.be.json;
        expect(res.body.characters).to.have.lengthOf.at.least(1);
        expect(res.body.characters[0]).to.include.keys('name','class','race','level');
        })
        expect(res).to.have.status(201)
      })
    })
  describe('Put Requests', function(){
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
	})


