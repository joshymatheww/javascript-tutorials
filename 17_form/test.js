var myForm = document.forms.myform;
var message = document.getElementById('message');
console.log(myForm);
myForm.onsubmit = function () {
  alert(1)
  return false;
  if(myForm.name.value=""){

    message.style.display = "block";
    message.innerHTML = "Please enter the name";
  }else{
    message.style.display = "none";
    message.innerHTML = "";
  }
};
