function getnumber(n){
var a = document.getElementById('result');
a.value+=n;
// whenever user click any button here this func call first it store value in a by calling id its shows in text feild 

}
function getresult(){
    var a = document.getElementById("result");
    a.value = eval(result.value);  
}

// this meathod evalute the terms 

function clearResult() {
    var result = document.getElementById("result");
    result.value = ""
}