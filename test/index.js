const expect = require('chai').expect;
const conf = require("../index.js");

describe('Basic', function() {

	it('should return the config specified by env.NODE_CONFIG', function () {
		var a = conf();
		expect(a).to.have.property('testvalue');
		expect(a.testvalue).to.equal('TEST VALUE');
  });

	it('should return the config specified at runtime', function () {
		var a = conf('./test/conf2.json');
		expect(a).to.have.property('testvalue');
		expect(a.testvalue).to.equal('TEST VALUE 1');
  });

});


