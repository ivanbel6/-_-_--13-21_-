let c_1 = document.querySelector(".txt");
let a = 1;
let c = 1;
var b = 100;

function func1() {
    a++;
    c_1.innerText = a;


};

function func2() {
    setTimeout(func1, b);
}
setInterval(func2, 100);

function func3(func1,ms) {b=b*100;
    return function(...args){
        console.log("d")
        setTimeout(function(){},ms)
        
    } 

}
function func(){
    let f1 = func3(func,1000)
}

//function func1() {
//    a++;
//    c_1.innerText = a;
//
//
//};
//
//function func2() {
//    setTimeout(func1, b);
//}
//setInterval(func2, 100);
//
//function func() {
//    if (b == 100)
//        b = b * 10;
//
//}
