
var allLocales = {};

exports.countryList = function(selectedElementName,locale){
	
	if( typeof locale !== "string" )
		locale = "en-US";

	/* A note on error checking for this require(): if the locale really exists, it will be found. 
	   If it's not found an exception will be thrown by node:
	   Error: Cannot find module './country-list/country/icu/BOGUS-LOCALE/country.json'
       So I don't check for error return.	
	*/
		
	var raw = require("./country-list/country/icu/"+locale.replace('-','_')+"/country.json");
	var json = [];
	for (var key in raw) {
		/* In this loop we convert from the internal data format needed by 
		   the country-list package to the internal data format needed by 
		   the select-to-autocomplete package 
		*/
	    if (key === 'length' || !raw.hasOwnProperty(key)) continue;
	    var value = raw[key];
		json.push({name:value,"data-alternative-spellings":key});
	}
	
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