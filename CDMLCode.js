/**
 * 
 */

function createCDMLCode(id, name){
	var CDMLCode = Object.create(new CDMLElement(id, name, CODE_TAG, null, null));
	CDMLCode.code = new Array();  //String array containing the intended implementation. It is not a CDMLCode.
	
	CDMLCode.generateCDML = function (indent){
		var cdml = new Array();
		
		var line = indent + '<' + this.tag;
		if (this.id != null) line += ' ' + 'id="' + this.id + '"';
		if (this.name != null) line += ' ' + 'name="' + this.name + '"'; 
		line += '>' + EOL;
		
		cdml.push(line);
		
		for (var i = 0; i < this.code.length; i++){
			line = indent + String.fromCharCode(9) + this.code[i] + EOL;
			cdml.push(line);
		}
		
		line = indent + '</' + this.tag + '>' + EOL;
		cdml.push(line);
		
		return cdml;
	};
	
	CDMLCode.generateCDMLJS = function (){
		var cdml = new Array();
		var indent = String.fromCharCode(9);
		
		var line = '//<' + this.getOpeningTag + EOL;
		
		cdml.push(line);
		
		for (var i = 0; i < this.code.length; i++){
			line = indent + String.fromCharCode(9) + this.code[i] + EOL;
			cdml.push(line);
		}
		
		line = '//' + this.getEndingTag() + EOL;
		cdml.push(line);
		
		return cdml;
	};
}