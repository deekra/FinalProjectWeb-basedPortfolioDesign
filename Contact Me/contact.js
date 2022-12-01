function validateForm(){
  var uname = false;
  var uemail = false;
  var ucomment = false;
  var errorMessages ="";

/*  function validateName()
  { * /
  var Name = document.getElementById("name").value;
  if (Name === "null" ||
      Name === "") {
    
    errorMessages += "<p>Name is required.</p>";
  
  }
  else {
    uname = true;
  } 
  
  
/*  
  return uname;
 }  
function validateEmail(){
  */
 var Email = document.getElementById("email").value;
  if (Email === "null" ||
      Email === "") {
    
    errorMessages = errorMessages +  "<p>Email is required.</p>";
  
  }
  else {
    uemail = true;
  } 
/*  
  return uemail;
}
  
function validateComment(){

var Comment = document.getElementById("comment").value;
  if (Comment === "null" ||
      Comment === "") {
    
    errorMessages += "<p>Comment is required.</p>";
  
  }
  else {
    ucomment = true;
  } 

  return ucomment;
} */
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
/*  return (validateName() && validateEmail() && validateComment()); */
  return (uname && uemail);
}
