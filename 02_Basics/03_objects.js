// object

const mySym = Symbol("key1")

const JSuser={
    name:"Deepanshu",
    "full name":"Deepanshu garg",
    age:25,
    email:"Deepgarg@gmail.com",
    location:"Noida",
    isLoggedIN:false,
    lastDaysLogged:["Monday","Tuesday"],
    [mySym]:"myKey1"
    //[mySym] is the symbol datatype
}

// console.log(JSuser.email);
// console.log(JSuser["name"]);
// console.log(JSuser["full name"]);

JSuser.email="deepgarg777@gmail.com"
// console.log(JSuser.email);


JSuser.greeting=function(){
    console.log("Hello user");
}

JSuser.greetingNew=function(){
   console.log(`hello user ${this["full name"]}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingNew());