let cart = {
    'sms321': 0,
    'rms123': 0,
};
document.onclick = (event) => {
    //console.log(event);
    if (event.target.classList.contains('plus')) {
        plusfunction(event.target.id);
        //console.log(event.target.id);
    }
    if (event.target.classList.contains('minus')) {
        minusFunction(event.target.id);
        //console.log(event.target.id);
    }
}
const plusfunction = id => {
    cart[id]++;
    renderCart();
    //console.log(cart);
}
const minusFunction = id => {
    if (cart[id]['count'] - 1 == 0) {
        deletefunction(id);
        return true;
    }
    if (cart[id] > 0)
        cart[id]--;
    renderCart();

}
const renderCart = () => {
    console.log(cart);

}

    var Accumulator = function (startingValue) {
        this.value = startingValue;
        this.read = function () {
            let a = prompt("Введите число");
            var x = Number(a);
            //console.log(a);
            this.value += (x);
        }
    }
    
    var kar = new Accumulator(3);
//let check = prompt('Желаете ?')
//if (check = 'да'){
let bar = 2;
if (bar !==1)
while (true) {
    //console.log(kar.value);
    //console.log(kar);
    console.log(kar.value);
    kar.read();
    console.log(kar.value);
    let check = prompt('Желаете продолжить ?')
    if (check=='нет')
        break;
}
