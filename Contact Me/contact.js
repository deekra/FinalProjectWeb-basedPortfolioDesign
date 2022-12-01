function validateForm(){
  var uname = false;
  var uemail = false;
  var ucomment = false;
  var errorMessages ="";

  var Name = document.getElementById("name").value;
  if (Name === "null" ||
      Name === "") {
    
    errorMessages += "<p>Name is required.</p>";
  
  }
  else {
    uname = true;
  } 
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  
  return uname;
}
