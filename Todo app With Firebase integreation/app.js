var list = document.getElementById('list');

firebase.database().ref('todos').on('child_added',function(data){
    if (data.val().todo != "") {
        var li = document.createElement('li')
        var liText = document.createTextNode(data.val().todo)
        var img = document.createElement('img')
        img.setAttribute('src', 'https://image.flaticon.com/icons/png/512/61/61848.png')
        img.setAttribute("class", "img")
        img.setAttribute("onclick", "imagedelete(this)")
        img.setAttribute("id", data.val().key)
        var edit = document.createElement('button')
        edit.setAttribute("onclick", "editimage(this)")
        edit.setAttribute("id",data.val().key)
        var edittxt = document.createTextNode('Edit')
        li.append(liText)
        edit.append(edittxt)
        li.appendChild(edit)
        li.appendChild(img)
        list.appendChild(li)
        
}
else{
            alert("Error")
        }
})



function add() { 
    var todo_item = document.getElementById("value");
    var database_ref = firebase.database().ref('todos')
    var key = database_ref.push().key;
    var todo = {
        todo : todo_item.value,
        key : key   
    }
    database_ref.child(key).set(todo);
    todo_item.value = ""

}
function imagedelete(e) {
    firebase.database().ref('todos').child(e.id).remove()
    e.parentNode.remove()
}
function editimage(e) {
    var inputvalue = prompt("Enter ToDo", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = inputvalue
    var editTodo = {
        value : inputvalue,
        key : e.id
    }
    firebase.database().ref('todos').child(e.id).set(editTodo)
}
function del() {
    firebase.database().ref('todos').remove()
    list.innerHTML = ""
}
