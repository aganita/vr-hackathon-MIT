//chat-client
	$('#chat-form').submit(function () {
		if ($('#m').val()!=="") {
			socket.emit('chat message', {username: player.username, text: $('#m').val(), msgcolor: player.color});
			$('#m').val('');
		}
		return false;
	});