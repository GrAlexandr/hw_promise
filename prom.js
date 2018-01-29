function perform(...arg) {
	let args = arg;
	let prom = new Promise((resolve, reject) => {
		resolve(args[1](args[0]));
	});
	return prom;
}
perform(null, function(value) {
	var param = 1;
	console.log(param);
	return param;
}).then(function(param) {
	console.log(++param);
	return param;
}).then(function(param) {
	console.log(++param);
	return param;
}).then(function(param) {
	console.log(++param);
	return param;
}).then(function(param) {
	console.log(++param);
	return param;
});