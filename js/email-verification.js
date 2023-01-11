let email = document.getElementById("email");
let message = document.getElementById("message");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
    if (user.emailVerified) {
      window.location.assign("./home.html");
    } else {
      email.innerHTML = user.email;
    }
  } else {
    window.location.assign("./login.html");
  }
});


// resend email
const resendEmail = ()=>{
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(()=>{
    message.innerHTML = "send email";
  })
}

const home = ()=>{
  location.reload();
}
