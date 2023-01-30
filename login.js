//TODO : Its a Completed Code
function formvalid() {
  var vaildpass = document.getElementById("pass").value;
  if (vaildpass.length <= 8 || vaildpass.length >= 20) {
    document.getElementById("vaild-pass").innerHTML = "Minimum 8 characters";
    return false;
  } else {
    document.getElementById("vaild-pass").innerHTML = "";
  }
}


function validation() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  if (username=="admin" && password=="bsie-ict-3a") {
    window.location.href="main";
    alert("login Successfully");

  }
  else{
    alert("Invalid Information");
  
  }
}

function show() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("showimg").src =
      "https://static.thenounproject.com/png/777494-200.png";
  } else {
    x.type = "password";
    document.getElementById("showimg").src =
      "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
  }
}

