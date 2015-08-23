/**
 * Homer.JS
 * https://github.com/SysVoid/Homer.JS
 * Homer J. Simpson in your terminal!
 * 
 * Created by SysVoid
 * GitHub: https://github.com/SysVoid
 * Twitter: https://twitter.com/SysVoid
 */

function randomProperty(object) {
	var selected;
	var count = 0;
	for (var prop in object)
		if (Math.random() < 1 / ++count)
			selected = prop;
	return selected;
}

(function () {
	var homers = {
		0: require('./homers/1'),
		1: require('./homers/2'),
		2: require('./homers/3')
	};
	
	console.log(homers[randomProperty(homers)]);
	
})();
