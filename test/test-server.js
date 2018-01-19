const chai = require('chai');
const mocha = require('mocha');
const chaiHttp=require('chai-http');
const mongoose = require('mongoose');
const faker = require('faker');

const expect = chai.expect;

chai.use(chaiHttp);

const{Character}=require('../models');
const{runServer, closeServer}=require('../server');
const{TEST_DATABASE_URL,TEST_PORT}=require('../config');

function tearDownDb(){
  console.warn('Deleting Database');
  return mongoose.connection.dropDatabase();
}




function seedCharacterData(){
  let charData=[];
  for (let i=0; i<5; i++){
    let newTestChar = {
      name: faker.name.firstName,
      class: faker.random.word,
      race: faker.random.word,
      level: faker.random.number
    };
    charData.push(newTestChar);
  }
  return Character.insertMany(charData);
}

describe('connecting to server', function(){
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

	it('should return a status of 200', function(){
		runTestServer()
		.then(function(res){
			expect(res).to.have.status(200);
		})
	})
})

