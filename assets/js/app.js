//ocultar partes del sitio (menos el login)
$(".perfilcontainer").hide()
$(".pageini").hide()
$(".navbarcontainer").hide()
$(".menuinf").hide()
$(".addcontact").hide()
$(".unfollowbtn").hide()
$(".unfollowbtn1").hide()
$(".unfollowbtn2").hide()
//document ready, carga la pag y luego tira los codigos
$(document).ready(function(){
  $(".login").show()
//cambia icono de corazón al hacer click
$('.cora1').click(function() {
  $('.cora1').css('color', "#FA0A42");
  $(".coraz").toggleClass("glyphicon-heart glyphicon-heart-empty");
});

$('.cora2').click(function() {
  $('.cora2').css('color', "#FA0A42");
  $(".cora2").toggleClass("glyphicon-heart glyphicon-heart-empty");
});
//modal del sign up
$(".send").click(function(){
  $('#signupmodal').modal('toggle')
})
$(".loginbtn").click(function(){
  $('#loginmodal').modal('toggle')
})
//muestra la pag de inicio al dar click al icono cabeza de gato
$(".catico").click(function(){
  $(".pageini").show()
  $(".perfilcontainer").hide()
  $(".addcontact").hide()
})
//si no tiene una cuenta, crear una
$(".notacc").click(function(){
  $('#loginmodal').modal('toggle')
  $('#signupmodal').modal('show');
})
//si ya tiene cuenta, registrarse
$(".alracc").click(function(){
  $('#signupmodal').modal('toggle')
  $('#loginmodal').modal('show');
})
//muestra parte de perfil y oculta las demas
  $(".editperf").click(function(){
  $(".menuinf").show()
  $(".pageini").hide()
  $(".navbarcontainer").show()
  $(".perfilcontainer").show()
  $(".addcontact").hide()
})
//muestra las sugerencias de contactos y oculta el resto
$(".icon-icon_cat-01").click(function(){
  $(".addcontact").show()
  $(".pageini").hide()
  $(".perfilcontainer").hide()
})
//en la ver movil muestra la pag de inicio y oculta el resto
$(".homemobile").click(function(){
  $(".addcontact").hide()
  $(".pageini").show()
})
//boton de seguir contacto
$(".followbtn").click(function(){
  $(".unfollowbtn").show()
  $(".followbtn").hide()
})
//boton de no seguir contacto
$(".unfollowbtn").click(function(){
  $(".followbtn").show()
  $(".unfollowbtn").hide()
})


$(".followbtn1").click(function(){
  $(".unfollowbtn1").show()
  $(".followbtn1").hide()
})

$(".unfollowbtn1").click(function(){
  $(".followbtn1").show()
  $(".unfollowbtn1").hide()
})

$(".followbtn2").click(function(){
  $(".unfollowbtn2").show()
  $(".followbtn2").hide()
})

$(".unfollowbtn2").click(function(){
  $(".followbtn2").show()
  $(".unfollowbtn2").hide()
})

/* Inicio de registro de usuario y login
 * Initialize Firebase
 */
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
alert("Ya estás conectado")
  $(".inicio").hide()
$(".pageini").show()
$(".perfilcontainer").hide()
$(".menuinf").show()
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
  $(".navbarcontainer").hide();
  $(".addcontact").hide();
});
}

function verificar(){
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function () {
  // Email sent.
  alert("Enviando correo de verificación, una vez verificado su correo inicie sesión");

}).catch(function(error) {
  // An error happened.
  alert("Ha ocurrido un error");
});
}
//fin de login logout


//Añadir comentarios Comentarios
  $('.comment').keyup(function (e) {
    if (e.keyCode == 13) {
      var newComment = $(this).val();
      $('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 newComment">'
        + '<p class="col-lg-10">' + newComment + '</p>'
        + '<span class="col-lg-1 glyphicon glyphicon-heart">' + '</span>'
        + '<span class="col-lg-1 glyphicon glyphicon-trash">' + '</span>'
        +'</div>').insertBefore(this).closest('div');
      $(this).val('');
    }
  });
  
  //eliminar comentarios
  $('.glyphicon-trash').click(function () {
    $(this).parent().remove();
  });

  //subir imagen
  $('#imageUpload').change(function () {
    readImgUrlAndPreview(this);
    function readImgUrlAndPreview(input){
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('.uploadImg').append('<img src="" id="imagePreview" alt="" width="5em"/>');
          $('#imagePreview').attr('src', e.target.result);
          $('#imagePreview').css('marginTop','1%');
          $('#imagePreview').css('paddingTop','3%');
          $('#imagePreview').css('paddingBottom', '8%');
          $('.uploadImg').css('border','1px solid #CBCBCB');
          $('.uploadImg').prepend('<button type="button" class="close deleteImg" aria-label="Close">' + '<span aria-hidden="true">' + '&times;' + '</span>');
          $('.uploadImg').css('marginTop', '3%')
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  });

  //Hacer publicación
  $('.publish').click(function () {
    var newPost = $('.addPost').val();
    var img = $('#imagePreview');
    $('.allPost').prepend('<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 col-sm-offset-1 post">'
                      + '<div class="postAuthor">' + '<div class="col-lg-1 col-xs-2 photoProfile">'
                      + '<img src="assets/img/gato5.jpg">' + '</div>' + '<div class="col-lg-10 name">'
                      + '<h5>' + '<strong>' + 'Pelusa' + '</strong>' + '</h5>' + '</div>' + '</div>'
                      + '<div>' + '<img src='+img[0].src+'>' + '</div>' + '<div class="col-lg-12">'
                      + '<span class="glyphicon glyphicon-heart-empty like">' + '</span>' + '</div>'
                      + '<div class="col-lg-12 col-xs-12">' + '<p>' + '<strong>' + 'Pelusa '
                      + '</strong>' + newPost + '</p>' + '</div>'
                      + '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 allComments">'
                      + '</div>' + '<div class="col-lg-12 col-xs-12">' + '<div class="form-group">'
                      + '<textarea class="form-control comment" rows="1" placeholder="Escribe un comentario...">'
                      + '</textarea>' + '</div>' + '</div>' + '</div>');
    $('.addPost').val('');
  });

  //dar like
  $('.like').click(function () {
    $(this).toggleClass('red');
  });

});
