const express = require("express");
const app = express();
const bodyParser=require('body-parser');
const jsonParser=bodyParser.json();
const formParser= bodyParser.urlencoded({extended: false});
const mongoose=require('mongoose');
const path = require('path');
mongoose.Promise=global.Promise;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(jsonParser);

const {PORT, DATABASE_URL} = require('./config');
const {Character}=require('./models');
// const {clickedChracterId}= require('./public/client');

app.get("/",(req, res)=>{
	
	res.sendFile(__dirname+'/index.html');

});

app.get("/view-characters",(req, res)=>{
	res.sendFile(__dirname+'/public/view-character-list.html');

});

app.get("/create-character",(req, res)=>{
	res.sendFile(__dirname+'/public/create-character.html');

});

app.get("/sheet",(req, res)=>{
	res.sendFile(__dirname+'/public/character-sheet.html');

});

app.get('/characterSheets', (req,res) =>{
	Character
		.find()
		.then(characters=>{
			res.json({
				characters: characters.map(
					(character)=>character.serialize())
			});
		})
		.then(res.status(201))
		.catch(err=> {
			console.error(err);
			res.status(500).json({message:'Internal Server Error'})
		});

});

app.get('/characterSheets/:id', (req,res) =>{
	Character
		.findOne({_id: req.params.id})
		.then(characters=>{
			res.json(characters)
			})
		.then(res.status(201))
		.catch(err=> {
			console.error(err);
			res.status(500).json({message:'Internal Server Error'})
		});

});

app.post("/characterSheets", formParser, (req, res)=>{
	
	Character
		.create({
			name: req.body.name, 
			class: req.body.class, 
			race: req.body.race, 
			level: req.body.level,
			strength: req.body.strength,
			dexterity:req.body.dexterity,
			intelligence: req.body.intelligence,
			wisdom: req.body.wisdom,
			charisma: req.body.charisma,
			constitution: req.body.constitution,
			hitPoints: req.body.hitPoints,
			experiencePoints: req.body.experiencePoints,
			gold: req.body.gold,
			background:req.body.background,
			alignment:req.body.alignment
		})
		.then(character=> res.status(201).json(character))		
		.catch(err=>{
			console.error(err);
			res.status(500).json({message: 'internal server error'});
		});
	// self.location = "view-character-list.html";

});



app.put('/characterSheets/:id', formParser, (req, res)=>{
	const toUpdate = {};
  const updateableFields = ['name', 'class', 'race', 'level', 'strength', 'dexterity', 'intelligence', 'wisdom', 'charisma', 'constitution', 'proficiencies', 'hitPoints', 'experiencePoints', 'inventory', 'gold', 'background', 'alignment'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });
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

