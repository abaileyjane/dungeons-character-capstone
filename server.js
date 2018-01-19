const express = require("express");
const app = express();
const bodyParser=require('body-parser');
const jsonParser=bodyParser.json();
const formParser= bodyParser.urlencoded({extended: false});
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

app.use(express.static('public'));
app.use(jsonParser);

console.log("THIS IS JSON PARSER", jsonParser);

const {PORT, DATABASE_URL} = require('./config');
const {Character}=require('./models')

app.get("/",(req, res)=>{
	
	res.sendFile(__dirname+'/characterSheets/index.html');
});

app.post("/characterSheets", formParser, (req, res)=>{
	// let newCharacter = document.getElementById('newCharacter');
	// let formData = new FormData(newCharacter);
	// console.log(formData);
	console.log("this is the BODY", req.body);
	Character
		.create({
			name: req.body.name, 
			class: req.body.class, 
			race: req.body.race, 
			level: req.body.level
		})
		.then(character=> res.status(201).json(character))
		.catch(err=>{
			console.error(err);
			res.status(500).json({message: 'internal server error'});
		});
});

app.get('/characterSheets/:id', (req, res)=>{


	Character
		.findById(req.params.id)
		.then(character => res.json(character.serialize()))
		.catch(err=>{
			console.error(err);
			res.status(500).json({message:'internal server error'});
		})
})

app.put('/characterSheets/:id', formParser, (req, res)=>{
	console.log("put request ran")
	const toUpdate = {};
  const updateableFields = ['name', 'class', 'race', 'level'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });
  console.log("THINGS TO UPDATE",toUpdate);
	Character
		.findByIdAndUpdate(req.params.id, {$set: toUpdate})
		.then(character => res.status(204).end())
		.catch(err => res.status(500).json({message:'Internal Server Error'}))
})

app.delete('/characterSheets/:id', (req, res)=>{
	Character
		.findByIdAndRemove(req.params.id)
		.then(character=>res.status(204).end())
		.catch(err=>res.status(500).json({message: 'Internal Server Error'}))
})
let server;

function runServer(databaseUrl, port=PORT){
	return new Promise((resolve, reject)=>{
		mongoose.connect(databaseUrl, {useMongoClient: true}, err=>{
			if (err){
				return reject(err);
			}
			server=app.listen(port,()=>{
				console.log(`your app is listening on port ${port}`);
				resolve();
			})
			.on('error', err=>{
				mongoose.disconnect();
				reject(err);
			});
		});
	});
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };

