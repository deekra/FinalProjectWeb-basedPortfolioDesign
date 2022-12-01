function validateForm(){
var name = false;
var email = false;
var comment = false;
var errorMessages ="";

/*  function validateName()
{ */
  var formname = document.getElementById("name").value;
  if (formname.value.length < 1)
  {
    alert( "The First Name is required, only letters are accepted and it cannot be greater than 20 characters." );
    errorMessages += "<p>The Name is required.</p>";
  }
  else
  {
    name = true;
    alert( "truepath123" );
  } 
/*  return (name);
} */
  document.getElementById("errorMessages").innerHTML = errorMessages;

  return name;
}

