// Exercise 3: Enums and Type Assertions
// 1. Task: Create an enum for different user 
// roles (Admin, User, Guest). Write a function 
// that takes a role and returns a message based 
// on the role. Use type assertions where appropriate.


enum UserRole { 
    Admin = "Admin", 
    User = "User", 
    Guest = "Guest" 
} 
 
function showMess(role: UserRole): string { 
    switch (role) { 
        case UserRole.Admin: 
            return "u r admin! full access."; 
        case UserRole.User: 
            return "u r user! some access"; 
        case UserRole.Guest: 
            return "u r guest! no access."; 
        default: 
            const _role: never = role;  
            return "no role"; 
    } 
} 
 
console.log(showMess(UserRole.Admin));  
console.log(showMess(UserRole.User));  
console.log(showMess(UserRole.Guest));
