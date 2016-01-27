var Semver = {
	gte: function(v1, v2) {
		v1 = parseFloat(v1);
		v2 = parseFloat(v2);

		return v1 >= v2;
	}
}

exports.semver = Semver;