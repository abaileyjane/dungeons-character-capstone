const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
	name: {type:String, required: true},
	race: String,
	class: String,
	level: Number,
	strength: Number,
	dexterity: Number,
	intelligence: Number,
	wisdom: Number,
	charisma: Number,
	constitution: Number,
	proficiencies: String,
	hitPoints: Number,
	experiencePoints: Number,
	inventory: String,
	gold: Number,
	background: String,
	alignment: String
});

characterSchema.methods.serialize = function(){
	return{
		id: this._id,
		name: this.name,
		race: this.race,
		class: this.class,
		level: this.level, 
		strength: this.strength,
		dexterity: this.dexterity,
		intelligence: this.intelligence,
		wisdom: this.wisdom,
		charisma: this.charisma,
		constitution: this.constitution,
		proficiencies: this.proficiencies,
		hitPoints: this.hitPoints,
		experiencePoints: this.experiencePoints,
		inventory: this.inventory,
		gold: this.gold,
		background: this.background,
		alignment: this.alignment
	}
}

const Character = mongoose.model('Character', characterSchema);

module.exports = {Character}