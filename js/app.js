firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.emailVerified) {
      setTimeout(()=>{
        window.location.assign("./pages/home.html");
      },2000)
    } else {
      
      setTimeout(()=>{
        window.location.assign("./pages/email-verification.html");
      },2000)
    }
  } else {
    setTimeout(()=>{
      window.location.assign("./pages/login.html");
    },2000)
  }
});
