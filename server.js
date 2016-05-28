var _Orator = require('headlight-node-sdk').new(
	{
		Product:'Headlight-SDK-App-SAMPLE',
		// The folder to serve static web files from for this app.  By default, use the Stage folder.
		StaticContentFolder: __dirname+'/stage/',
		ConfigFile: __dirname+"/Headlight-Node-SDK-Sample-App-Config.json"
	}).orator();

_Orator.startWebServer();
