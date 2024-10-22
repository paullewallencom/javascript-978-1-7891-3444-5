function requireWithPromise(modules) {
	return new Promise(function(resolve, reject) {
		try {
		  require(modules, resolve);
		}
		catch(e) {
		  reject(new Error(e.message));
		}
	});
}

requireWithPromise(["geoModule"])
	.then(function(geoModule) {
		console.log(geoModule.calculateCircumference(5));
	})
	.catch(function(error) { console.log(error.message); });
	