let c_1 = document.querySelector(".card_1");
let c_2 = document.querySelector(".card_2");
let c_3 = document.querySelector(".card_3");
let bd = document.querySelector("body");
let count = 0;
let del = 3;
console.log(bd);
let arr = [c_1,c_2,c_3];
console.log(arr);
//c_1.style.opacity="0";
//c_2.style.opacity="1";
function func(){
    arr[count].style.opacity="1";
    for (child of arr){
        if (child != arr[count]){
            child.style.opacity="0";
        }
    }
    count++;
    if (count == del){
        count=0;
    }
}
function func_del(){
    arr[0]=arr[1];
    arr[1]=arr[2];
    delete arr[3];
    console.log(arr);
    del=2;
    c_1.style.opacity="0";
}
