import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("Xaayb");

const characterSorter = new Sorter(charactersCollection);
const numberSorter = new Sorter(numbersCollection);
characterSorter.sort();
numberSorter.sort();
console.log({characters: charactersCollection.data, numbers: numbersCollection.data});