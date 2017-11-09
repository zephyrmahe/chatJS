function btnEnvoyer(){
	$.ajax({
		url: 'http://messenger.api.niamor.com/createUser'
	}).done(CUse);
}
// console.log($.ajax);
	// $message = document.getElementById('leMessage').value; 

function CUse(id_user){
	console.log(id_user);
}