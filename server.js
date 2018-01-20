const express = require("express");
const app = express();
const bodyParser=require('body-parser');
const jsonParser=bodyParser.json();
const formParser= bodyParser.urlencoded({extended: false});
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;

app.use(express.static('public'));
app.use(jsonParser);

const {PORT, DATABASE_URL} = require('./config');
const {Character}=require('./models')

app.get("/",(req, res)=>{
	console.log(res);
	res.sendFile(__dirname+'/public/homepage.html');

});

app.get("/view-character-list",(req, res)=>{
	console.log(res);
	res.sendFile(__dirname+'/public/view-character-list.html');

});

app.get("/create-character",(req, res)=>{
	console.log(res);
	res.sendFile(__dirname+'/public/create-character.html');

});

app.get("/character-sheet",(req, res)=>{
	console.log(res);
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

app.post("/characterSheets", formParser, (req, res)=>{
	
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

