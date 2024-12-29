import generateName from "sillyname";
import superheroes, { randomSuperhero } from "superheroes";

var sillyName = generateName();
var superHeroNames = superheroes;
var randomSuperHeroNames = randomSuperhero();

// console.log('My name is ' + sillyName + '.')
// console.log('My name is ' + superHeroNames[Math.floor(Math.random() * superHeroNames.length)] + '.')
console.log('My name is ' + randomSuperHeroNames + '.')

