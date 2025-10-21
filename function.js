// JS functions execute ehrn something invokes the function i.e :WHEN IT IS INVOKED FROM JS CODE,
// WHEN AN EVENT OCCURS
//  OR AUTOMATICALLY

function toFarenheit(celcius) {
    return (celcius * 1.8) + 32;
}

let value = toFarenheit(28);
console.log(value);

// this logs 82.4

// FUNCTION TO CALCULATE PRODUCT OF TWO NUMS IN NORMAL AND ARROW FORMAT
function prod(a, b){
    return a * b;
}
const prodFunction = (a, b) => a * b;

console.log(prod(12, 2));
console.log((prodFunction(2,3)));

let x = toFarenheit(27);
let text = "the product is  " + x + " farenheit";

let y = prodFunction(3, 8);
let notice = "the product is " + y + ".";
console.log(text);
console.log(notice);

// FUNCTIONS, PARAMETERS, ARGUMENTS
// parameters are names listed in the function definition, basically the names of the values that will be passed
// arguments are vaalues passed to the function when it is invoked, basically values received by the function


// OBJESTS!!!!!!!!!!!
const student = {
    fullname: "Nicolletta Oyinama Eneji",
    ID: 20220591,
    Residence: "Mississipi Hostel",
    Department: "Software Engineering",
    club: "Women in Tech",
    Level: "PG",
    Phone: +2348066541212,
    studentClub: function(){
        return this.fullname + " is in " + this.club + " club."
    }
}

student.hobby = "writing";
console.log(student);
console.log(student.Phone);
console.log(student.studentClub());

// Javascript Dates
const date = new Date("2025-10-20");
console.log(date);

function updateClock(){
    const now = new Date();

    const watTime = now.toLocaleString("en-NG",{
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12:true,   
    });

}
updateClock();
setInterval(updateClock, 1000);

// updateClock(); setInterval(updateClock, 1000); updates everysevon

