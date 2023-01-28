// 1.1

const mySuperHero = "Hulk";
console.log(mySuperHero);

// 1.2

const x = 50;
console.log(x);

// 1.3 

const h = 5;
const y = 10;


// 1.4

const z = h + y;
console.log(z);

// 2.1

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character);

// 2.2

const firstName = 'Jon'; 
const lastName = 'Snow'; 
const age = 24; 

console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);

// 2.3

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

const sumPrice = toy1.price + toy2.price;
console.log(sumPrice);

// 2.4

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;
car1.finalPrice = globalBasePrice + car1.finalPrice;
car2.finalPrice = globalBasePrice + car2.finalPrice;

console.log(car1, car2);

// 3.1

console.log(10 * 5);

// 3.2

console.log(10 / 2);

// 3.3

console.log(15 % 9);

// 3.4

const p = 10;
const j = 5;

const o = p + j;
console.log(o);

// 3.5

const c = 10;
const m = 5;

const i = c * m;
console.log(i);

// 4.1

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

for (const avenger of avengers) {
    if (avenger === "HULK") {
        console.log(avenger);
    }
}

// 4.2

avengers.splice(0, 1, "IRONMAN");
console.log(avengers);

// 4.3

const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length);

// 4.4

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters.length)

for (let index = 0; index < rickAndMortyCharacters.length; index++) {
   if(index === rickAndMortyCharacters.length - 1) {
    console.log(rickAndMortyCharacters[index]);
   }
    
}

// 4.5

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters1.pop();
for (let index1 = 0; index1 < rickAndMortyCharacters1.length; index1++) {
    if (index1 === 0) {
        console.log(rickAndMortyCharacters1[index1]);
    }
    if (index1 === rickAndMortyCharacters.length - 1) {
        console.log(rickAndMortyCharacters1[index1]);
    }
    
}

// 4.6

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters2.splice(1, 1)
console.log(rickAndMortyCharacters2);

// 5.1

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 != number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 === number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 === number1 && number1 * 2 === number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 === number1 || number1 / 5 === number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// 6.1

for (let index2 = 0; index2 <= 9; index2++) {
    console.log(index2);
}

// 6.2

for (let index3 = 0; index3 <= 9; index3++) {
    if(index3 %2 === 0) {
        console.log(index3);
    }
    
}

// 6.3

for (let index4 = 0; index4 <= 9; index4++) {
    if (index4 < 9) {
        console.log("Intentando dormir 🐑");

    } else {
        console.log("Dormido!");
    }
    
}
