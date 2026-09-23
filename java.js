   
const prompt = require('prompt-sync')()
const name = prompt('What is your name? ')
let age = Number(prompt('What is your age? '))
age +=10
console.log(age)
if (age >= 18){  
    console.log(" t sera majeur")
  }
else{ console.log(" t un mineur");
}  