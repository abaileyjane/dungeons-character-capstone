
var mockData = {
	"characterInfo": [

	{	
		"id": "11111"
		"name": "athela",
		"race": "elf",
		"class": "druid",
		"level": 4
	},
	{
		"id":"22222"
		"name": "shathua",
		"race": "orc",
		"class": "druid",
		"level": 3
	},
	{
		"id":"33333"
		"name": "zook",
		"race": "dwarf",
		"class": "ranger",
		"level": 4
	}
]}

function getCharacterInfo(callbackFn){
	setTimeout(function(){callbackFn(mockData)}, 100);
}

function displayCharacterInfo(id){
	
	}
}

function getAndDisplayCharacterInfo(){
	getCharacterInfo(displayCharacterInfo);
}

getAndDisplayCharacterInfo();


