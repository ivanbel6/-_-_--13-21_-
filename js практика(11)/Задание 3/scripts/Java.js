let c_1 = document.querySelector(".card_1");
let c_2 = document.querySelector(".card_2");
let c_3 = document.querySelector(".card_3");
//c_1.replaceWith(c_3);
//c_2.replaceWith(c_2);
//c_3.replaceWith(c_1);
let arr =[c_1,c_2,c_3];
function func(){
    let bd = document.querySelector("body");
    
}
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr2 = [ 1, 15, 12,3,1,55,2,23 ];

arr2.sort(compareNumeric);
console.log(arr2);