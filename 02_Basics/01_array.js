const myArray=[0, 1, 2, 3, 4, 5]
// console.log(typeof myArray)

// console.log(Array[0])
// console.log(Array[1])
// console.log(Array[2])
// console.log(Array[3])
// console.log(Array[4])
// console.log(Array[5])

const newArray=new Array(0, 1, 2, 3, 4, 5)
console.log(typeof newArray)

// ===============methods in array====================
myArray.push(6)
myArray.pop(6)
// console.log(myArray)

// ===========make a new prototype function==========
const myArray1=[0, 1, 2, 3, 4, 5]
Array.prototype.sum=function(){
    let total=0;
    for(let i=0;i<this.length;i++){
        total+=this[i];
    }
    return total;
}
console.log(myArray.sum())

// =======================slice & splice=========================

const myArray2=[0, 1, 2, 3, 4, 5]
// const user1=myArray2.slice(1,3) 
// console.log(myArray2);
// console.log(user1);
// const user2=myArray2.splice(1,3)
// console.log(myArray2)
// console.log(user2)


console.log("A ", myArray2);

const myn1 = myArray2.slice(1, 3)

console.log(myn1);
console.log("B ", myArray2);


const myn2 = myArray2.splice(1, 3)
console.log("C ", myArray2);
console.log(myn2);