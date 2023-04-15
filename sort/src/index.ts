import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();

const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();

const linkedListCollection = new LinkedList();

linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-3);
linkedListCollection.add(4);

linkedListCollection.sort();

console.log({linkedListCollection});
// console.log({
//   characters: charactersCollection.data, 
//   numbers: numbersCollection.data});

linkedListCollection.print();