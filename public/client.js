//I am using absolute path to make sure we get the correct url
//path is only available on the server side (node), so I added script tags to handle it
//This is not ideal. Ideally use 'browserify' http://browserify.org/#install
/// it will make node package available on the browser
// const __dirname = path.resolve();
// const createCharacterUrl = path.join(__dirname + "public/create-character.html");
// const viewCharacterUrl = path.join(__dirname + "public/view-character-list.html");
const viewCharactersUrl = "/public/view-character-list.html"
const createCharacterUrl ="/public/create-character.html"
const singleCharacterUrl= "/public/character-sheet.html"

//Your ajax requests cannot come from localhost but from heroku if that's where you deployed it
//functions for homepage

//functions to navigate to character creation page
function watchNewCharButtonClick(){
	$('#new-character-button').on('click', function(event){
		event.preventDefault();
		window.location.href = createCharacterUrl ;
		
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
                    url: 'https://safe-savannah-74595.herokuapp.com/characterSheets',
                    type: 'POST', 
                    data: createdFields
                })
          .then(function () {
                window.location.href = viewCharactersUrl }))
})}



//functions to navigate to view characters page
function goToViewCharacters(){
  window.location.href = viewCharactersUrl; 

}

function loadViewCharacters(){
	$(window).on("load", function(){
		getCharacterData(displayCharacterNames);
		}
	)
}

function getCharacterData(callback){
	$.getJSON('https://safe-savannah-74595.herokuapp.com/characterSheets', callback);
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
    window.location.href = viewCharactersUrl;
	})
}


//functions to navigate to view character sheet page
let clickedCharacterId = "";
let clickedCharacterInformation=[];

function setClickedCharId(){
	    clickedCharacterId=`${event.target.id}`;
	    try { localStorage.setItem("clickedCharacterId", clickedCharacterId) } 
		catch(e) { console.log("error",e) }
		window.location.href = singleCharacterUrl;

}
function goToViewCharacterSheet(){
	window.location.href = singleCharacterUrl;

}
function watchViewSingleCharacter(){
    		$('.character-name').click(function(event){
    			setClickedCharId()
    			
    		})
    		
}


function setUpdateFields(callback){
	$.getJSON(`https://safe-savannah-74595.herokuapp.com/characterSheets/${clickedCharacterId}`, callback);

}


function loadUpdateCharacter(){
	$(window).on("load", function(){
		getClickedCharacterInfo(populateUpdateCharacterFields);

		}
	)
}

function getClickedCharacterInfo(callback){
	let selectedCharId = localStorage.getItem('clickedCharacterId');
	if(selectedCharId){
	$.getJSON(`https://safe-savannah-74595.herokuapp.com/characterSheets/${selectedCharId}`, callback);
}}


function populateUpdateCharacterFields(result){
	const decodeJSON=result || {};
	$('.selected-character-name').html(
		`<h1>${decodeJSON.name}</h1>`)

	
	
	$('.update-character').html(
		`
		<div class="col-3"><p></p></div>
		<form  id="updateCharacterPart1" class="col-3 newCharacter partOne" name="update-character">
				Character Name<br><input class="" type="text" name="name" label="name" value="${decodeJSON.name}" id="name" ><br><br>
				Class<br><input class="" type="text" name="class" label="class" value="${decodeJSON.class}" id="class" ><br><br>
				Race<br><input class="" type="text" name="race" label="race"  value="${decodeJSON.race}" id="race" ><br><br>
				Level<br><input class="" type="number" name="level" label="level"  value="${decodeJSON.level}" id="level" ><br><br>
				Background<br><input class="" type="string" name="background" label="background" value="${decodeJSON.background}" id="background" ><br><br>
				Alignment<br><input class="" type="string" name="alignment" label="alignment" value="${decodeJSON.alignment}" id="alignment" ><br><br>
				Experience Points<br><input class="" type="number" name="experiencePoints" label="experiencePoints" value="${decodeJSON.experiencePoints}" id="experiencePoints" ><br><br>
				Hit Points<br><input class="" type="number" name="hitPoints" label="hitPoints" value="${decodeJSON.hitPoints}" id="hitPoints" ><br><br>
		</form>
		<form  id="updateCharacterPart2" class="col-3 newCharacter partTwo" name="update-character">
				Strength<br><input class="" type="number" name="strength" label="strength" value="${decodeJSON.strength}" id="strength" ><br> <br>
				Dexterity<br><input class="" type="number" name="dexterity" label="dexterity" value="${decodeJSON.dexterity}" id="dexterity" ><br><br>
				Constitution<br><input class="" type="number" name="constitution" label="constitution" value="${decodeJSON.constitution}" id="constitution" ><br><br>
				Intelligence<br><input class="" type="number" name="intelligence" label="intelligence" value="${decodeJSON.intelligence}" id="intelligence" ><br><br>
				Wisdom<br><input class="" type="number" name="wisdom" label="wisdom" value="${decodeJSON.wisdom}" id="wisdom" ><br><br>
				Charisma<br><input class="" type="number" name="charisma" label="charisma" value="${decodeJSON.charisma}" id="charisma" ><br><br>
				Inventory<br><input class="" type="string" name="inventory" label="inventory" value="${decodeJSON.inventory}"  id="inventory" ><br><br>
				Gold<br><input class="" type="number" name="gold" label="gold" value="${decodeJSON.gold}"  id="gold" ><br><br>

					
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
                    url: `https://safe-savannah-74595.herokuapp.com/characterSheets/${selectedCharId}`,
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
    		url: `https://safe-savannah-74595.herokuapp.com/characterSheets/${selectedCharId}`,
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
