$(document).ready(function() {

	// Mobile View Navigation Bar Animation
	$(".navbar-menu").on('click', function() {
		$(".shadow").toggleClass('shadow-show');
		$("#navbar-mobile-only").toggle('slide', {direction: "right"}, 400);
	});
	$("#navbar-mobile-only img").on('click', function() {
		$("#navbar-mobile-only").toggle('slide', {direction: "right"}, 400);
		$(".shadow").toggleClass('shadow-show');
	});
	$(".shadow").on('click', function() {
		$(".shadow").toggleClass('shadow-show');
		$("#navbar-mobile-only").toggle('slide', {direction: "right"}, 400);
	});

	// Smart Assistance Animation
	$("#smart-assistance-header").on('click', function() {
		$("#smart-assistance-menu").toggle('slide', {direction: "right"}, 400);
		$(".invisible-container").toggleClass('invisible-click');
	});
	$(".invisible-container").on('click', function() {
		$(".invisible-container").toggleClass('invisible-click');
		$("#smart-assistance-menu").toggle('slide', {direction: "right"}, 400);
	});

	// QR Code Enlarge
	$(".small-qr").on('click', function() {
		$(".big-qr").toggle('slide', {direction: "up"}, 400);
	});
	$(".big-qr").on('click', function() {
		$(".big-qr").toggle('slide', {direction: "down"}, 400);
	});

});
