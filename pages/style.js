var userName = document.getElementById("name");
var fatherName = document.getElementById("fname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cnic = document.getElementById("cnic");
var mobileNumber = document.getElementById("mobile-no");
var qualification = document.getElementById("Qualification");
var courses = document.getElementsByName("courses");
var gender = document.getElementsByName("gender");
var genderArray = "";

var message = document.getElementById("message");

let userobj = [];


function userData(){
    var coursesArray = [];
    
    for(var i = 0; i<courses.length; i++){
        if(courses[i].checked){
            coursesArray.push(courses[i].value);
        }
    }

    for(var j = 0; j<gender.length; j++){
        if(gender[j].checked){
            genderArray = gender[j].value;
        }
    }
    
    if(cnic.value.length <= 13 ){
        message.innerHTML = "!valid cnic required";
        message.style.color = "red";
        cnic.focus();
        setTimeout(function(){
            message.innerHTML = "";
        }, 3000)

    }
    else if(cnic.value.length >= 15){
        message.innerHTML = "!valid cnic required";
        message.style.color = "red";
        cnic.focus();
        setTimeout(function(){
            message.innerHTML = "";
        }, 3000)
    }
    else if(mobileNumber.value.length <=10){
        message.innerHTML = "!valid mobile number required";
        message.style.color = "red";
        mobileNumber.focus();
        setTimeout(function(){
            message.innerHTML = "";
        }, 3000)
    }
    else if(mobileNumber.value.length >=12){
        message.innerHTML = "!valid mobile number required";
        message.style.color = "red";
        mobileNumber.focus();
        setTimeout(function(){
            message.innerHTML = "";
        }, 3000)
    }
    else{
        var userDataObj = {
            Name: userName.value,
            FatherName: fatherName.value,
            Email: email.value,
            Password: password.value,
            CNIC: cnic.value,
            MobileNumber: mobileNumber.value,
            Qualification: qualification.value,
            Courses: coursesArray,
            Gender: genderArray,
        }

     
    }
    console.log(userDataObj);
    userobj.push(userDataObj);

    message.innerHTML = "!SignUp Sucessfully";
    message.style.color = "green";
    setTimeout(()=>{
        message.innerHTML = "";
    }, 3000)
    userName.value = "";
    fatherName.value = "";
    email.value = "";
    password.value = "";
    cnic.value = "";
    mobileNumber.value = "";
    qualification.selectedIndex = 0;
    
    courses.checked = false;
    gender.checked = false;

}
var main = document.getElementById("main");
let outputbtn = document.getElementById("outputbtn");
outputbtn.addEventListener("click", function(){
    for(let a in userobj){
        var box = document.createElement("div");
        main.appendChild(box);
        box.setAttribute("class", "output");

        // name
        var Name = document.createElement("p");
        box.appendChild(Name);
        Name.innerHTML = "Name : " + userobj[a].Name;

        //fathername
        var userFName = document.createElement("p");
        box.appendChild(userFName);
        userFName = "Father name : " + userobj[a].FatherName;

        //email
        var userEmail = document.createElement("p");
        box.appendChild(userEmail);
        userEmail.innerHTML = "Email : " + userobj[a].Email;

        // password
        var userPassword = document.createElement("p");
        box.appendChild(userPassword);
        userPassword.innerHTML = "Password : " + userobj[a].Password;

        //cnic
        var userCNIC = document.createElement("p");
        box.appendChild(userCNIC);
        userCNIC.innerHTML = "CNIC : " + userobj[a].CNIC;

        //mobile number
        var userMNumber = document.createElement("p");
        box.appendChild(userMNumber);
        userMNumber.innerHTML = "Mobile number : " + userobj[a].MobileNumber;

        //qualification
        var userQualification = document.createElement("p");
        box.appendChild(userQualification);
        userQualification.innerHTML = "Qualification : " + userobj[a].Qualification;

        // courses
        var userCourse = document.createElement("p");
        box.appendChild(userCourse);
        userCourse.innerHTML = "Courses  : " + userobj[a].Courses;

        //gender
        var userGender = document.createElement("p");
        box.appendChild(userGender);
        userGender.innerHTML = "Gender : " + userobj[a].Gender;



    }
    
})