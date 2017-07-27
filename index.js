const fs = require('fs')

module.exports = function(filename) {
	if (filename) {
		filename = ifexists(filename);
	} else if (process.env.NODE_CONFIG) {
		filename = ifexists(process.env.NODE_CONFIG);
	} else {
		filename = ifexists('config/'+(process.env.NODE_ENV || 'production')+'.json');
	}
	return require(filename);
}

function ifexists(filename) {
	try {
		return fs.realpathSync(filename);
	} catch(e) {
		if (e.code == 'ENOENT') {
			e.message = "Config file not found: ("+filename+") "
				+"Check your specified file path,"
				+"or try setting the NODE_CONFIG environment variable to your config file path";
			throw e;
		}
		throw e;
	}
}


