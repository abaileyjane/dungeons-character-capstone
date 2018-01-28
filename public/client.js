let clickedCharacterId = "";
let clickedCharacterInformation=[];

//functions for homepage

//functions to navigate to character creation page
function watchNewCharButtonClick(){
	console.log( 'watchNewCharButtonClick ran')
	$('#new-character-button').on('click', function(event){
		event.preventDefault();
		console.log('new char button clicked')
		window.location.href = "create-character.html";
		
})}

function watchCreateCharacterSubmit(){
	$('#create-character-button').on('click', function(){
		event.preventDefault();
		console.log('youclicked the button');
        let sendName = $('#name').val();
        let sendRace = $('#race').val();
        let sendClass= $('#class').val();
        let sendLevel = $('#level').val();
        let sendStrength = $('#strength').val();
        let sendDexterity = $('#dexterity').val();
        let sendIntelligence = $('#intelligence').val();
        let sendWisdom = $('#wisdom').val();
        let sendCharisma=$('#charisma').val();
        let sendConstitution=$('#constitution').val();
        let sendProficiencies=$('#proficiencies').val();
        let sendHitPoints=$('#hitPoints').val();
        let sendExperiencePoints=$('#experiencePoints').val();
        let sendInventory=$('#inventory').val();
        let sendGold=$('#gold').val();
        let sendBackground=$('#background').val();
        let sendAlignment=$('#alignment').val();

          $.ajax({
                    url: 'http://localhost:8080/characterSheets',
                    type: 'PUT',   //type is any HTTP method
                    body: {
                		name: sendName,
						race: sendName,
						class: sendClass,
						level: sendLevel, 
						strength: sendStrength,
						dexterity: sendDexterity,
						intelligence: sendIntelligence,
						wisdom: sendWisdom,
						charisma: sendCharisma,
						constitution: sendConstitution,
						proficiencies: sendProficiencies,
						hitPoints: sendHitPoints,
						experiencePoints: sendExperiencePoints,
						inventory: sendInventory,
						gold: sendGold,
						background: sendBackground,
						alignment: sendAlignment
                    },      //Data as js object
                    success: function () {
                    	window.location.href = "view-character-list.html";

                    }
                })

	})
}



//functions to navigate to view characters page
function goToViewCharacters(){
	window.location.href = "view-character-list.html";

}

function loadViewCharacters(){
	$(window).on("load", function(){
		getCharacterData(displayCharacterNames);
		}
	)
}

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


//functions to navigate to view character sheet page
function setClickedCharId(){
	    clickedCharacterId=`${event.target.id}`
	    return clickedCharacterId;

}
function watchViewCharacter(){
	console.log("watchViewCharacter ran")
    		$('.character-name').click(function(event){
    			setCharacterInfoVariable();
				loadViewCharacterSheet();    			// window.location.href="character-sheet.html";
    			
    		return goToViewCharacterSheet();
    		})
}
function goToViewCharacterSheet(){
	window.location.href = "character-sheet.html";

}

function setUpdateFields(callback){
	console.log('populateUpdateFields ran')
	$.getJSON(`http://localhost:8080/characterSheets/${clickedCharacterId}`, callback);

}

function setCharacterInfoVariable(result){
	
	try { localStorage.setItem("clickedCharacterInformation",JSON.stringify(result)) } 
	catch(e) { console.log("error",e) }
}



function loadViewCharacterSheet(){
	console.log("loadViewCharacterSheet ran");
		console.log('clickedCharacterInformation updated');
		setUpdateFields(setCharacterInfoVariable)
	}

function loadUpdateCharacter(){
	$(window).on("load", function(){
		populateUpdateCharacterFields();

		}
	)
}


function populateUpdateCharacterFields(){
	console.log("populateUpdateCharacterFields is running")
	let oldCharInfo = localStorage.getItem('clickedCharacterInformation');
	console.log(oldCharInfo ==="undefined");
	const decodeJSON = oldCharInfo==="undefined" ? {}:JSON.parse(oldCharInfo);
	
	
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
				<button id="${decodeJSON.id}" class="delete-character-button">Delete Character</button
			</form>
			`)
}
//functions to delete character

function deleteCharacter(callback){
	clickedCharacterId=`${event.target.id}`;
    	$.deleteJSON(`http://localhost:8080/characterSheets/${clickedCharacterId}`, callback)
}


function deleteCharacterButtonClick(){
	$('.delete-character-button').click(function(){
    	deleteCharacter(goToViewCharacters)
    })
}


function watchCreateCharacterSubmit(){
	$('#create-character-button').on('click', function(){
		event.preventDefault();
		console.log('youclicked the button');
        let sendName = $('#name').val();
        let sendRace = $('#race').val();
        let sendClass= $('#class').val();
        let sendLevel = $('#level').val();
        let sendStrength = $('#strength').val();
        let sendDexterity = $('#dexterity').val();
        let sendIntelligence = $('#intelligence').val();
        let sendWisdom = $('#wisdom').val();
        let sendCharisma=$('#charisma').val();
        let sendConstitution=$('#constitution').val();
        let sendProficiencies=$('#proficiencies').val();
        let sendHitPoints=$('#hitPoints').val();
        let sendExperiencePoints=$('#experiencePoints').val();
        let sendInventory=$('#inventory').val();
        let sendGold=$('#gold').val();
        let sendBackground=$('#background').val();
        let sendAlignment=$('#alignment').val();

        console.log(sendName, sendClass, sendAlignment);

          $.ajax({
                    url: 'http://localhost:8080/characterSheets',
                    type: 'POST',   //type is any HTTP method
                    data: {
                		"name": `${sendName}`,
						"race": `${sendRace}`,
						'class': `${sendClass}`,
						'level': `${sendLevel}`, 
						'strength': `${sendStrength}`,
						'dexterity': `${sendDexterity}`,
						'intelligence': `${sendIntelligence}`,
						'wisdom': `${sendWisdom}`,
						'charisma': `${sendCharisma}`,
						'constitution': `${sendConstitution}`,
						'proficiencies': `${sendProficiencies}`,
						'hitPoints': `${sendHitPoints}`,
						'experiencePoints': `${sendExperiencePoints}`,
						'inventory': `${sendInventory}`,
						'gold': `${sendGold}`,
						'background': `${sendBackground}`,
						'alignment': `${sendAlignment}`
                    }
                })
          .then(function(){window.location.href = "view-character-list.html"})

	})
}

watchCreateCharacterSubmit();
watchNewCharButtonClick();
watchViewCharactersButtonClick();
loadViewCharacters();
// characterNameClick();
loadUpdateCharacter();
deleteCharacterButtonClick();