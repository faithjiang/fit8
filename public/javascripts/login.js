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
    'username': email,
    'password': password
  }
  xhttp.send(JSON.stringify(post_body));
}
