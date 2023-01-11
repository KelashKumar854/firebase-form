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
  } else if (password.value === "") {
    message.innerHTML = "Password required!";
    message.style.color = "red";
  } else {
    const userData = {
      name: userName.value,
      fName: fatherName.value,
      email: email.value,
      password: password.value,
      cnic: cnic.value,
      mNumber: mobileNumber.value,
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        res.user.sendEmailVerification();
        message.innerHTML = "!Sign Up";
        message.style.color = "green";
        // firebase.database().ref('users/' + "user1").set(userData).then(()=>{
        //   setTimeout(() => {
        //     window.location.assign("./email-verification.html");
        //   }, 2000);
        // })
        
      })
      .catch((error) => {
        message.innerHTML = error.message;
        message.style.color = "red";
      });
  }
};


