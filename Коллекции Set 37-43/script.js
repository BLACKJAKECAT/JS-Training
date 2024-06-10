//37.1
let mySet = new Set();

mySet.add("apple");
mySet.add("banana");
mySet.add("apple");

console.log("Размер коллекции Set:", mySet.size);

console.log("Элементы в коллекции Set:");
mySet.forEach((item) => {
  console.log(item);
});

//38.1

let arr = [1, 2, 3, 1, 3, 4];

let mySet1 = new Set(arr);

console.log("Элементы в коллекции Set:");
mySet1.forEach((item) => {
  console.log(item);
});

//38.2

let mySet2 = new Set([1, 2, 3]);

mySet2.add(2);

console.log("Элементы в коллекции Set:");
mySet2.forEach((item) => {
  console.log(item);
});

//39.1

let mySet3 = new Set([1, 2, 3]);

let numberOfElements = mySet3.size;

document.getElementById(
  "result"
).innerText = `Количество элементов в коллекции Set: ${numberOfElements}`;

//39.2

let mySet4 = new Set([1, 2, 3]);

let hasValue3 = mySet4.has(3);

let hasValue4 = mySet4.has(4);

let resultText = `Элемент со значением 3 ${
  hasValue3 ? "найден" : "не найден"
} в коллекции.\n`;
resultText += `Элемент со значением 4 ${
  hasValue4 ? "найден" : "не найден"
} в коллекции.`;

document.getElementById("resultat").innerText = resultText;

//40.1

let mySet5 = new Set([1, 2, 3, 4, 5]);

let sum = 0;

mySet5.forEach((element) => {
  sum += element;
});

let resultText1 = `Сумма элементов коллекции: ${sum}`;

document.getElementById("resultati").innerText = resultText1;

//41.1

let mySet6 = new Set([1, 2, 3, 4, 5]);

let arrayUsingDestructuring = [...mySet6];

let arrayUsingArrayFrom = Array.from(mySet6);

console.log("Преобразование с помощью деструктуризации:");
console.log(arrayUsingDestructuring);

console.log("\nПреобразование с помощью метода Array.from:");
console.log(arrayUsingArrayFrom);

//41.2

let myArray = [1, 2, 3, 4, 5];

let mySet7 = new Set(myArray);

console.log("Преобразование массива в коллекцию Set:");
console.log(mySet);

//42.1

let myArray1 = [1, 2, 2, 3, 4, 4, 5];

let mySet8 = new Set(myArray1);

let myArray2 = Array.from(mySet8);

console.log(`Удаление дубликатов: ${myArray2}`);


//43.1

document.addEventListener('DOMContentLoaded', function() {
    let paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(function(paragraph) {
        paragraph.addEventListener('click', function() {
            paragraph.textContent += '!';
        });
    });

    let addButton = document.getElementById('addExclamation');
    addButton.addEventListener('click', function() {
        paragraphs.forEach(function(paragraph) {
            paragraph.textContent += '!';
        });
    });
});