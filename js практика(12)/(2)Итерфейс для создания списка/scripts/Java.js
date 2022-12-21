const base = document.querySelector("ul");

let result = "";
let arr = [];
let i = -1;
while(true){
    i++;
    let li = document.createElement("li");
    result = prompt("Введите");
    if (result=="")
        break;
    if (result==null)
        break;
    arr[i]=result;
    console.log(result);
    li.textContent=result;
    base.append(li);
}
console.log(arr);


