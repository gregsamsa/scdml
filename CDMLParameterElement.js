/**
 * 
 */

function createCDMLParameterElement(id, name, type){
	var CDMLParameterElement = Object.create(new CDMLElement(id, name, PARAMETER_TAG, null, null));
	
	CDMLParameterElement.type = type;
	
	CDMLParameterElement.getSelfClosingTag = function(){
		var openingTag = '<' + this.tag ;
		if (this.id != null) openingTag += ' id="' + this.id + '"';
		if (this.name != null) openingTag += ' name="' + this.name + '"';
		if (this.type != null) openingTag += ' type="' + this.type + '"';
		openingTag += ' />';
		
		return openingTag;
	};
	
	CDMLParameterElement.generateCDMLJS = function(){
		var cdml = new Array();
		
		var line = '//' + this.getSelfClosingTag() + EOF;
		
		cdml.push(line);
		
		return cdml;
	};
}