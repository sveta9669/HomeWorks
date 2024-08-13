// 2. Task: Define an interface Car with properties make, 
// model, and year. Then create a class that implements 
// this interface and includes a method to display 
// the car's details.

interface Car { 
    make: string; 
    model: string; 
    year: number; 
} 
 
class MyCar implements Car { 
    make: string; 
    model: string; 
    year: number; 
 
    constructor(make: string, model: string, year: number) { 
        this.make = make; 
        this.model = model; 
        this.year = year; 
    } 
 
    details(): void { 
        console.log(`Car Details: ${this.year} ${this.make} ${this.model}`); 
    } 
} 
 
const myCar = new MyCar("BMW", "M5", 2020); 
myCar.details();