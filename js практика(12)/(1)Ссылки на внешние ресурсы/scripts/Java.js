var out = document.querySelectorAll('a');

for (let link of out) {
 console.log(link);
    if(link.classList.contains("out")){
        link.style.color="red";
    }
}