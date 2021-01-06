function savedata(){
    var name = document.getElementById('name')
    var pass = document.getElementById('pass')
    
    var student = {
        name : name.value,
        pass : pass.value
    }
    console.log(student);
    console.log( firebase.database().ref('student').push(student));
}
