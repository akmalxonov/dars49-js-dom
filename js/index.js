// 1
import {add,subtract} from "./mathUtils.js"
add(5,6)
subtract(10,1)

// 2
import capitaliza from "./stringUtils.js"
capitaliza("hello")

// 3
import defoultSort,{ maxElement,minElement } from "./arrayUtils.js"
let arr = [32,56,3,15,25,82,95]
defoultSort(arr)
maxElement(arr)
minElement(arr)

// 4
function divide(a,b){
    if(b === 0){
        throw new Error("nolga bolinishi mukun emas!")
    }   
    console.log(a/b);
}
try{
    divide(6,0)
}catch(error){
    console.log(error);
}