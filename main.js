var canvas = document.getElementById('canvas');
var gfx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var zoomLevelX = 4; //ratio of canvas space allocated per tile of the batch
var zoomLevelY = 4; //Should probably stay a power of 2, for now.

var batch = [];

var adjustCanvas = function(x, y, width, height) {
	canvas.style.left = x;
	canvas.style.top = y;
	canvas.style.width = width;
	canvas.style.height = height;
}

var drawBatch = function()
{
	gfx.clearRect(0, 0, width, height);
	for(var i in batch) {
		if(i < 0) continue;
		if(i > width) return; //all subsequent stuff will be out of range
		for(var j in batch[i]) {
			if(j < 0) continue;
			if(j > height) continue;

			var n = batch[i][j];
			gfx.fillStyle = n2c(n);
			gfx.fillRect(i*zoomLevelX,j*zoomLevelY,zoomLevelX,zoomLevelY);
		}
	}
}

function Workspace(name) {
	this.name = name;
	this.tabs = [];
}

function Tab(label) {
	this.label = label;
	this.images = [];
}

function Image(name, width, height) {
	this.name = name;
	this.layers = [];
	this.selection = null;
	this.creation_mode = null;
	this.width = width;
	this.height = height;
}

app = {};
function slurm_setup()
{	
	app.workspaces = [];
	var workspace = new Workspace("Workspace 1");
	app.workspaces.push(workspace);
	var tab = new Tab("Tab 1");
	workspace.tabs.push(tab);

	app.toolbar = new Toolbar();
}
slurm_setup();