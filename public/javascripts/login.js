$(document).ready(function(){
  $('.header').height($(window).height());

  const password_div = document.getElementById("password_input");
  // const eye_slash_icon= document.getElementsByClassName("far fa-eye-slash fa-2x");

  // password_div.addEventListener("mouseover", function(event){
  //   eye_slash_icon[0].style.display = "block";
  // });
  //
  // password_div.addEventListener("mouseout", function(event){
  //   eye_slash_icon[0].style.display = "none";
  // });

})

function login(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/login", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  let password=document.getElementById("password_input").value;
  let email=document.getElementById("email_input").value;
  if (email == '' || password == ''){
    return "Please Enter all fields.";
  }
  let post_body = {
    'email': email,
    'password': password
  }
  xhttp.send(JSON.stringify(post_body));

  // xhttp.onload = function(){
  //   if (this.status == 200) {
  //     console.log("Sucessfully logged in.");
  //     //window.location.href = "/users";
  //   } else if (this.status == 203) {
  //     let password_div = document.getElementById("password_input");
  //     console.log(password_div);
  //     password_div.setAttribute("style", "border-color:red; border-width:0px 0px 2px 0px;");
  //   }
  // };

}
