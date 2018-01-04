$(".perfilcontainer").hide()
$(".pageini").hide()
$(".perfilcontainer").hide()
$(".navbarcontainer").hide()

$(document).ready(function(){
  $(".login").show()

$(".send").click(function(){
  $('#signupmodal').modal('toggle')
})
$(".loginbtn").click(function(){
  $('#loginmodal').modal('toggle')
})

$(".editperf").click(function(){
  $(".pageini").hide()
  $(".navbarcontainer").show()
  $(".perfilcontainer").show()
})

$(".catico").click(function(){
  $(".pageini").show()
  $(".perfilcontainer").hide()
})

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAd7xNUJssjA3v-i8zDfhpY6Lg3R5MGQy8",
    authDomain: "fine-climber-188103.firebaseapp.com",
    databaseURL: "https://fine-climber-188103.firebaseio.com",
    projectId: "fine-climber-188103",
    storageBucket: "fine-climber-188103.appspot.com",
    messagingSenderId: "693407936885"

  };
  firebase.initializeApp(config);


$(".send").click(function(){
var email = document.getElementById("email").value;
var contrasena = document.getElementById("contrasena").value;

firebase.auth().createUserWithEmailAndPassword(email, contrasena)
.then(function(){
  verificar()
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode);
  console.log(errorMessage);
});
});


$(".loginbtn").click(function(){
  var email2 = document.getElementById("email2").value;
  var contrasena2 = document.getElementById("contrasena2").value;
  


firebase.auth().signInWithEmailAndPassword(email2, contrasena2).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode);
  console.log(errorMessage);
});
});


function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("existe usuario activo")
    aparece(user);
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    console.log("**************");
    console.log(user.emailVerified)
    console.log("**************");
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    console.log("no existe usuario activo")
    // ...
  }
});
}
observador();

function aparece(user){
  var user = user;
  var contenido = document.getElementById("contenido");
  if(user.emailVerified){
alert("Tu correo ha sido verificado")
  $(".inicio").hide()
$(".pageini").show()
$(".navbarcontainer").show()
  }else{
    alert("Verifica tu correo o no podrás loguear")
}

$(".logout").click(function(){
firebase.auth().signOut()
.then(function(){
console.log("saliendo...")
})
.catch(function(error){
console.log(error)
})
$(".pageini").hide();
$(".inicio").show();
$(".navbarcontainer").hide()
});
}

function verificar(){
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  alert("Enviando correo de verificación, una vez verificado su correo inicie sesión");

}).catch(function(error) {
  // An error happened.
  alert("Ha ocurrido un error");
});
}

//modal para subir archivos

});

