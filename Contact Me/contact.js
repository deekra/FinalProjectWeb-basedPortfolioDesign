function validateForm(){
  var uname = false;
  var email = false;
  var comment = false;
  var errorMessages ="";

  var Name = document.getElementById("name").value;
  if (Name === "null" ||
      Name === "") {
    
    errorMessages += "<p>The Name is required.</p>";
  
  }
  else {
    uname = true;
  } 
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  
  return uname;
}
