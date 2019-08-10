$(document).ready(function(){
  $('.header').height($(window).height());
})

function get_password(){
  var password=document.getElementById("password_input").value;
  alert(password);
}

function login(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/login", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  let password=document.getElementById("password_input").value;
  let email=document.getElementById("email_input").value;
  let post_body = {
    'email': email,
    'password': password
  }
  xhttp.send(JSON.stringify(post_body));
}

let password_div = document.getElementById("password_input");
console.log(password_div)
password_div.addEventListener("mouseover", function(event){
  let eye_slash_icon= document.getElementsByClassName("far fa-eye-slash fa-2x");
  eye_slash_icon[0].style.display = "block";
});
