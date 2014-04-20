/**
 * 
 */

function createCDMLMemberElement(id, name, type, role){
	var CDMLMemberElement = Object.create(new CDMLElement(id, name, MEMBER_TAG, null, null));
	
	CDMLMemberElement.type = type;
	CDMLMemberElement.role = role;
	
	CDMLMemberElement.getSelfClosingTag = function(){
		var openingTag = '<' + MEMBER_TAG;
		
		if (this.id != null) openingTag += ' id="' + this.id + '"';
		if (this.name != null) openingTag += ' name="' + this.name + '"';
		if (this.type != null) openingTag += ' type="' + this.type + '"';
		if (this.role != null) openingTag += ' role="' + this.role + '"';
		openingTag += ' />';
		
		return openingTag;
	};
	
	CDMLMemberElement.generateCDMLJS = function(){
		var cdml = new Array();
		var line = '//' + this.getSelfClosingTag() + EOL;
		
		cdml.push(line);
		
		return cdml;
	};
}