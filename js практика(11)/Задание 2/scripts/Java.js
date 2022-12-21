

let arr =[0,1,2,3,4,5,6,7,8,9,10]
let arr3 =[];
console.log(arr);
let a = 2;
let b = 7;
function filter(massive){
    let arr2 =[]
    for (let i of massive){
        if (massive[i]>=a){
            if (massive[i]<=b)
                arr2.push(massive[i]);
        }
    }
    return arr2;
    
}
arr3=filter(arr);
console.log(arr3);

