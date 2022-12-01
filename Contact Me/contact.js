function validateForm(){
var name = false;
var email = false;
var comment = false;
var errorMessages ="";

  function validateName()
{
  var formname = document.getElementById("name").value;
  if (formname.value==="null"|| 
     formname.value==="" )
  {
    errorMessages += "<p>The Name is required.</p>";
  }
  else
  {
    formname = true;
  } 
  return (formname);
}
  document.getElementById("errorMessages").innerHTML = errorMessages;

  return (validateName());
}

