function loadApp() {

	var flipbook = $('.flipbook');

 	// Check if the CSS was already loaded
	
	if (flipbook.width()==0 || flipbook.height()==0) {
		setTimeout(loadApp, 10);
		return;
	}

	$('.flipbook .double').scissor();

	// Create the flipbook

	$('.flipbook').turn({
			 
			 
			 height:500,
			
			// Elevation

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			//autoCenter: true

	});
	
	$('.next-button').click(function() {	
		$('.flipbook').turn('next');
	});

	// Events for the next button
	
	$('.previous-button').click(function() {	
		$('.flipbook').turn('previous');
	});
	
}

// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['libs/slider/lib/turn.min.js'],
	nope: ['libs/slider/lib/turn.html4.min.js'],
	both: ['libs/slider/lib/scissor.min.js', 'libs/slider/css/double-page.css'],
	complete: loadApp
});