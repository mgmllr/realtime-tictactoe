$(function() {
	var socket = io.connect('http://localhost');
	socket.on('news', function (data) {
		console.log(data);
		socket.emit('my other event', { my: 'data' });
	});

	$('.position').click(function() {
		var position = $(this).attr('id');
		var background = $(this).css('background-color');
		if(background === 'rgb(255, 0, 0)') {
			console.log('Someone already played this position');
		}
		else {
			$(this).css('background-color', 'red');
			console.log('I just clicked');
			socket.emit('playerX', {position: position });
		}
	});
});

