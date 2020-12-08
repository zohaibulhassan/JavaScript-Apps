var list = document.getElementById('list');
function add() {
    var todo_item = document.getElementById("value");
if (todo_item.value != "") {
        var li = document.createElement('li')
        var liText = document.createTextNode(todo_item.value)
        var img = document.createElement('img')
        img.setAttribute('src', 'https://image.flaticon.com/icons/png/512/61/61848.png')
        img.setAttribute("class", "img")
        img.setAttribute("onclick", "imagedelete(this)")
        var edit = document.createElement('button')
        edit.setAttribute("onclick", "editimage(this)")
        var edittxt = document.createTextNode('Edit')
        li.append(liText)
        edit.append(edittxt)
        li.appendChild(edit)
        li.appendChild(img)
        list.appendChild(li)
        todo_item.value = ""
}
else{
            alert("Error")
        }
    
}
function imagedelete(e) {
    e.parentNode.remove()
}
function editimage(e) {
    var inputvalue = prompt("Enter ToDo", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = inputvalue
}
function del() {
    list.innerHTML = ""
}