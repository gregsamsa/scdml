/**
 * 
 */

function CDMLCollection(){
	this.size = 0;
	this.elements = new Array();
	
	this.insertElement = function (element){
		this.elements.push(element);
		this.size = this.elements.length;
	};
	
	this.getElementById = function (id){
		var el = null;

		for (var i = 0; i < this.elements.length && el == null; i++)
			if (this.elements[i].id == id) el = this.elements[i];
		
		return el;
	};
	
	this.removeElement = function (element){
		this.elements.splice(this.elements.indexOf(element),1);
		this.size = this.elements.length;
	};
}