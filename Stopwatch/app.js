function start(){
    time =setInterval(timer,10);
}
function reset(){
 min.innerHTML = 0
 sec.innerHTML = 0
 msec.innerHTML = 0

}
function stop(){
    clearInterval(time)           //for stop interval
}

var min = document.getElementById('min')
var sec = document.getElementById('sec')
var msec = document.getElementById('msec')
var m = 0;
var s = 0;
var ms = 0;
function timer() {
    ms++
    msec.innerHTML = ms
    if (ms >= 1000) {
        s++
        sec.innerHTML = s
        ms = 0
    if (s >=60){
      m++
      min.innerHTML = m
      s = 0 
}
    }
}
