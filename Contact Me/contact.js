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

 var Email = document.getElementById("email").value;
  if (Email === "null" ||
      Email === "") {
    
    errorMessages += "<p>Email is required.</p>";
  
  }
  else {
    uemail = true;
  } 
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  
  return uemail;
}

var Comment = document.getElementById("comment").value;
  if (Comment === "null" ||
      Comment === "") {
    
    errorMessages += "<p>Comment is required.</p>";
  
  }
  else {
    ucomment = true;
  } 
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  
  return ucomment;
}

