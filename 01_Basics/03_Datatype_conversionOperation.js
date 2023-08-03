// let score="33aa";
// let score= null
// let score=undefined
let score=true

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber=Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let number=0;
// let booleanNumber=Boolean(number)
// console.log(booleanNumber)

// let number=33;
// let stringNumber=String(number)
// console.log(stringNumber)
// console.log(typeof stringNumber)


let str1="Deepanshu";
let str2=" Garg";
let fullName=str1+str2;
console.log(fullName);

let newStr=fullName.concat(" Started the new journey");
console.log(newStr);

// post increment ++ and ++ pre increment
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);

let a=2;
const b=++a;
console.log(`a:${a},b:${b}`);

// ============================Conversions================================

let score1 = "hitesh"

//console.log(typeof score1);
//console.log(typeof(score1));

let valueInNumber1 = Number(score1)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str3 = "hello"
let str4 = " hitesh"

let str5 = str3 + str4
// console.log(str5);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion