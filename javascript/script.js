var authKey = "";
function receptionId(){
  $.ajax({
    url: 'http://messenger.api.niamor.com/createUser'
  }).done(CUse);
}
  
var myUser;

function CUse(user){
  myUser = user;
}
receptionId();

function btnEnvoyer(){
	
	changePseudo();
	console.log(myUser.username);
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
var othUse;

function messRecu(){
  $.ajax({
    url: 'http://messenger.api.niamor.com/getMessages',
    method: 'post',
    data: {
      authKey: myUser.authKey,
      lastId: 0
    }

  }).done(affichMess);
  $.ajax({
  	url: 'http://messenger.api.niamor.com/getUsers',
  }).done(afficheId)


}

function affichMess(oUse){
  document.getElementById('messRecus').innerHTML = "";
  
for (i = 0; i < oUse.length; i++) {
  othUse = oUse[i];
  document.getElementById('messRecus').innerHTML += othUse.from.username+" : "+othUse.text+"<br>";
  }
}

function afficheId(affId){
	console.log(affId);
	document.getElementById('colonneId').innerHTML = '';
	for(j = 0; j < affId.length; j++)
	{
		affUse = affId[j];
		document.getElementById('colonneId').innerHTML += affUse.username + '<br>';
	}

}

$(document).ready(setInterval(messRecu, 3000));
$(document).ready(messRecu);


function changePseudo(){
	var recupPseudo = document.getElementById('pseudo').value;
	
	$.ajax({
		url:'http://messenger.api.niamor.com/changeUsername',
		method : 'post',
		data: {
		authKey : myUser.authKey,
		username : recupPseudo}
	})
}


