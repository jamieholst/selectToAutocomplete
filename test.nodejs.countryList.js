
console.log("Testing nodejs.countryList.js");

var lib = require("./nodejs.countryList.js");
var cl = lib.countryList();

if( typeof cl != 'string' ){
	console.log("Fail: typeof cl != 'string'");
	process.exit(1);
}

if( ! cl.match(/(<option value="Pakistan" data-alternative-spellings="PK پاکستان"  data-relevancy-booster="2" >Pakistan<\/option>)/) ){
	console.log("Fail: test country not in list, or alternative spellings or relevancy booster not set.");
	process.exit(1);
}

if( ! cl.match(/<option value="" selected="selected">Select Country<\/option>/)){
	console.log("Fail: no default selection in list");
	process.exit(1);	
}

var cl = lib.countryList('Vanuatu');
if( ! cl.match(/<option value="Vanuatu" selected  data-alternative-spellings="VU" >Vanuatu<\/option>/)){
	console.log("Fail: setting default selection did not work");
	process.exit(1);	
}

process.exit(0);

