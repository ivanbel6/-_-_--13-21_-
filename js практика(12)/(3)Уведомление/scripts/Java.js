
const base = document.querySelector("body");
var text="Уведомляю вас"
 var div = document.createElement("div");
function showNotification(options){
   
    div.classList.add("notification");
    div.textContent=text;
    base.append(div);
    console.log(div);
    console.log(base);
    setTimeout(func, 1500);
}
function func(){
//    console.log(base);
    base.removeChild(div);
}
//showNotification(text);
