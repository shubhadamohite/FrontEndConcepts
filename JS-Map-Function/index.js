"use strict";

let arr = [2, 3, 5, 7];

arr.map(function(element, index, array){}, this);


let completeUserData = [
  
  //start of object 1
  {
    firstName: "Susan",
    lastName: "Steward",
    pronouns: {
      main: { capitalized: "She", lowerCase: "she" },
      possessive: { capitalized: "Her", lowerCase: "her" }
    },
    additionalInfo: {
      hometown: "Sidney",
      favoriteColor: "green",
      favoriteSeason: "summer",
      favoriteFood: "pizza",
      pet: { name: "Charlie", species: "dog" },
      siblings: ["John", "Jerry", "Samantha"]
    }
  },

  //start of object 2
  {
    firstName: "Daniel",
    lastName: "Longbottom",
    pronouns: {
      main: { capitalized: "He", lowerCase: "he" },
      possessive: { capitalized: "His", lowerCase: "his" }
    },
    additionalInfo: {
      hometown: "London",
      favoriteColor: "blue",
      favoriteSeason: "spring",
      favoriteFood: "tacos",
      pet: { name: "Luna", species: "dog" },
      siblings: ["Sarah", "Jenny", "Samantha"]
    }
  },

  //start of object 3
  {
    firstName: "Jacob",
    lastName: "Black",
    pronouns: {
      main: { capitalized: "He", lowerCase: "he" },
      possessive: { capitalized: "His", lowerCase: "his" }
    },
    additionalInfo: {
      hometown: "New York",
      favoriteColor: "yellow",
      favoriteSeason: "fall",
      favoriteFood: "sushi",
      pet: { name: "Milo", species: "cat" },
      siblings: ["Ralph", "Ronald", "Reggie", "Regina", "Rachel"]
    }
  }
];

let biographies = completeUserData.map((element,index,array) => {
    let siblings = element.additionalInfo.siblings;
    let siblingsString = siblings.length > 1 ? siblings.slice(0,-1).join(', ') + ' and '+siblings.slice(-1)+".": siblings.join("");
 return `${index}. ${element.firstName} ${element.lastName} is from ${element.additionalInfo.hometown}. ${element.pronouns.main.capitalized} has a ${element.additionalInfo.pet.species} named ${element.additionalInfo.pet.name}. ${element.pronouns.possessive.capitalized} favorite color is ${element.additionalInfo.favoriteColor} and ${element.pronouns.possessive.lowerCase} favorite food is ${element.additionalInfo.favoriteFood}. ${element.pronouns.possessive.capitalized} siblings are ${ siblingsString} `
// console.log(array.map((x)=>{console.log(x.additionalInfo.hometown)}))
//  [Appropriate pronoun] has a [pet species] named [pet name]. 
//  [Appropriate pronoun] favorite color is [favorite color] and 
//  [appropriate pronoun] favorite food is [favorite food]. 
//  [Appropriate pronoun] siblings are [siblings].)
//   console.log(index)
//   console.log(array)  
})

// console.log(biographies)

console.log(arr.slice(-1))
/* 

        Challenge

Use the map method to generate a new array of biographies 
for our users from the previous tutorial. Each of the 
biographies should look like this:

["1. Susan Steward is from Sidney. She has a dog named Charlie. 
 Her favorite color is green and her favorite food is pizza. Her 
 siblings are John, Jerry, and Samantha.", "2. Daniel Longbottom is..." etc.]

 It should use the following format, which you can use as a template: 

*/