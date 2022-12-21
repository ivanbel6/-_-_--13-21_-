let c_1 = document.querySelector(".txt");
let a = 1;
//while (a!=10) {
//    
//    c_1.innerText = a;
//    a++;
//}
function func(){
     a++;
     c_1.innerText = a;
     
}
setInterval(func, 3000);