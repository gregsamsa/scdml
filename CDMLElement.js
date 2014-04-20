/**
 * 
 */

function CDMLElement(id, name, tag, generateCDML, generateCDMLJS){
	this.id = id;
	this.name = name;
	this.tag = tag;
	
	this.generateCDML = generateCDML;
	this.generateCDMLJS = generateCDMLJS;
	
	this.getOpeningTag = function(){
		var openingTag = '<' + this.tag ;
		if (this.id != null) openingTag += ' id="' + this.id + '"';
		if (this.name != null) openingTag += ' name="' + this.name + '"';
		openingTag += '>';
		
		return openingTag;
	};
	
	this.getSelfClosingTag = function(){
		var openingTag = '<' + this.tag ;
		if (this.id != null) openingTag += ' id="' + this.id + '"';
		if (this.name != null) openingTag += ' name="' + this.name + '"';
		openingTag += ' />';
		
		return openingTag;
	};
	
	this.getClosingTag = function(){
		return '</' + this.tag + '>';
	};
}