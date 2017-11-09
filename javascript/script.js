function btnEnvoyer(){
	$message = document.getElementById('leMessage').value; 
	$.ajax({
		url: 'http://messenger.api.niamor.com/sendMessage',
		method: 'POST',
		data: {
	authKey: "",
	text: $message,
	to: 0
}
	})
console.log('test');
}