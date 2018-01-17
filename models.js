const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
	name: String,
	race: String,
	class: String,
	level: Number
});

characterSchema.methods.serialize = function(){
	return{
		id: this._id,
		name: this.name,
		race: this.race,
		class: this.class,
		level: this.level
	}
}

const Character = mongoose.model('Character', characterSchema);

module.exports = {Character}