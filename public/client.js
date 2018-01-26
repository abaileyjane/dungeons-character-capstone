let clickedCharacterId = "";
let clickedCharacterInformation=[];


function characterNameClick(){
	console.log(clickedCharacterInformation)
}

function watchViewCharacter(){
	console.log("watchViewCharacter ran")
    		$('.character-name').click(function(event){
    			clickedCharacterId=`${event.target.id}`
    	 		console.log("button clicked, event id is ", `${event.target.id}`,".....variable value is", clickedCharacterId);
    	 		loadViewCharacterSheet();
    	 		window.location.href="character-sheet.html"
    })
;
}

function watchNewCharButtonClick(){
	console.log( 'watchNewCharButtonClick ran')
	$('#new-character-button').on('click', function(event){
		event.preventDefault();
		console.log('new char button clicked')
		window.location.href = "create-character.html";
		
})}

function getCharacterData(callback){
	console.log('getCharacterData ran')
	$.getJSON('http://localhost:8080/characterSheets', callback);
	watchViewCharacter();
}

function displayCharacterNames(data){
	console.log('displayCharacterNames ran', 'data.response is', data.characters)
	const results = data.characters.map((item,index)=> renderCharacterNameResult(item));
	$('.character-names').html('')
	$('.character-names').append(results);
	watchViewCharacter();
		
}

function renderCharacterNameResult(result){
	console.log("renderCharacterNameResult ran");
	return `
		<div class='character-name' id="${result.id}">
			<a href='character-sheet.html'>${result.name}</a>
			<h3>${result.race} ... ${result.class} ... Level ${result.level}</h3>
		</div>
		`
}

function watchViewCharactersButtonClick(){
	console.log( 'watchNewCharButtonClick ran');
	$('#view-characters-button').on('click', function(event){
		event.preventDefault();
		window.location.href = "view-character-list.html";
		console.log('view chars button clicked')		
		// window.location.href.concat('#id') res.body.character[4].id
	})
}

function setUpdateFields(callback){
	console.log('populateUpdateFields ran')
	$.getJSON(`http://localhost:8080/characterSheets/${clickedCharacterId}`, callback);

}

function setCharacterInfoVariable(result){
	
	try { localStorage.setItem("clickedCharacterInformation",JSON.stringify(result)) } 
	catch(e) { console.log("error",e) }
}

function loadViewCharacters(){
	$(window).on("load", function(){
		getCharacterData(displayCharacterNames);
		}
	)
}

function loadViewCharacterSheet(){
	console.log("loadViewCharacterSheet ran");
		console.log('clickedCharacterInformation updated');
		setUpdateFields(setCharacterInfoVariable)
	}

function populateUpdateCharacterFields(){
	console.log("populateUpdateCharacterFields is running")
	let oldCharInfo = localStorage.getItem('clickedCharacterInformation');
	const decodeJSON = JSON.parse(oldCharInfo);
	$('.update-character').html(
		`<form  id="updateCharacter" name="update-character" method="put" action="/characterSheets/"ID>
				Character Name:<input class="" type="text" value="" name="name" label="name" placeholder="${decodeJSON.name}"><br>
				Class:<input class="" type="text" name="class" value="" label="class" placeholder="${decodeJSON.class}"><br>
				Race:<input class="" type="text" name="race" label="race" value="" placeholder="${decodeJSON.race}"><br>
				Level:<input class="" type="number" name="level" label="level" value="" placeholder="${decodeJSON.level}"><br>
				Background: <input class="" type="string" name="background" label="background" placeholder="${decodeJSON.background}"><br>
				Alignment: <input class="" type="string" name="alignment" label="alignment" placeholder="${decodeJSON.alignment}"><br>
				Experience Points: <input class="" type="number" name="experiencePoints" label="experiencePoints" placeholder="${decodeJSON.experiencePoints}"><br>
				Hit Points: <input class="" type="number" name="hitPoints" label="hitPoints" placeholder="${decodeJSON.hitPoints}"><br>
				Strength: <input class="" type="number" name="strength" label="strength" placeholder="${decodeJSON.strength}"><br> 
				Dexterity: <input class="" type="number" name="dexterity" label="dexterity" placeholder="${decodeJSON.dexterity}"><br>
				Constitution:<input class="" type="number" name="constitution" label="constitution" placeholder="${decodeJSON.constitution}"><br>
				Intelligence: <input class="" type="number" name="intelligence" label="intelligence" placeholder="${decodeJSON.intelligence}"><br>
				Wisdom: <input class="" type="number" name="wisdom" label="wisdom" placeholder="${decodeJSON.wisdom}"><br>
				Charisma: <input class="" type="number" name="charisma" label="charisma" placeholder="${decodeJSON.charisma}"><br>
				Inventory: <input class="" type="string" name="inventory" label="inventory" placeholder="${decodeJSON.inventory}"><br>
				Gold: <input class="" type="number" name="gold" label="gold" placeholder="${decodeJSON.gold}"><br>

				<button id="create-character-button" type="submit">Create character</button>
			</form>
			`)
}

function loadUpdateCharacter(){
	$(window).on("load", function(){
		populateUpdateCharacterFields();

		}
	)
}


watchNewCharButtonClick();
watchViewCharactersButtonClick();
// watchCreateCharSubmitClick();
loadViewCharacters();
characterNameClick();
loadUpdateCharacter();