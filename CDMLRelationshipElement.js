/**
 * 
 */

function createCDMLRelationshipElement(id, name){
	var CDMLRelElement = Object.create(new CDMLElement(id, name, RELATIONSHIP_TAG, null, null));
	
	CDMLRelElement.member1 = null;
	CDMLRelElement.member2 = null;
	
	CDMLRelElement.generateCDMLJS = function(){
		var cdml = new Array();
		var line = '//' + this.getOpeningTag() + EOL;
		
		cdml.push(line);
		
		cdml.concat(this.member1.generateCDMLSJ());
		cdml.concat(this.member2.generateCDMLSJ());
		
		line = '//' + this.getClosingTag() + EOL;
		cdml.push(line);
		
		return cdml;
	};
}