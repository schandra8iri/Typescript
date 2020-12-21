//Declaring the type definition for add function argument
function add(a: number, b: number) {
  return a + b;
}

const x = 5;
const y = 7;

console.log(add(x, y));

//Declaring type defined to unasigned type

let counter: number;
let name2: string;

counter = 20;
name2 = "sandeep";

//Array type

let list: number[] = [1, 2, 3];

let cities: Array<String> = ["bangalore", "london", "leeds"];

//tuple

let population: [String, number] = ["bangalore", 3750000];

//Object type definitions

const employ = {
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

const employ2: {
  id: number;
  name: String;
  workFromHome: Boolean;
  lang: String[]; // declare a string array
  team: [number, String]; // declare a tuple, an array with fixed type and length
} = {
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

enum days {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
} // enum

//console.log(Object.keys(days).map((key) => days[key]));

for (let day in days) {
  console.log(day.length);
}

let salary: number | String; //Union type

salary = 20000;
console.log(salary);
salary = "twenty thousand";
console.log(salary);

// Union type
const printsalary = (amt: number | String) => {
  console.log(amt);
};

printsalary(30000);
printsalary("thirty thousand");

type saltype = number | String; // Type aliases

const newSalary = (amt: saltype) => {
  console.log(amt);
};

newSalary(40000);
newSalary("fourty thousand");

//Return type, void

// define return type as number
function add2(a: number, b: number): number {
  return a + b;
}

console.log("return type is number " + add2(8, 10));

// return type is not defined but infered
function add3(a: number, b: number) {
  return "return type is string " + a + b;
}

console.log(add3(8, 10));

//return type is void, as fun is not returning anything
function add4(a: number, b: number) {
  console.log("return type is void");
}

add4(8, 10);

//Function type

function onefun(one: number) {
  return "from one fun";
}

function twofun(one: number, two: String) {
  return 10;
}

function threefun(one: String, two: number): boolean {
  return true;
}

let newfun: (bee: String, count: number) => boolean; // defining function type

//newfun = onefun;
//newfun = twofun;
newfun = threefun;

console.log("new fun return " + newfun("one", 2));

//type unknown

let input: unknown; // requires type check

input = 8;
input = "eight";

//Never type

function generateErro(desc: String, code: number): never {
  throw { message: desc, errorcode: code };
}

console.log("test console log");

//let result = generateErro("test error", 400);
console.log("test console log");

//console.log("return from generate error :" + result);

//interface
interface product {
  name: String;
  desc?: String;
  size: number;
}

function newproduct(item: product) {
  console.log(
    `Product details,  Name = ${item.name}, Desc = ${item.desc}, Size = ${item.size}`
  );
}

newproduct({
  name: "polo",
  desc: "vw car",
  size: 100,
});

newproduct({
  name: "ecosport",
  size: 100,
});

// interface function

interface productdetailswithcode {
  (code: number): product;
}

interface productdetailswithseo {
  (seoname: String): product;
}

let getmyproductwithcode: productdetailswithcode;
let getmyproductwithseo: productdetailswithseo;

let newpolo = {
  name: "polo",
  desc: "vw car",
  size: 100,
};

let newfrod = {
  name: "ecosport",
  size: 100,
};

getmyproductwithcode = function (code: number): product {
  //logic
  return newpolo;
};

getmyproductwithseo = function (seoname: String): product {
  //logic
  return newfrod;
};
