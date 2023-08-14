// reduce in java script

const numbers=[1, 2, 3, 4]

// this reduce are through function
// const newNumbers=numbers.reduce(function(acc, currentval){
//     console.log(`acc: ${acc} , curreny value:${currentval}`);
//           return acc+currentval
// },0)
// console.log(`total sum ${newNumbers}`);


// this reduce are through arrow function
const newNumbers=numbers.reduce( (acc, currentval)=> acc+currentval,0)

// console.log(newNumbers);

const course=[
    {
        courses:"java script",
        price:23000
    },
    {
        courses:"java",
        price:2300
    },
    {
        courses:"py",
        price:2000
    }
]

const TotalPay=course.reduce((acc,items)=> acc+items.price,0)

// console.log(TotalPay);

const str=[
    {
        firstName:"deep",
        lastName:"garg",
        age:23
    },
    {
        firstName:"xyz",
        lastName:"ere",
        age:28
    },
    {
        firstName:"sds",
        lastName:"we",
        age:30
    },
]
// ['deepgarg',"xyzere"]

// const newString=str.filter((num)=>num.age>27).map((first)=>first.firstName+first.lastName)

const newString=str.reduce((acc,items)=>acc+items.firstName,27)
console.log(newString);


