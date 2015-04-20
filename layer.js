
function Layer(){
	this.canvas = [];
	this.mask = null; //can be a Layer
	this.offsetx = 0;
	this.offsety = 0;
	this.rotation = 0;
	this.mode = defaultMode;
}
Layer.prototype.setPixel = function(x, y, color) {
	if(!this.canvas[x])
		this.canvas[x] = [];
	this.canvas[x][y] = color;
}
Layer.prototype.clone = function() {
	var c = new Layer();
	c.offsetx = this.offsetx;
	c.offsety = this.offsety;
	c.rotation = this.rotation;
	c.mode = this.mode;
	for(var i in this.canvas) {
		c.canvas[i] = [];
		for (var j in this.canvas[i]) {
			c.canvas[i][j] = this.canvas[i][j];
		}
	}
}
Layer.prototype.draw = function(batch) 
{
	var mask = this.mask;
	for(var x in this.canvas) {
		x = parseInt(x, 10);
		var X = x + this.offsetx;
		console.log(X);
		if(!batch[X]) batch[X] = [];
		for(var y in this.canvas[x]) {
			y = parseInt(y, 10);
			var Y = y + this.offsety;

			var c = this.canvas[x][y];
			var underColor = batch[X][Y] || COLORS.alpha;
			var maskVal = (mask && mask[x] && mask[x][y]) ? mask[x][y] : 0xFF;
			c = applyMask(c, maskVal);
			c = this.mode(c, underColor);
			batch[X][Y] = c;
		}	
	}
}