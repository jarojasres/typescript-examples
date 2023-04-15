"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
const charactersCollection = new CharactersCollection_1.CharactersCollection("Xaayb");
charactersCollection.sort();
const linkedListCollection = new LinkedList_1.LinkedList();
linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-3);
linkedListCollection.add(4);
linkedListCollection.sort();
console.log({ linkedListCollection });
// console.log({
//   characters: charactersCollection.data, 
//   numbers: numbersCollection.data});
linkedListCollection.print();
