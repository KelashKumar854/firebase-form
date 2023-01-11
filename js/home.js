let userUid = document.getElementById("uid");
let message = document.getElementById("message");
let uid;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    uid = user.uid
    if (user.emailVerified) {
      console.log("emailVerified true");
      userUid.innerHTML = "User uid : "+user.uid;
    } else {
      window.location.assign("./email-verification.html");
    }
  } else {
    setTimeout(()=>{
      window.location.assign("./login.html");
    },2000)
  }
});

// log out
const LogOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      message.innerHTML = "!Log Out";
      message.style.color = "green";
      setTimeout(()=>{
        window.location.assign("./login.html");
      },2000)
    });
};

// add todo
let input = document.getElementById("input");
const addToDo = ()=>{
  firebase.database().ref("todo/")
  .push({
    todoValue: input.value,
    uid: uid,
  })
  .then((res)=>{
    console.log(res);
    input.value = "";
  })
}

// get data
let todoMain = document.getElementById("todoMain");
firebase.database()
.ref("todo/")
.on("value", (res)=>{
  todoMain.innerHTML = "";
  res.forEach((todoValue) => {
    let div = document.createElement("div");
    todoMain.appendChild(div);
    let heading = document.createElement("p");
    div.appendChild(heading);
    heading.innerHTML = todoValue.val().todoValue;
  });
});

// edit
const editFunction = ()=>{
  firebase
  .database()
  .ref("todo/" + "-NLTsO1BLq93jNFg0fQZ")
  .update({
    todoValue: "kelash"
  })
}