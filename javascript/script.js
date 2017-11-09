var authKey = "";
function receptionId(){
	$.ajax({
		url: 'http://messenger.api.niamor.com/createUser'
	}).done(CUse);
}
console.log(authKey);
	
var myUser;

function CUse(user){
	myUser = user;
	console.log(user);
	console.log(myUser.authKey);
	console.log(myUser.id);
	console.log(myUser.createdAt);
	console.log(myUser.lastMessageAt);
	console.log(myUser.username);
}
receptionId();

function btnEnvoyer(){
	$message = document.getElementById('leMessage').value;
	$.ajax({
		url: 'http://messenger.api.niamor.com/sendMessage',
        method: 'post',
        data: {
        	authKey: myUser.authKey,
        	text: $message,
        	to: 0
        }
        
	})
}