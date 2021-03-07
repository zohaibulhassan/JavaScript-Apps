let signin = () =>{
    




// get elements here
var txtemail = document.getElementById('email');
var txtpass = document.getElementById('pass');
var btnlogin = document.getElementById('login');
// var btncancel = document.getElementById('cancel');
// var btnlogout = document.getElementsById('logout');






firebase.auth().createUserWithEmailAndPassword(txtemail.value, txtpass.value) 
//it returns a promise 
.then((isuserverified) => {
     alert(isuserverified)
    
  })
  .catch((error) => {
    alert(error)
    
  });




}

let login = () =>{
    // get elements here
    var txtemail = document.getElementById('email');
    var txtpass = document.getElementById('pass');
    var btnlogin = document.getElementById('login');
    // var btncancel = document.getElementById('cancel');
    // var btnlogout = document.getElementsById('logout');


    
  firebase.auth().signInWithEmailAndPassword(txtemail.value, txtpass.value) 

  //it returns a promise 
  .then((result) => {
       alert("Login Sucess")
      
    })
    .catch((error) => {
      alert("invaild" + error )
      
    });
 

}