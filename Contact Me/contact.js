function validateForm(){
var name = false;
var email = false;
var comment = false;
var errorMessages ="";

  var name = document.getElementById("name").value;
   if (name.value==="null"||
       name.value==="")
  {
    errorMessages += "<p>The Name is required.</p>";
  }
  else
  {
    name = true;
  } 
  document.getElementById("errorMessages").innerHTML = errorMessages;

  return name;
}

