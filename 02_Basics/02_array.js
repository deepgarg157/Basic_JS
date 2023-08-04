// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

// =====================own pratice==========================

const newArray1=["user1", "user2", "user3", "user4"]
const newArray2=["user5", "user6", "user7", "user8"]

// newArray1.push(newArray2)
// console.log(newArray1)

const all_new_array=newArray1.concat(newArray2)
// console.log(all_new_array);

const all_new_array1=[...newArray1,...newArray2]
// console.log(all_new_array1);

const another_array=[1, 2, 3, 4, [5, 6, 7], 8, 9, [10, 11, 12]]
const another_new_array=another_array.flat(Infinity)
// console.log(another_new_array);

// console.log(Array.isArray("Deepanshu"))

// console.log(Array.from("Deepanshu")); 
// output['D', 'e', 'e','p', 'a', 'n','s', 'h', 'u']

// console.log(Array.from({name:"Deepanshu"})); //important 
// output []

let num1=100
let num2=200
let num3=300

console.log(Array.of(num1,num2,num3));
