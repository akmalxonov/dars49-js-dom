export default function defoultSort(arr){
    arr.sort((a,b)=> {return a-b})
    console.log("tartibga solindi",arr);
}
export function maxElement(arr){
    console.log("katta son",Math.max(...arr));
}
export function minElement(arr){
    console.log("kichik son",Math.min(...arr));
}