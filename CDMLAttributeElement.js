/**
 * 
 */

function createCDMLAttributeElement(id, name, type){
	var CDMLAttributeElement = Object.create(new CDLMElement(id, name, ATTRIBUTE_TAG, null, null));
	
	CDMLAttributeElement.type = type;
	
	CDMLAttributeElement.setup = null;
	
	CDMLAttributeElement.getOpeningTag = function(){
		var openingTag = '<' + this.tag ;
		if (this.id != null) openingTag += ' id="' + this.id + '"';
		if (this.name != null) openingTag += ' name="' + this.name + '"';
		if (this.type != null) openingTag += ' type="' + this.type + '"';
		openingTag += '>';
		
		return openingTag;
	};
	
	CDMLAttributeElement.generateCDMLJS = function(){
		var cdml = new Array();
		
		var line = '//' + this.getOpeningTag() + EOF;
		cdml.push(line);
		
		cdml.concat(this.setup.generateCDMLJS());
		
		line = '//' + this.getClosingTag() + EOF;
		cdml.push(line);
		
		return cdml;
	};
}