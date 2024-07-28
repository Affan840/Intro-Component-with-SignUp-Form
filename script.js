let form = document.querySelector('form');
let firstNameValue = document.querySelector("#first-name");
let lastNameValue = document.querySelector("#last-name");
let emailValue = document.querySelector("#email");
let passwordValue = document.querySelector("#password");
let error = document.querySelectorAll('.error');
let label = document.querySelectorAll('label');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    firstNameChecker();
    lastNameChecker();
    emailValidator();
    passwordValueValidator();
});

function firstNameChecker(){
    if(firstNameValue.value == ""){
        error[0].style.display = "block";
        label[0].style.display = "block";
    }
    else{
        error[0].style.display = "none";
        label[0].style.display = "none";
    }
};
function lastNameChecker(){
    if (lastNameValue.value == "") {
      error[1].style.display = "block";
      label[1].style.display = "block";
    } else {
      error[1].style.display = "none";
      label[1].style.display = "none";
    }
};

function emailValidator(){
    if (
      !emailValue.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      error[2].style.display = "block";
      label[2].style.display = "block";
    } else {
      error[2].style.display = "none";
      label[2].style.display = "none";
    }
}

function passwordValueValidator(){
    if (passwordValue.value == "") {
      error[3].style.display = "block";
      label[3].style.display = "block";
    } else {
      error[3].style.display = "none";
      label[3].style.display = "none";
    }
};