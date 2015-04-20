function Toolbar() {
	var that = this;
	this.tools = [];
	this.element = document.createElement('div');
	this.element.className = 'slurm_toolbar';
	this.element.setAttribute("collapsed", "false");
	this.element.setAttribute("onLeft", "true");
	
	this.collapseButton = document.createElement('div');
	this.collapseButton.className = 'slurm_toolbar_collapseButton';
	
	this.collapseCharm = document.createElement('div');
	this.collapseCharm.className = 'slurm_arrowCharm';
	this.collapseCharm.setAttribute("dir", "left");

	this.toolbarContentsElement = document.createElement('div');
	this.toolbarContentsElement.className = 'slurm_toolbar_contentsElement';
	
	document.body.appendChild(this.element);
	this.element.appendChild(this.toolbarContentsElement);
	this.element.appendChild(this.collapseButton);
	this.collapseButton.appendChild(this.collapseCharm);

	this.collapseButton.onclick = function(){ 
		that.element.setAttribute("collapsed", (that.element.getAttribute("collapsed") == "true") ? "false" : "true"); 
		that.collapseCharm.setAttribute("dir", (that.collapseCharm.getAttribute("dir") == "left") ? "right" : "left");
	}
}