let userName = document.getElementById("name");
let fatherName = document.getElementById("fname");
let cnic = document.getElementById("cnic");
let mobileNumber = document.getElementById("mobile-no");
let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("message");
const SignUp = () => {
  if (email.value === "") {
    message.innerHTML = "Email required!";
    message.style.color = "red";
    email.focus();
    setTimeout(function(){
        message.innerHTML = "";
    }, 3000)
  } else if (password.value === "") {
    message.innerHTML = "Password required!";
    message.style.color = "red";
    password.focus();
    setTimeout(function(){
        message.innerHTML = "";
    }, 3000)
  }else if(userName.value.length = ""){
      message.innerHTML = "User Name required!";
      message.style.color = "red";
      userName.focus();
      setTimeout(function(){
          message.innerHTML = "";
      }, 3000)
    }else if(fatherName.value = ""){
      message.innerHTML = "Father Name required!";
      message.style.color = "red";
      fatherName.focus();
        setTimeout(function(){
            message.innerHTML = "";
        }, 3000)
      }
  else if(cnic.value.length = ""){
    message.innerHTML = "!cnic required";
        message.style.color = "red";
        cnic.focus();
        setTimeout(function(){
            message.innerHTML = "";
        }, 3000)
  }else if(cnic.value.length <= 13){
    message.innerHTML = "!valid cnic required";
        message.style.color = "red";
        cnic.focus();
        setTimeout(function(){
            message.innerHTML = "";
        }, 3000)
  }else if(cnic.value.length >= 15){
    message.innerHTML = "!valid cnic required";
        message.style.color = "red";
        cnic.focus();
        setTimeout(function(){
            message.innerHTML = "";
        }, 3000)
  }else if(mobileNumber.value.length <= 10){
    message.innerHTML = "!valid mobile number required";
    message.style.color = "red";
    mobileNumber.focus();
    setTimeout(function(){
        message.innerHTML = "";
    }, 3000)
  }else if(mobileNumber.value.length >= 12){
    message.innerHTML = "!valid mobile number required";
    message.style.color = "red";
    mobileNumber.focus();
    setTimeout(function(){
        message.innerHTML = "";
    }, 3000)
  }else {
    const userData = {
      name: userName.value,
      fName: fatherName.value,
      email: email.value,
      password: password.value,
      cnic: cnic.value,
      MobileNumber: mobileNumber.value,
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        res.user.sendEmailVerification();
        message.innerHTML = "!Sign Up";
        message.style.color = "green";
        firebase.database().ref('users/' + "user1").set(userData).then(()=>{
          setTimeout(() => {
            window.location.assign("./email-verification.html");
          }, 2000);
        })
        
      })
      .catch((error) => {
        message.innerHTML = error.message;
        message.style.color = "red";
      });
  }
};


