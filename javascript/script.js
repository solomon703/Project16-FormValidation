var nameError = document.getElementById("name-error");
var mobileError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let butError = document.getElementById("submit-error");

// ! Name Validation
function validation(){
  var user = document.getElementById("User-Name").value;
  if(user.length == 0){
    nameError.innerHTML = 'Characters should not below 0';
    return false;
  }
  if(!user.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Name contains Capital and Space';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}
// ! mobile validation
function validatePhone(){
  var mobile = document.getElementById("Phone-num").value;
  if(mobile.length == 0){
    mobileError.innerHTML = 'Number shouldNot < 0';
    return false;
  }
  if(mobile.length !== 10){
    mobileError.innerHTML = 'Contact contains 10 digits';
    return false;
  }
  if(!mobile.match(/^[0-9]{10}$/)){
    mobileError.innerHTML = 'Only Digits Please';
    return false;
  }
  mobileError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}
// ! Email verification
function validateEmail(){
  var email = document.getElementById("Email").value;
  if(email.length == 0){
    emailError.innerHTML = "Email is Required";
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = "Email Invalid";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}
// ! Text area validation 
function validateMessage(){
  var message = document.getElementById("contact-message").value;
  if(message.length == 0){
    messageError.innerHTML = "Please Fill Your Message";
    return false;
  }
  var required =30;
  var left = required - message.length;

  if(left > 0){
    messageError.innerHTML = left +" " + " More characters required";
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}
// ! Button verification function
function validateForm(){
  if(!validation() || !validatePhone() || !validateEmail() || !validateMessage()){
    butError.innerHTML = "Please fix Above Details"
    butError.style.display = 'block';
    setTimeout(function(){butError.style.display = 'none';},3000);
    return false;
  };
}