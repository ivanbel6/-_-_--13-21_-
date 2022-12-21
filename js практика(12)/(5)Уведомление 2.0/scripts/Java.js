let base = document.querySelector(".section");
let childr = base.childNodes;

//let childrens = document.querySelectorAll(".section");
let i = 1;
let j = 0;
//console.log(childr);
let arr = [];
for (let link of childr) {
    //if (link.classList.contains("alert"))  
    if (link.tagName == 'DIV') {
        var div = document.createElement("a");
        
        div.innerText = "X";
        div.style.display = "inline-block";
        div.style.float = "right";
        div.style.marginTop = "-20px";
        
       
       
        arr[j] = link;
        arr[j].append(div);

        console.log(div.parentNode);

        j++;

    }
     //    console.log(link.classList.contains(".alert"));
}
base.addEventListener('click',function(event){
    if (event.target.innerHTML="X"){
        console.log(this)
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentElement.parentNode);
    }
});
console.log(arr);

function funct() {
    console.log("sdfg");
}

function func() {
    i++;
    if (i % 2 == 0) {
        base.style.opacity = "1";
    } else {
        base.style.opacity = "0";
    }
}
//function showNotification(options){
//   
//    div.classList.add("notification");
//    div.textContent=text;
//    base.append(div);
//    console.log(div);
//    console.log(base);
//    setTimeout(func, 1500);
//}
//function func(){
////    console.log(base);
//    base.removeChild(div);
//}
//var out = document.querySelectorAll('a');
//
//for (let link of out) {
// console.log(link);
//    if(link.classList.contains("out")){
//        link.style.color="red";
//    }
//}
