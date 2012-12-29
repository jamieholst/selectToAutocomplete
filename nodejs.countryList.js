
var allLocales = {};
allLocales.us_en = require("./locales/us-en.js");

exports.countryList = function(selectedElementName,locale){
	
	if( typeof locale !== "string" )
		locale = "us-en";
	var obj = require("./locales/"+locale+".js");
	var json = obj.value;
	
	var html = "";
	
	// Provide a "Select Country" leader element, but only if there is no pre-selected item. 
	// This is to prevent users who have previously selected a country from setting an empty country.
	if( !selectedElementName || selectedElementName.length < 1)
		html = '<option value="" selected="selected">Select Country</option>\n';

	json.forEach(function(element, index, array){
		
		var str =  '<option value="' + element.name+'"';
		if( element.name == selectedElementName )
			str += " selected ";
		
		var helper=function(field){
			if( typeof element[field] != "string" ) return("");
			if( element[field].length == 0 ) return("");
			return(" "+field+'="'+element[field]+'" ');
		}

		str += helper("data-alternative-spellings");
		str += helper("data-relevancy-booster");
			
		str += ">"+element.name+"</option>\n";
		
		html += str;
	})

	return(html);

}