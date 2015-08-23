/**
 * Homer.JS
 * https://github.com/SysVoid/Homer.JS
 * Homer J. Simpson in your terminal!
 * 
 * Created by SysVoid
 * GitHub: https://github.com/SysVoid
 * Twitter: https://twitter.com/SysVoid
 */

var randomProperty = function (object) {
	var keys = Object.keys(object);
	return object[keys[keys.length * Math.random() << 0]];
};

(function () {
	
	var homers = {
		0: require('./homers/1'),
		1: require('./homers/2'),
		2: require('./homers/3')
	};
	
	console.log(randomProperty(homers));
	
})();
