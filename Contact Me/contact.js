function validateForm(){
var name = false;
var email = false;
var comment = false;
var errorMessages ="";

  var formname = document.getElementById("name").value;
   if (formname.value==="null"||
       formname.value==="")
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

