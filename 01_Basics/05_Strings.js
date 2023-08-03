 let firstName="Deepanshu";
 let fullName=" Garg";
//  console.log(firstName+fullName); this is called the concatenation

 console.log(`hello ${firstName}${fullName} welcome to my coding world`);

// This is a object 
 let newName=new String("Deepanshu Garg");
 console.log(newName)

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/blink

//  String Functions
 console.log(newName.length)
 console.log(newName.indexOf('e'))
 console.log(newName.lastIndexOf('h'))
 console.log(newName.toUpperCase())
 console.log(newName.toLowerCase())
 console.log(newName.substring(0,4))
 console.log(newName.slice(0,4))
 console.log(newName.slice(-8,6))

 let spaceName="      Deeapanshu garg     "
 console.log(spaceName);
 console.log(spaceName.trim());

 let url="https://deepanshu%20garg/deep";
 console.log(url)
 console.log(url.replace('%20','-'));

 console.log(newName.includes('Deepanshu'))
 console.log(newName.includes('sudhar'))

 const sentence="this is a index sentence"
 console.log(sentence.at(5));
 console.log(sentence.at(-6))






