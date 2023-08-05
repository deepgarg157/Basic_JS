// =======this concept===========

// Important note :- (this ko hum object k ander function hai then we can use this keyword)
const user = {
    username: "Deepanshu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Deepanshu"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Deepanshu"
//     console.log(this.username);
// }

// =========arrow function==========
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

//=========this concept================ 
const obj={
    name:"Deepanshu",
    age:25,
    email:function(){
        console.log(`i am ${this.name}`);
    }
}

obj.email()



// function one(){
//     const userame="Deep"
//     console.log(this);
// }
// one()

const user1=(num3, num4)=> (num3+num4)

console.log(`sum of two numbers ${user1(3,4)}`);

