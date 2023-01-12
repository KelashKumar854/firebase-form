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
    div.setAttribute("class","output-box");
    let heading = document.createElement("p");
    div.appendChild(heading);
    heading.setAttribute("class","output-p");
    heading.innerHTML = todoValue.val().todoValue;
    let editbtn = document.createElement("button");
    div.appendChild(editbtn);
    editbtn.innerHTML = "Edit";
    editbtn.setAttribute("class","edit-btn");
    let deletebtn = document.createElement("button");
    div.appendChild(deletebtn);
    deletebtn.innerHTML = "Delete"
    deletebtn.setAttribute("class","delete-btn");

    // edit function
    editbtn.addEventListener("click",()=>{
      let pro = prompt("edit", todoValue.val().todoValue);
      firebase.database().ref("todo/" + todoValue.key).update({
        todoValue: pro,
      })
    })

    // delete function
    deletebtn.addEventListener("click", ()=>{
      
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });

          firebase.database().ref("todo/" + todoValue.key).remove() 
        }
        else {
          swal("Your imaginary file is safe!");
        }
      });
    })
  });
});

