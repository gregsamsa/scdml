/**
 * 
 */

function createCDMLDiagramElement(id, name, src){
	var CDMLDiagramElement = Object.create(new CDMLElement(id, name, DIAGRAM_TAG, null, null));
	
	CDMLDiagramElement.src = src;
	
	CDMLDiagramElement.classes = new CDMLCollection();
	CDMLDiagramElement.datatypes = new CDMLCollection();
	CDMLDiagramElement.relationships = new CDMLCollection();
	
	CDMLDiagramElement.getOpeningTag = function() {
		var line = indent + '<' + this.tag;
		if (this.id != null) line += ' ' + 'id="' + this.id + '"';
		if (this.name != null) line += ' ' + 'name="' + this.name + '"';
		if (this.src != null) line += ' ' + 'src="' + this.src + '"';
		line += '>' + EOL;
		
		return line;
	};
	
	//CDMLDiagramElement.getClosingTag = function() {
	//	var line = '</' + this.tag + '>';
	//	
	//	return line;
	//};
	
	CDMLDiagramElement.generateCDML = function(indent) {
		var cdml = Array();
		
		var line = indent + this.getOpeningTag() + EOF;
		
		cdml.push(line);
		
		for (var i = 0; i < this.classes.elements.length; i++){
			cdml.concat(this.classes.elements[i].generateCDML(indent + String.fromCharCode(9)));
		}
		
		for (var i = 0; i < this.datatypes.elements.length; i++){
			cdml.concat(this.datatypes.elements[i].generateCDML(indent + String.fromCharCode(9)));
		}
		
		for (var i = 0; i < this.relationships.elements.length; i++){
			cdml.concat(this.relationships.elements[i].generateCDML(indent + String.fromCharCode(9)));
		}
		
		line = indent + this.getClosingTag() + EOF;
		cdml.push(line);
		
		return cdml;
	};
	
	CDMLDiagramElement.generateCDMLJS = function() {
		var cdml = Array();
		var indent = String.fromCharCode(9);
		
		var line = '//' + this.getOpeningTag();
		
		cdml.push(line);
		
		for (var i = 0; i < this.classes.elements.length; i++){
			cdml.push('//' + this.classes.elements[i].getOpeningTag() + EOL);
			cdml.push('//' + this.classes.elements[i].getClosingTag() + EOL);
			//cdml.concat(this.classes.elements[i].generateCDML(indent + String.fromCharCode(9)));
		}
		
		for (var i = 0; i < this.datatypes.elements.length; i++){
			cdml.concat(this.datatypes.elements[i].generateCDML(indent + String.fromCharCode(9)));
		}
		
		for (var i = 0; i < this.relationships.elements.length; i++){
			cdml.concat(this.relationships.elements[i].generateCDML(indent + String.fromCharCode(9)));
		}
		
		line = '//' + this.getClosingTag() + EOL;
		cdml.push(line);
		
		return cdml;
	};
}