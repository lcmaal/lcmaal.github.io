$(document).ready(function() {
	$('img.collection').mouseenter(function() {
		$('this').fadeTo('fast', 1);
	});
	$('img.collection').mouseleave(function() {
		$('this').fadeTo('fast', 0.5);
	});
});
