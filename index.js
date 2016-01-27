exports.gte = function(v1, v2) {
	v1 = parseFloat(v1.replace("v", ""));
	v2 = parseFloat(v2.replace("v", ""));

	return v1 >= v2;
};
