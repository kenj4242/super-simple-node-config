const expect = require('chai').expect;
const conf = require("../index.js");

describe('Basic', function() {

	it('should return the config specified at runtime', function () {
		var a = conf('./test/conf2.json');
		expect(a).to.have.property('testvalue');
		expect(a.testvalue).to.equal('TEST VALUE 1');
  });

	it('should return the config specified by env.NODE_CONFIG', function () {
		var a = conf();
		expect(a).to.have.property('testvalue');
		expect(a.testvalue).to.equal('TEST VALUE');
  });

	it('should return the config derived from env.NODE_ENV', function () {
		delete process.env.NODE_CONFIG;
		var a = conf();
		expect(a).to.have.property('testvalue');
		expect(a.testvalue).to.equal('testing TEST VALUE');
  });

	it('should return the default production config', function () {
		delete process.env.NODE_ENV;
		var a = conf();
		expect(a).to.have.property('testvalue');
		expect(a.testvalue).to.equal('production TEST VALUE');
  });

	it('should fail if we give it a bad path', function () {
		try {
			var a = conf('./test/noconfigfile');
		} catch(e) {
			expect(e).to.be.an('error');
			expect(e.code).to.equal('ENOENT');
			return;
		}

		expect.fail('to throw an error', '');
  });
});


