const prompt = require('prompt-sync')();
let arr =[]
for (i =1 ; i<=10 ; i++){ 
    let n = Number(prompt(":erci de donner une valeur:"))
    arr.push(n)
}
console.log(arr) 