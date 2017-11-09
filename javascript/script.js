function receptionId(){
	$.ajax({
		url: 'http://messenger.api.niamor.com/createUser'
	}).done(CUse);
}
// console.log($.ajax);
	

function CUse(id_user){
	console.log(id_user);
}
receptionId();

function btnMessage(){
	$message = document.getElementById('leMessage').value; 
}