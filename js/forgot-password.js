let email = document.getElementById("email");
let message = document.getElementById("message");
const forgot = ()=>{
    firebase.auth()
    .sendPasswordResetEmail(email.value)
    .then(()=>{
        message.innerHTML = "!Email sent";
        message.style.color = "green";
        setTimeout(()=>{
            window.location.assign("./login.html")
        },4000)
    })
    .catch((error)=>{
        message.innerHTML = error.message;
        message.style.color = "red";
    })
}