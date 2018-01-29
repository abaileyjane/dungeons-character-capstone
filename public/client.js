

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
        console.log("send name is", sendName)
        if(sendName===""){
				alert("You must enter a name")
			}
          else($.ajax({
                    url: 'http://localhost:8080/characterSheets',
                    type: 'POST',   //type is any HTTP method
                    data: {
                		name: sendName,
						race: sendRace,
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
                })
          .then(function () {
                window.location.href = "view-character-list.html"}))
})}



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
	watchViewSingleCharacter();
}
function displayCharacterNames(data){
	console.log('displayCharacterNames ran', 'data.response is', data.characters)
	const results = data.characters.map((item,index)=> renderCharacterNameResult(item));
	$('.character-names').html('')
	$('.character-names').append(results);
	watchViewSingleCharacter();
		
}

function renderCharacterNameResult(result){
	console.log("renderCharacterNameResult ran");
	return `
		<div class='character-name' id="${result.id}">
			<h6 id="${result.id}">${result.name}</h6>
			<h5 id="${result.id}">${result.race} ... ${result.class} ... Level ${result.level}</h5>
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
let clickedCharacterId = "";
let clickedCharacterInformation=[];

function setClickedCharId(){
		console.log("setClickedCharId ran")
	    clickedCharacterId=`${event.target.id}`;
	    try { localStorage.setItem("clickedCharacterId", clickedCharacterId) } 
		catch(e) { console.log("error",e) }
		window.location.href = "character-sheet.html";

}
function goToViewCharacterSheet(){
	console.log("goToViewCharacterSheet ran")
	window.location.href = "character-sheet.html";

}
function watchViewSingleCharacter(){
	console.log("watchViewCharacter ran")
    		$('.character-name').click(function(event){
    			setClickedCharId()
    			
    		})
    		
}


function setUpdateFields(callback){
	console.log('populateUpdateFields ran', clickedCharacterId)
	$.getJSON(`http://localhost:8080/characterSheets/${clickedCharacterId}`, callback);

}


function loadUpdateCharacter(){
	$(window).on("load", function(){
		getClickedCharacterInfo(populateUpdateCharacterFields);

		}
	)
}

function getClickedCharacterInfo(callback){
	let selectedCharId = localStorage.getItem('clickedCharacterId');
	$.getJSON(`http://localhost:8080/characterSheets/${selectedCharId}`, callback);
}


function populateUpdateCharacterFields(result){
	console.log("populateUpdateCharacterFields is running.... result is", result)
	console.log(result ==="undefined");

	const decodeJSON=result;
	console.log(decodeJSON);

	$('.selected-character-name').html(
		`<h1>${decodeJSON.name}</h1>`)

	
	
	$('.update-character').html(
		`
		

		<form  id="updateCharacter" class="col-6 newCharacter" name="update-character" method="put" action="/characterSheets/"ID>
				Character Name:<input class="" type="text" value="" name="name" label="name" placeholder="${decodeJSON.name}" id="name" ><br>
				Class:<input class="" type="text" name="class" value="" label="class" placeholder="${decodeJSON.class}" id="class" ><br>
				Race:<input class="" type="text" name="race" label="race" value="" placeholder="${decodeJSON.race}" id="race" ><br>
				Level:<input class="" type="number" name="level" label="level" value="" placeholder="${decodeJSON.level}" id="level" ><br>
				Background: <input class="" type="string" name="background" label="background" placeholder="${decodeJSON.background}" id="background" ><br>
				Alignment: <input class="" type="string" name="alignment" label="alignment" placeholder="${decodeJSON.alignment}" id="alignment" ><br>
				Experience Points: <input class="" type="number" name="experiencePoints" label="experiencePoints" placeholder="${decodeJSON.experiencePoints}" id="experiencePoints" ><br>
				Hit Points: <input class="" type="number" name="hitPoints" label="hitPoints" placeholder="${decodeJSON.hitPoints}" id="hitPoints" ><br>
				Strength: <input class="" type="number" name="strength" label="strength" placeholder="${decodeJSON.strength}" id="strength" ><br> 
				Dexterity: <input class="" type="number" name="dexterity" label="dexterity" placeholder="${decodeJSON.dexterity}" id="dexterity" ><br>
				Constitution:<input class="" type="number" name="constitution" label="constitution" placeholder="${decodeJSON.constitution}" id="constitution" ><br>
				Intelligence: <input class="" type="number" name="intelligence" label="intelligence" placeholder="${decodeJSON.intelligence}" id="intelligence" ><br>
				Wisdom: <input class="" type="number" name="wisdom" label="wisdom" placeholder="${decodeJSON.wisdom}" id="wisdom" ><br>
				Charisma: <input class="" type="number" name="charisma" label="charisma" placeholder="${decodeJSON.charisma}" id="charisma" ><br>
				Inventory: <input class="" type="string" name="inventory" label="inventory" placeholder="${decodeJSON.inventory}"  id="inventory" ><br>
				Gold: <input class="" type="number" name="gold" label="gold" placeholder="${decodeJSON.gold}"  id="gold" ><br>

					
			</form>
			`)
}

function watchUpdateCharacterSubmit(){
	$('#update-characters-button').on('click', function(){
		event.preventDefault();
		console.log('youclicked the button');
		let selectedCharId = localStorage.getItem('clickedCharacterId');

		let updatableFields=[]
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
        let sendHitPoints=$('#hitPoints').val();
        let sendExperiencePoints=$('#experiencePoints').val();
        let sendInventory=$('#inventory').val();
        let sendGold=$('#gold').val();
        let sendBackground=$('#background').val();
        let sendAlignment=$('#alignment').val();
		if($('#name').val()!==""){
			updatableFields.push(`name: ${sendName}`)
		}
		if($('#race').val()!==""){
			updatableFields.push(`race: ${sendRace}`)
		}
		if($('#class').val()!==""){
			updatableFields.push(`class: ${sendClass}`)
		}

		if($('#level').val()!==""){
			updatableFields.push(`level:${sendLevel}`)
		}
		if($('#strength').val()!==""){
			updatableFields.push(`strength: ${sendStrength}`)
		}
		if($('#dexterity').val()!==""){
			updatableFields.push(`dexterity:${sendDexterity}`)
		}
		if($('#intelligence').val()!==""){
			updatableFields.push(`intelligence:${sendIntelligence}`)
		}
		if($('#wisdom').val()!==""){
			updatableFields.push(`wisdom:${sendWisdom}`)
		}
		if($('#charisma').val()!==""){
			updatableFields.push(`charisma:${sendCharisma}`)
		}
		if($('#constitution').val()!==""){
			updatableFields.push(`constitution:${sendConstitution}`)
		}
		if($('#sendHitPoints').val()!==""){
			updatableFields.push(`hitPoints:${sendHitPoints}`)
		}
		if($('#experiencePoints').val()!==""){
			updatableFields.push(`experiencePoints:${sendExperiencePoints}`)
		}
		if($('#gold').val()!==""){
			updatableFields.push(`gold:${sendGold}`)
		}
		if($('#alignment').val()!==""){
			updatableFields.push(`alignment:${sendAlignment}`)
		}
		if($('#background').val()!==""){
			updatableFields.push(`background:${sendBackground}`)
		}
		if($('#inventory').val()!==""){
			updatableFields.push(`inventory:${sendInventory}`)
		}
        console.log("updatableFields is", updatableFields)
        $.ajax({
                    url: `http://localhost:8080/characterSheets/${selectedCharId}`,
                    type: 'PUT',   //type is any HTTP method
                    data: `{
                    	${updatableFields}
  
                    }`,   
                })
          .then(function () {
                alert("Character Saved")
			})
})}


function viewOtherCharactersButtonClick(){
	$('#view-characters-button').click(function(){
    	goToViewCharacters()
    })
}

viewOtherCharactersButtonClick();

//functions to delete character

function deleteCharacter(){
		let selectedCharId = localStorage.getItem('clickedCharacterId');
    	$.ajax({
    		url: `http://localhost:8080/characterSheets/${selectedCharId}`,
    		type:'DELETE'
    	})
    	.then(function(){
    		goToViewCharacters()
    	})
}



function deleteCharacterButtonClick(){
	$('#delete-character-button').click(function(){
    	deleteCharacter()
    })
}




watchCreateCharacterSubmit();
watchNewCharButtonClick();
watchViewCharactersButtonClick();
loadViewCharacters();
// characterNameClick();
loadUpdateCharacter();
deleteCharacterButtonClick();
watchViewSingleCharacter();
watchUpdateCharacterSubmit();