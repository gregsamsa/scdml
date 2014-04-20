/**
 * 
 */

function createCDMLSetupElement(id, name){
	var CDMLSetupElement = Object.create(new CDMLCode(id, name));
	
	CDMLSetupElement.tag = SETUP_TAG;
	
	CDMLSetupElement.generateCDMLJS = function(){
		var cdml = new Array();
		
		var line = '//' + this.getOpeningTag() + EOF;
		
		cdml.push(line);
		
		cdml.concat(this.code);
		
		line = '//' + this.getClosingTag() + EOF;
		cdml.push(line);
		
		return cdml;
	};
}