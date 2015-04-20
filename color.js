var n2c = function(n) {
	var r = n >> 24 & 0xFF;
	var g = n >> 16 & 0xFF;
	var b = n >> 8  & 0xFF;
	var a = n       & 0xFF;
	return "rgba("+r+","+g+","+b+","+(a/255)+")";
}

var c2n = function(r,g,b,a) {
	r = r & 0xFF;
	g = g & 0xFF;
	b = b & 0xFF;
	a = a & 0xFF;
	return (r << 24) + (g << 16) + (b << 8) + a;
}

var get_r_channel = function(n) { return n >> 24 & 0xFF; }
var get_g_channel = function(n) { return n >> 16 & 0xFF; }
var get_b_channel = function(n) { return n >> 8  & 0xFF; }
var get_a_channel = function(n) { return n       & 0xFF; }

var set_r_channel = function(n, r) { return (n & (~(0xFF << 24))) | (r & 0xFF) << 24; }
var set_g_channel = function(n, g) { return (n & (~(0xFF << 16))) | (g & 0xFF) << 16; }
var set_b_channel = function(n, b) { return (n & (~(0xFF <<  8))) | (b & 0xFF) << 8; }
var set_a_channel = function(n, a) { return (n & (~(0xFF)))       | (a & 0xFF); }	

var COLORS = {
	black:c2n(000,000,000,255),
	white:c2n(255,255,255,255),
	red:  c2n(255,000,000,255),
	green:c2n(000,255,000,255),
	blue: c2n(000,000,255,255),
	alpha:c2n(000,000,000,000)
}
