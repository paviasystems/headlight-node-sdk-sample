var _Orator = require(__dirname+'/_node_modules_working/headlight-node-sdk/server/Headlight-NodeSDK.js').new(
	{
		Product:'Headlight-SDK-App-SAMPLE',
		// The folder to serve static web files from for this app.  By default, use the Stage folder.
		StaticContentFolder: __dirname+'/stage/',
		ConfigFile: __dirname+"/Headlight-Node-SDK-Sample-App-Config.json"
	}).orator();

_Orator.startWebServer();
