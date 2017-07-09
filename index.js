const fs = require('fs')

module.exports = function(filename) {
	filename = ifexists(filename || process.env.NODE_CONFIG);
	return require(filename);
}

function ifexists(filename) {
	return fs.realpathSync(filename);
}


