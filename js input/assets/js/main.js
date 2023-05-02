// var n = 0;
// function AddNumber() {
//     document.getElementById("num").innerText = ++n;
// }

// var i=0;
// var n=0;
// function NumbersAdd() {
//     if (i<30) {
//         document.getElementById("num").innerText=++i;
//     }
//     else{
//         i=0;
//         document.getElementById("nums").innerText=++n;
//     }
// }

// var i = 0;
// var n = 0;
// var a = 0;
// function NumbersAdd() {
//     if (i % 4 == 0) {
//         document.getElementById("nums").innerText = n++;
//     }
//     else if (i == 10) {
//         i = 0;
//         document.getElementById("num").innerText = ++a;
//     }
//     document.getElementById("numb").innerText = i++;
// }




const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");
let sec = 0;
let min = 0;
let h = 0;

function timer() {
    if (sec == 59) {
        sec = - 1;
        if (min==59) {
            min = -1;
            h = h + 1;
            hour.innerText = h;
        }
        min = min + 1;
        minute.innerText = min;
    }
    sec = sec + 1;
    second.innerText = sec;
}
let x = setInterval(timer, 30);
function stopTimer(){
    clearInterval(x)
}
function countinue(){
    stopTimer();
    x = setInterval(timer, 30);
}


