// Sample Headlight-App script below
/* global pict */
/* global $ */
"use strict";

// Script wire-up through pict-feature here!
pict.features.SampleApp = {};

// Initialize the Headlight App
pict.features.SampleApp.initialize = function(pPict)
{
	console.log('Test app initializing!');
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