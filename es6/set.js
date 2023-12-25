//set 
let animals = new Set(["gà", "vịt"])
animals.add("bò")
console.log(animals.values());
// for (const animal of animals.values()) {
//     console.log(animal);
// }
animals.delete("bò")
console.log(animals.values());
