

//functions for homepage

//functions to navigate to character creation page
function watchNewCharButtonClick(){
	$('#new-character-button').on('click', function(event){
		event.preventDefault();
		window.location.href = "create-character.html";
		
})}

function watchCreateCharacterSubmit(){
	$('#create-character-button').on('click', function(){
		event.preventDefault();
		let createdFields={};
		['class', 'level', 'strength', 'name','race', 'dexterity', 'intelligence', 'wisdom', 'charisma', 'constitution', 'hitPoints', 'experiencePoints', 'inventory', 'gold', 'background', 'alignment'].forEach(function(item) {
  			createdFields[item]= $('#'+ item).val(); 
 		})
        let sendName = $('#name').val();
        if(sendName===""){
				alert("You must enter a name")
			}
          else($.ajax({
                    url: 'http://localhost:8080/characterSheets',
                    type: 'POST', 
                    data: createdFields
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
	$.getJSON('http://localhost:8080/characterSheets', callback);
	watchViewSingleCharacter();
}
function displayCharacterNames(data){
	const results = data.characters.map((item,index)=> renderCharacterNameResult(item));
	$('.character-names').html('')
	$('.character-names').append(results);
	watchViewSingleCharacter();
		
}

function renderCharacterNameResult(result){
	return `
		<div class='character-name col-5' id="${result.id}">
			<h6 id="${result.id}">${result.name}</h6>
			<h5 id="${result.id}">${result.race} ... ${result.class} ... Level ${result.level}</h5>
		</div>

		`
}

function watchViewCharactersButtonClick(){
	$('#view-characters-button').on('click', function(event){
		event.preventDefault();
		window.location.href = "view-character-list.html";
	})
}


//functions to navigate to view character sheet page
let clickedCharacterId = "";
let clickedCharacterInformation=[];

function setClickedCharId(){
	    clickedCharacterId=`${event.target.id}`;
	    try { localStorage.setItem("clickedCharacterId", clickedCharacterId) } 
		catch(e) { console.log("error",e) }
		window.location.href = "character-sheet.html";

}
function goToViewCharacterSheet(){
	window.location.href = "character-sheet.html";

}
function watchViewSingleCharacter(){
    		$('.character-name').click(function(event){
    			setClickedCharId()
    			
    		})
    		
}


function setUpdateFields(callback){
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
	const decodeJSON=result;
	$('.selected-character-name').html(
		`<h1>${decodeJSON.name}</h1>`)

	
	
	$('.update-character').html(
		`
		

		<form  id="updateCharacter" class="col-6 newCharacter" name="update-character" method="put" action="/characterSheets/"ID>
				Character Name<br><input class="" type="text" name="name" label="name" value="${decodeJSON.name}" id="name" ><br>
				Class<br><input class="" type="text" name="class" label="class" value="${decodeJSON.class}" id="class" ><br>
				Race<br><input class="" type="text" name="race" label="race"  value="${decodeJSON.race}" id="race" ><br>
				Level<br><input class="" type="number" name="level" label="level"  value="${decodeJSON.level}" id="level" ><br>
				Background<br><input class="" type="string" name="background" label="background" value="${decodeJSON.background}" id="background" ><br>
				Alignment<br><input class="" type="string" name="alignment" label="alignment" value="${decodeJSON.alignment}" id="alignment" ><br>
				Experience Points<br><input class="" type="number" name="experiencePoints" label="experiencePoints" value="${decodeJSON.experiencePoints}" id="experiencePoints" ><br>
				Hit Points<br><input class="" type="number" name="hitPoints" label="hitPoints" value="${decodeJSON.hitPoints}" id="hitPoints" ><br>
				Strength<br><input class="" type="number" name="strength" label="strength" value="${decodeJSON.strength}" id="strength" ><br> 
				Dexterity<br><input class="" type="number" name="dexterity" label="dexterity" value="${decodeJSON.dexterity}" id="dexterity" ><br>
				Constitution<br><input class="" type="number" name="constitution" label="constitution" value="${decodeJSON.constitution}" id="constitution" ><br>
				Intelligence<br><input class="" type="number" name="intelligence" label="intelligence" value="${decodeJSON.intelligence}" id="intelligence" ><br>
				Wisdom<br><input class="" type="number" name="wisdom" label="wisdom" value="${decodeJSON.wisdom}" id="wisdom" ><br>
				Charisma<br><input class="" type="number" name="charisma" label="charisma" value="${decodeJSON.charisma}" id="charisma" ><br>
				Inventory<br><input class="" type="string" name="inventory" label="inventory" value="${decodeJSON.inventory}"  id="inventory" ><br>
				Gold<br><input class="" type="number" name="gold" label="gold" value="${decodeJSON.gold}"  id="gold" ><br>

					
			</form>
			`)
}

function watchUpdateCharacterSubmit(){
	$('#update-characters-button').on('click', function(){
		event.preventDefault();
		let selectedCharId = localStorage.getItem('clickedCharacterId');


let updatableFields={};
['class', 'level', 'strength', 'name','race', 'dexterity', 'intelligence', 'wisdom', 'charisma', 'constitution', 'hitPoints', 'experiencePoints', 'inventory', 'gold', 'background', 'alignment'].forEach(function(item) {
  updatableFields[item]= $('#'+ item).val(); 
 })
		
        $.ajax({
                    url: `http://localhost:8080/characterSheets/${selectedCharId}`,
                    type: 'PUT',   
                    data: updatableFields
  
                       
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