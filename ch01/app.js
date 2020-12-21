"use strict";
//Declaring the type definition for add function argument
function add(a, b) {
    return a + b;
}
var x = 5;
var y = 7;
console.log(add(x, y));
//Declaring type defined to unasigned type
var counter;
var name2;
counter = 20;
name2 = "sandeep";
//Array type
var list = [1, 2, 3];
var cities = ["bangalore", "london", "leeds"];
//tuple
var population = ["bangalore", 3750000];
//Object type definitions
var employ = {
    id: 2313,
    name: "saneep",
    workFromHome: true,
    lang: ["kan", "hin", "eng", "tel", "tam"],
    team: [10, "Digital"],
};
console.log(employ);
console.log(employ.id);
console.log(employ.name);
console.log(employ.workFromHome);
console.log(employ.lang.toString());
console.log(employ.team.toString());
var employ2 = {
    id: 2313,
    name: "saneep",
    workFromHome: true,
    lang: ["kan", "hin", "eng", "tel", "tam"],
    team: [10, "Digital"],
};
console.log(employ2);
console.log(employ2.id);
console.log(employ2.name);
console.log(employ2.workFromHome);
console.log(employ2.lang.toString());
console.log(employ2.team.toString());
var days;
(function (days) {
    days[days["SUN"] = 0] = "SUN";
    days[days["MON"] = 1] = "MON";
    days[days["TUE"] = 2] = "TUE";
    days[days["WED"] = 3] = "WED";
    days[days["THU"] = 4] = "THU";
    days[days["FRI"] = 5] = "FRI";
    days[days["SAT"] = 6] = "SAT";
})(days || (days = {})); // enum
//console.log(Object.keys(days).map((key) => days[key]));
for (var day in days) {
    console.log(day.length);
}
var salary; //Union type
salary = 20000;
console.log(salary);
salary = "twenty thousand";
console.log(salary);
// Union type
var printsalary = function (amt) {
    console.log(amt);
};
printsalary(30000);
printsalary("thirty thousand");
var newSalary = function (amt) {
    console.log(amt);
};
newSalary(40000);
newSalary("fourty thousand");
//Return type, void
// define return type as number
function add2(a, b) {
    return a + b;
}
console.log("return type is number " + add2(8, 10));
// return type is not defined but infered
function add3(a, b) {
    return "return type is string " + a + b;
}
console.log(add3(8, 10));
//return type is void, as fun is not returning anything
function add4(a, b) {
    console.log("return type is void");
}
add4(8, 10);
//Function type
function onefun(one) {
    return "from one fun";
}
function twofun(one, two) {
    return 10;
}
function threefun(one, two) {
    return true;
}
var newfun; // defining function type
//newfun = onefun;
//newfun = twofun;
newfun = threefun;
console.log("new fun return " + newfun("one", 2));
//type unknown
var input; // requires type check
input = 8;
input = "eight";
//Never type
function generateErro(desc, code) {
    throw { message: desc, errorcode: code };
}
console.log("test console log");
//let result = generateErro("test error", 400);
console.log("test console log");
function newproduct(item) {
    console.log("Product details,  Name = " + item.name + ", Desc = " + item.desc + ", Size = " + item.size);
}
newproduct({
    name: "polo",
    desc: "vw car",
    size: 100,
});
