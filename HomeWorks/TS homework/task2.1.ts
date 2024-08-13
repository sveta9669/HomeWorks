// Exercise 2: Enums and Interfaces
// 1. Task: Create an enum Color with 
// values Red, Green, and Blue. Write a 
// function that takes a Color and returns 
// a string describing the color. 


enum Color { 
    Red = "Red", 
    Green = "Green", 
    Blue = "Blue" 
} 
 
function describeColor(color: Color): string { 
    switch (color) { 
        case Color.Red: 
            return "First color fo Armenina flag is red"; 
        case Color.Green: 
            return "In Armenia we say, 'Green chanaparh'"; 
        case Color.Blue: 
            return "Kapuyt erkinq, paycar arev"; 
        default: 
            return "Unknown color."; 
    } 
} 
 
console.log(describeColor(Color.Red));    
console.log(describeColor(Color.Green));  
console.log(describeColor(Color.Blue));