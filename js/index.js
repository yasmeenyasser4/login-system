
var containerData = [];
if (localStorage.getItem("userData") !== null) {
  containerData = JSON.parse(localStorage.getItem("userData"));
}
var containerName = [];

function validation(ele) {
  var regex = {
    nameInput: /[a-z]{3,}/i,
    emailInput: /[a-zA-Z0-9]{5,}@(yahoo|gmail)\.(com)/,
    PasswordInput: /[a-zA-Z0-9!@#$%^&*]{6,}/,
  };
  if (regex[ele.id].test(ele.value)) {

    ele.classList.remove("is-invalid");
    ele.classList.add("is-valid");
    console.log("ok");
    return true;
  } else if(ele.value === ""){
    
    ele.classList.remove("is-valid");
    ele.classList.remove("is-invalid");
    console.log("no");
    return false;

  }else{
    
    ele.classList.remove("is-valid");
    ele.classList.add("is-invalid");
    console.log("no");
    return false;
  }
}

// // ========
// Login
var loginSide = document.querySelector(".login-side")
var emailLoginInput = document.getElementById("emailLoginInput")
var PasswordLoginInput = document.getElementById ("PasswordLoginInput")
var btnLogin = document.querySelector(".btnLogin");
var nameContain = document.querySelector(".nameContain");
var anchorSignIn = document.querySelector(".anchorSignIn");

btnLogin.addEventListener("click", function (e) {
  e.preventDefault()

  for (var i = 0; i < containerData.length; i++) {
    if (
      containerData[i].email == emailLoginInput.value &&
      containerData[i].password == PasswordLoginInput.value
    ) {
      console.log('done')
      var userName = containerData[i].name;
      localStorage.setItem("name", userName);
      document.querySelector(".text-success-login").classList.replace("d-none","d-block")
      document.querySelector(".text-error-login").classList.replace("d-block","d-none")
      window.open("home.html","_self")
      break;

    }
    else {
      document.querySelector(".text-success-login").classList.replace("d-block","d-none")
      document.querySelector(".text-error-login").classList.replace("d-none","d-block")
    }
  }

});


anchorSignIn.addEventListener("click",function(e){
  e.preventDefault()
  registerPage.classList.replace("d-none","d-block")
  loginSide.classList .replace("d-block","d-none")


})
// ========================
// // =================
// Register

var registerPage = document.querySelector(".register-side")
var nameInput = document.querySelector("#nameInput");
var emailInput = document.querySelector("#emailInput");
var passwordInput = document.querySelector("#PasswordInput");
var btnSign = document.querySelector(".btnSign");
var texterror = document.querySelector('.texterror');
var textSuccess = document.querySelector(".textSuccess");
var anchorSignUp = document.querySelector(".anchorSignUp");

btnSign.addEventListener("click", function (e) {
  e.preventDefault()
  if (validation(emailInput) && validation(passwordInput) && validation(nameInput)) {
    checkEmail();
  }
  else {
    texterror.classList.remove('d-none')
  }

});

function checkEmail() {
  var checkemail = false;
  for (var i = 0; i < containerData.length; i++) {
    if (emailInput.value == containerData[i].email) {
      console.log("matching")
      texterror.classList.replace("d-none","d-block")
      checkemail = true
      break;
    }
  }
  if (!checkemail) {
    console.log("Not Matching")
    addDataToStorage()
    clearData()
    texterror.classList.replace("d-block","d-none")
    textSuccess.classList.replace("d-none","d-block")
    emailInput.classList.remove("is-valid")
    passwordInput.classList.remove("is-valid")
    nameInput.classList.remove("is-valid")
  }
}

function addDataToStorage() {
  var data = {
    name: nameInput.value,
    password: passwordInput.value,
    email: emailInput.value,
  };
  containerData.push(data);
  localStorage.setItem("userData", JSON.stringify(containerData));
}

anchorSignUp.addEventListener("click",function(e){
  e.preventDefault()
  registerPage.classList.replace("d-block","d-none")
  loginSide.classList .replace("d-none","d-block")
})


function clearData() {
  emailInput.value = "";
  nameInput.value = "";
  passwordInput.value = "";
}
// ==============================
