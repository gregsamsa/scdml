/**
 * 
 */

function createCDMLImplementationElement(id, name){
	var CDMLImplementationElement = Object.create(new CDMLCode(id, name));
	
	CDMLImplementationElement.tag = SETUP_TAG;
	
	CDMLImplementationElement.generateCDMLJS = function(){
		var cdml = new Array();
		
		var line = '//' + this.getOpeningTag() + EOF;
		
		cdml.push(line);
		
		cdml.concat(this.code);
		
		line = '//' + this.getClosingTag() + EOF;
		cdml.push(line);
		
		return cdml;
	};
}