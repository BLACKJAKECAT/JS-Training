//ПРАКТИКА

//1 Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

function sumArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

// Пример использования функции
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayElements(numbers));

//2 Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

function divide(number) {
  let del = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      del.push(i);
    }
  }
  return del;
}
console.log(divide(10));

//3 Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

function stringToArray(str) {
  return str.split('');
}
const text = 'Hello';
console.log(stringToArray(text));

//4 Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.


function stringToArray(str) {
  return str.split('');
}
const text1 = 'Hello';
console.log(stringToArray(text1));

//5 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

function zag(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const text2 = 'hello';
console.log(zag(text2));

//6 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.

function capitalizeWords(str) {
  return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
  });
}

const text3 = 'hello world';
console.log(capitalizeWords(text3));

//7 Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

function fillArray(n) {
   let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
}
console.log(fillArray(5)); 
console.log(fillArray(10)); 

//8 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

function sumOfDigits(number) {
  let sum = 0;
  let numStr = number.toString();
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum;
}
console.log(sumOfDigits(123)); 
console.log(sumOfDigits(456)); 

//9 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.

let year = 2024;
function god(year) {
  if (year % 4 != 0) {
    console.log("Год не високосный.");
  } else if (year % 100 == 0)
    if (year % 400 == 0) {
      console.log("Год високосный.");
    } else {
      console.log("Год не високосн");
    }
  else {
    console.log("Год високосный.");
  }
}
console.log(god(year));
//10 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function secondsToDays(seconds) {
  let days = seconds / 86400;
  return days;
}
console.log(secondsToDays(86400));
console.log(secondsToDays(172800));
//11 Сделайте функцию, которая будет возвращать случайный элемент из массива.

function RandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length); 
  return array[randomIndex]; 
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(RandomElement(myArray)); 

//12 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

function isPrime(number) {
  if (number <= 1) {
    return false; 
  }

  for (let i = 2; i <= Math.sqrt(number); i++) { 
    if (number % i === 0) {
      return false; 
    }
  }

  return true; 
}

console.log(isPrime(7)); 
console.log(isPrime(10)); 