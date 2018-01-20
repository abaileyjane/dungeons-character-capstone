
function watchNewCharButtonClick(){
	console.log( 'watchNewCharButtonClick ran');
	$('#new-character-button').on('click', function(event){
		event.preventDefault();
		console.log('new char button clicked')
		$.get('http://localhost:8080/create-character')
	})
}

function watchViewCharactersButtonClick(){
	console.log( 'watchNewCharButtonClick ran');
	$('#view-characters-button').on('click', function(event){
		event.preventDefault();
		console.log('view chars button clicked')
		$.get('http://localhost:8080/view-characters')
	})
}

function watchCreateCharSubmitClick(){
	console.log( 'watchNewCharButtonClick ran');
	$('#create-character-button').on('click', function(event){
		event.preventDefault();
		console.log('create chars button clicked')
		$.get('http://localhost:8080/character-sheet')
	})
}

watchNewCharButtonClick();
watchViewCharactersButtonClick();
watchCreateCharSubmitClick();