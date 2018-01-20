
function watchNewCharButtonClick(){
	console.log( 'watchNewCharButtonClick ran');
	$('#new-character-button').on('click', function(event){
		event.preventDefault();
		console.log('button clicked')
		const settings={
			url: "../server.js",
			type: 'GET',
		};
		$.ajax(settings);
	})
}

watchNewCharButtonClick();