let firstNameInvalid = document.getElementById("firstNameInvalid");
let firstNameValid = document.getElementById("firstNameValid");
let lastNameValid = document.getElementById("lastNameValid");
let lastNameInvalid = document.getElementById("lastNameInvalid");
let emailValid = document.getElementById("emailValid");
let emailInvalid = document.getElementById("emailInvalid");

let phoneNumberInvalid = document.getElementById("phoneNumberInvalid");
let phoneNumberValid = document.getElementById("phoneNumberValid");

let zipCodeInvalid = document.getElementById("zipCodeInvalid");
let zipCodeValid = document.getElementById("zipCodeValid");



function validate(event) {
  event.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;

   

  //   First Name Validation
  if (firstName === "") {
    firstNameInvalid.style.display = "block";
    firstNameValid.style.display = "none";
  } else {
    firstNameValid.style.display = "block";
    firstNameInvalid.style.display = "none";
  }

//   Last name Validation
  if (lastName === "") {
    lastNameInvalid.style.display = "block";
    lastNameValid.style.display = "none";
  } else {
    lastNameValid.style.display = "block";
    lastNameInvalid.style.display = "none";
  }

//   EMail validation
    if (email === "" || !email.includes('@') || email.indexOf('@') ==0 || !email.includes('.') || email.slice(email.lastIndexOf('.')+1).length < 2   ) {
        // if(email === '' || !email.includes('@') || !email.includes('.') || email.startsWith('@') || email.slice(email.lastIndexOf('.') + 1).length < 2) {    
        emailInvalid.style.display = "block";
        emailValid.style.display = "none";
     } else {
        emailValid.style.display = "block";
        emailInvalid.style.display = "none";
    }

//   Phone number Validation
if (phoneNumber === "" || phoneNumber.length != 10 || Number(phoneNumber[0]) < 6 ) {
    phoneNumberInvalid.style.display = "block";
    phoneNumberValid.style.display = "none";
  } else {
    phoneNumberValid.style.display = "block";
    phoneNumberInvalid.style.display = "none";
  }

//   ZipCode validation
if (zipCode === "" || zipCode.length != 6 ) {
    zipCodeInvalid.style.display = "block";
    zipCodeValid.style.display = "none";
  } else {
    zipCodeValid.style.display = "block";
    zipCodeInvalid.style.display = "none";
  }
  





}
