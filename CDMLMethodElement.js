/**
 * 
 */

function createCDMLMethodElement(id, name){
	var CDMLMethodElement = Object.create(new CDMLElement(id, name, METHOD_TAG, null, null));
	
	CDMLMethodElement.parameters = new CDMLCollection();
	CDMLMethodElement.implemetation = null;
	
	CDMLMethodElement.generateCDMLJS = function(){
		var cdml = new Array();
		var line = '//' + this.getOpeningTag() + EOL;
		
		cdml.push(line);
		
		for (var i = 0; i < CDMLMethodElement.parameters.length; i++){
			cdml.concat(CDMLMethodElement.parameters[i].generateCDMLJS());
		}
		
		cdml.concat(this.implementation.generateCDMLJS());
		
		line = '//' + this.getClosingTag();
		
		cdml.push(line);
		
		return cdml;
	};
}