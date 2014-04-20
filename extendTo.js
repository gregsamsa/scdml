/**
 * 
 */

function extendToCDMLElement(obj, id, name, generateCDML){
	obj.id = id;
	obj.name = name;
	
	obj.generateCDML = generateCDML;
}

function extendToCDMLCode(obj, lines){
	if (lines == null)
		obj.lines = new Array();
	else
		obj.lines = lines;
	
	this.appendLine = function (line){
		this.lines.push(line);
	};
}

function createCDMLElementInterface(obj, id, name){
	obj.id = id;
	obj.name = name;
	
	obj.generateCDML = null;
}

function createCDMLCodeInterface(obj, lines){
	if (lines == null)
		obj.lines = new Array();
	else
		obj.lines = lines;
	
	this.appendLine = function (line){
		this.lines.push(line);
	};
}