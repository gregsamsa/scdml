/**
 * 
 */

function createCDMLClassElement(id, name, src){
	var CDMLClassElement = Object.create(new CDMLElement(id, name, CLASS_TAG, null, null));
	
	CDMLClassElement.src = src;
	
	CDMLClassElement.attributes = new CDMLCollection();
	CDMLClassElement.methods = new CDMLCollection();
	CDMLClassElement.events = new CDMLCollection();
	
	CDMLClassElement.generateCDML = function(indent){
		var cdml = new Array();
		
		var line = indent + '<' + this.getOpeningTag() + EOL;
		
		cdml.push(line);
		
		for (var i = 0; i < this.attributes.elements.length; i++){
			cdml.concat(this.attributes.elements[i].generateCDML(indent + String.fromCharCode(9)));
		}
		
		for (var i = 0; i < this.methods.elements.length; i++){
			cdml.concat(this.methods.elements[i].generateCDML(indent + String.fromCharCode(9)));
		}
		
		for (var i = 0; i < this.events.elements.length; i++){
			cdml.concat(this.events.elements[i].generateCDML(indent + String.fromCharCode(9)));
		}
		
		line = indent +this.getClosingTag() + EOL;
		cdml.push(line);
		
		return cdml;
	};
	
	CDMLClassElement.generateCDMLSJ = function(){
		var cdml = new Array();
		
		var line = '//' + this.getOpeningTag() + EOL;
		
		cdml.push(line);
		
		for (var i = 0; i < this.attributes.elements.length; i++){
			cdml.concat(this.attributes.elements[i].generateCDMLJS());
		}
		
		for (var i = 0; i < this.methods.elements.length; i++){
			cdml.concat(this.methods.elements[i].generateCDMLJS());
		}
		
		for (var i = 0; i < this.events.elements.length; i++){
			cdml.concat(this.events.elements[i].generateCDMLJS());
		}
		
		line = '//' + this.getClosingTag() + EOL;
		cdml.push(line);
		
		return cdml;
	};
}