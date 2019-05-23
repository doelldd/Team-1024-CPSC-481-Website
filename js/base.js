/**
 * Team 1024 JS
 */

var UI = {
	scrollToSection: function( element, event ) {
		if( event !== undefined ) { event.preventDefault(); }
		var section = $( element ).attr( 'href' );
		// Scroll to the top of the specified section
		$( 'html, body' ).animate( {
			scrollTop: $( section ).offset().top
			}, 600
		);
	}
};

$(function() {
	$( 'body' ).on( 'click', '[href^="#"]', function( event ) {
		UI.scrollToSection( this, event );
		var parent = $("#nav-primary");
		parent.find("[href^='#']").removeClass("active");
		$(this).addClass("active");
	});
});
