// @codekit-prepend "/bower_components/imagesloaded/imagesloaded.pkgd.min.js";
// @codekit-prepend "/bower_components/masonry-layout/dist/masonry.pkgd.min.js";
// @codekit-prepend "/bower_components/magnific-popup/dist/jquery.magnific-popup.min.js";

$(document).foundation();

// init Magnific Popup for gallery
$('.tileBase').magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled:true
	},
	disableOn: function() { // disable Popup when less than 700px wide, and change to regular link
		if( $(window).width() < 700 ) {
			return false;
		}
		return true;
	}
});

// init Masonry Gallery after all images loaded
$('#masonryGrid').imagesLoaded( function() {
	$('#masonryGrid').masonry({
		itemSelector: '#masonryGrid .tile'
	});
});

