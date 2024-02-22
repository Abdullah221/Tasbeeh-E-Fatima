// let counter1 = document.getElementById("numc");
// let textc1 = document.getElementById("textc");
// function next(){
//     counter1.textContent = ++counter1.textContent;
// }
// function prev(){
//     counter1.textContent = --counter1.textContent;
// }
// function reset(){
//     counter1.textContent = 0;
// }

let counter1;
function next() {
    counter1++;
    document.getElementById("numc").textContent = counter1;
    if(counter1>=33){
        document.getElementById("textc").textContent = "استغفراللہ";
    }
}
function prev() {
    counter1--;
    document.getElementById("numc").textContent = counter1;
    if(counter1<=66){
        document.getElementById("textc").textContent = "اللہ اکبر";
    }
}
function reset() {
    counter1 = 0;
    document.getElementById("numc").textContent = counter1;
}