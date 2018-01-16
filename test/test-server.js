const chai = require('chai');
const mocha = require('mocha');
const chaiHttp=require('chai-http');
const mongoose = require('mongoose');

const expect = chai.expect;

chai.use(chaiHttp);

function runTestServer() {
  const port = process.env.PORT || 7070;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    }).on('error', err => {
      reject(err)
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

describe('connecting to server', function(){
	after(function(){
		return closeServer();
	})
	it('should return a status of 200', function(){
		runTestServer()
		.then(function(res){
			expect(res).to.have.status(200);
		})
	})
})
