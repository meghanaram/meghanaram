//Writing some config file to run protractor

exports.config = {
	framework: 'jasmine',
	seleniumAddress:'http://localhost:4444/wd/hub',
	specs: ['./Customer login/*.spec.js'],	
}
