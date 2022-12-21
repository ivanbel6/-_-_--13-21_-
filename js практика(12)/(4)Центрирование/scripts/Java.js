const block = document.querySelector(".wrapper");
block.style.textAlign = "center";
var countt = 1;


 document.onclick = function (Event) {
        countt = countt + 1;
            let x = Event.x;
            let y = Event.y;
            console.log(x + ' ' + y)
 

}
