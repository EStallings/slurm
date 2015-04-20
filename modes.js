var applyMask = function(color, mask) {
	return set_a_channel(color, (get_a_channel(color) * mask)/255);
}

//A goes on top, B on bottom
var defaultMode = function(top, bot) {
	var a1 = get_a_channel(top);
	var a2 = get_a_channel(bot);
	var topcent = a1/255;
	var botcent = (1-topcent) * (a2/255);

	// console.log(n2c(top));
	// console.log(n2c(bot));
	// console.log(a1);
	// console.log(a2);
	// console.log(topcent);
	// console.log(botcent);

	var r = Math.floor(get_r_channel(top) * topcent + get_r_channel(bot) * botcent);
	var g = Math.floor(get_g_channel(top) * topcent + get_g_channel(bot) * botcent);
	var b = Math.floor(get_b_channel(top) * topcent + get_b_channel(bot) * botcent);

	var combinedAlpha = Math.min(a1 + a2, 255);
	var c = c2n(r, g, b, combinedAlpha);
	console.log(n2c(c));
	return c;
}