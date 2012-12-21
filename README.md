#Select To Autocomplete: Redesigned Country Selector

An improved way to select a country in web forms.

* Design improves upon a standard country dropdown list.
* Accepts keyboard typing input.
* Autocomplete from a list of synonyms.
* Handles typos.
* Prioritizes autocomplete results.

The solution is a redesigned country selector that addresses the issues of drop-down country selectors. It handles typos, various spelling sequences, synonyms and prioritized options.
The technically correct term for this would be something like an “auto-complete text field with loose partial matching, synonyms and weighted results.” That’s a bit long, so I’ve simply dubbed it the “Redesigned Country Selector”.

- Read the article Redesigning The Country Selector by Christian Holst from Smashing Magazine
http://uxdesign.smashingmagazine.com/2011/11/10/redesigning-the-country-selector/

- Try the demo
http://baymard.com/labs/country-selector

##Usage

You can use this package on the client side, as a jQuery plugin, or on the server side, as a Node.js package.

On the client side it modifies the default select widget. On the server side it generates HTML for the complete exhaustive country list compatible with the requirements of the client, including specialized attributes. 

In addition to this package you'll need jQuery, a jquery autocomplete plugin, and CSS to style the HTML for the country selector. See sample.html to get started. You might also find test.nodjs.countryList.js a helpful example.

To use on the server side do 'npm install nodejs.countrylist.js'. Then in your node module:

````
var lib = require("./nodejs.countryList.js");
var defaultCountry = 'Vanuatu';
var cl = lib.countryList(defaultCountry);
// insert the HTML you have generated into your template
res.render('template.html', { placeholderInHTML: cl } ); 
````


