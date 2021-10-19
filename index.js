const prompt = require("prompt-sync")()
function fib(n){
    let ele1 = 0
    let ele2= 1
    let temp = 0
    for(let i =0;i<n;i++){
        console.log(ele1)
        temp  = ele1+ele2
        ele1 = ele2
        ele2 = temp
    }
}
const num = parseInt(prompt("enter the number :"))
fib(num)