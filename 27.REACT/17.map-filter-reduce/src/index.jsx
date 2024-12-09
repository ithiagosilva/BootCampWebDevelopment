import React from "react";
import emojipedia from "./emojipedia";
console.log(emojipedia);

const newEmojipedia = emojipedia.map((emojiItem) => {
    return emojiItem.meaning.substring(0, 100)
});

console.log(newEmojipedia);

// let newArr = [];
// emojipedia.forEach((emojipediaItem) => {
//     newArr.push(emojipediaItem.meaning)
// });

// console.log(newArr);

// let newArrCut = [];
// newArr.forEach((stringItem) => {
//     newArrCut.push(stringItem.substring(0, 100))
// });

// console.log(newArrCut);


// let newArrCut = [];
// newArr.map((newArrItem) => {
//     newArrCut.push(newArrItem.substring(0, 100));
// });

// console.log(newArrCut)



// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

