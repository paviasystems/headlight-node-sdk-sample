// Sample Headlight-App script below
/* global pict */
/* global $ */
"use strict";

// Script wire-up through pict-feature here!
pict.features.AppendorExample = {};

pict.features.AppendorExample.initialize = function(pSession)
{
	console.log('Test app initializing!');
};

// Initialize the Headlight App
pict.features.AppendorExample.load = function(pRecord, pProject, pSession)
{
	// Load the template
	$('#appContentContainer').html(pict.libs.underscore.template($('#AppendorExample_Main').text()));
	//if (pRecord.IDAppData === 0){}
	$('#demoAppForm').submit(
		function()
		{
			console.log('PROCESSING CALCULATOR...');

			var tmpLeft = $('#left_value').val();
			var tmpRight = $('#right_value').val();

			var tmpResult = tmpLeft+tmpRight;

			// Ridiculous
			$('#demoResult').html('['+tmpLeft+'] + ['+tmpRight+'] = ['+tmpResult+']');

			return false;
		});
};
