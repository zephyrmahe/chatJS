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

  }).done(affichMess)

}

function affichMess(oUse){
  document.getElementById('messRecus').innerHTML = "";
  
for (i = 0; i < oUse.length; i++) {
  othUse = oUse[i];
  document.getElementById('messRecus').innerHTML += othUse.from.username+" : "+othUse.text+"<br>";
  }
}

$(document).ready(setInterval(messRecu, 30));
$(document).ready(messRecu);