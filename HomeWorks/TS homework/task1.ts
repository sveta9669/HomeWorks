// Exercise 1: Basic Types and Functions
// 1. Task: Define variables of different 
// basic types (number, string, boolean) and write 
// functions that take these types as parameters and return a value.

let number: number = 11; 
let text: string = 'data types' 
let isLearnt = false; 
 
 
function numberSum(num: number): number { 
    return num * num 
} 
 
function learn(t: string): string { 
    return 'Learn ' + t 
} 
 
function ulearnt(bool: boolean): any { 
    if (bool) { 
        alert('u learnt Learn TS') 
    } else { 
        alert("Go and learn") 
        bool = true 
    } 
    if (bool) { 
        return "u did it" 
    } 
} 
console.log(numberSum(number)) 
console.log(learn(text)) 
console.log(ulearnt(isLearnt))