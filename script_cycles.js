// Задание 144
// Выведите в консоль все элементы следующего массива:
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
}

// Задание 145
// 1.Выведите в консоль все ключи следующего объекта:
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(key); 
}
// 2.Выведите в консоль все ключи следующего объекта:
let obj2 = {x: 1, y: 2, z: 3};
for (let key in obj2) {
	console.log(obj2[key]); 
}

// Задание 146
// 1.Выведите в консоль числа от 1 до 100. 
let i = 1;

while (i <= 100) {
	console.log(i);
	i++;
}
// 2.Выведите в консоль числа от 11 до 33.
/* let i1 = 11;

while (11 <= i1 <= 33) {
	console.log(i);
	i++;
}*/
// 3.Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
let num = 2;
let iteration_num = 0;
while (num < 1000) {
	num = num * 3;
	iteration_num ++;
}

console.log(num);
console.log(iteration_num);

// Задание 147
// 1.С помощью цикла for выведите в консоль числа от 1 до 100.
for (let i = 1; i <= 100; i++) {
	console.log(i);
}
// 2.С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.
for (let i = 0; i <= 100; i++) {
	if (i%2==0){
	console.log(i);
	}
}
// 3.С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
for (let i = 1; i <= 99; i++) {
	if (i%2!=0){
	console.log(i);
	}
}
// 4.С помощью цикла for выведите в консоль числа от 100 до 0.
for (let i = 100; i > 0; i--) {
	console.log(i);
}

// Задание 148
// 1. Выведите в консоль все элементы следующего массива:
let arr2 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i <= arr2.length - 1; i++) {
	console.log(arr[i]);
}
// 2.Выведите в консоль элементы следующего массива в обратном порядке:
let arr3 = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr.length - 1; i >= 0; i--) {
	console.log(arr3[i]);
}

// Задание 149
// 1.Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
let arr4 = [2, 5, 9, 15, 1, 4];
for (let elem of arr4) {
	if (3 < elem < 10) {
		console.log(arr4[elem]);
	}
}
// 2. Выведите в консоль те элементы объекта, значения которых - нечетные числа.
let obj3 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let obj3 = 1; obj3 <= 5; obj3 += 1) {
	if (obj3 % 2 !== 0) {
	  console.log(obj3);
	}
  }

// Задание 150
// 1.Найдите сумму четных чисел от 2 до 100.
let res = 0;

for (let i = 2; i <= 100; i++) {
	if (i % 2 == 0){
	res = res + i;
	}
}
console.log(res);
// 2. Найдите сумму нечетных чисел от 1 до 99.
for (let i = 1; i <= 99; i++) {
	if (i % 2 != 0){
	res = res + i;
	}
}
console.log(res);
// 3. Найдите произведение целых чисел от 1 до 20.
let res1 = 0;
for (let i = 1; i <= 20; i++) {
	res1 = res * i;
console.log(res1);
}

// Задание 151
// 1.Найдите сумму элементов этого массива.
let arr5 = [2, 5, 9, 3, 1, 4];
let res2 = 0;
for (let elem of arr5) {
	res2 += elem;
}
console.log(res2);
// 2.Найдите произведение элементов этого массива.
let arr6 = [2, 5, 9, 3, 1, 4];
let res3 = 1;
for (let elem of arr6) {
	res3 *= elem;
}
console.log(res3);
// 3.Найдите сумму элементов элементов, являющихся четными числами.
let arr7 = [2, 5, 9, 3, 1, 4];
let res4 = 0;
for (let elem of arr7) {
	if (elem % 2 == 0)
	res4 += elem;
}
console.log(res4);

// Задание 152
// 1.С помощью цикла сформируйте строку, заполненную 5-тью дефисами.
let str = '';

for (let i = 0; i < 5; i++) {
	str += '-';
}

console.log(str);
// 2.С помощью цикла сформируйте строку '123456789'.
let str2 = '';
for (let i = 1; i <= 9; i++) {
	str2 += i;
}
console.log(str2);
// 3.С помощью цикла сформируйте строку '987654321'.
let str3 = '';
for (let i = 9; i >= 1; i--) {
	str3 += i;
}
console.log(str3);
// 4.С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let str4 = '';
for (let i = 1; i <= 9; i++) {
	str4 += -i;
}
console.log(str4);

// Задание 153
// Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.
for (let i = 10; i <= 1000; i++) {
	let str = String(i); // преобразуем число в строку
		console.log(str[0]);
}

//Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.
for (let i = 10; i <= 1000; i++) {
	let str = String(i); // преобразуем число в строку
		console.log(Number(str[0]) + Number(str[1]));
}

//Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1
for (let i = 1; i <= 100; i++) {
	let str = String(i); // преобразуем число в строку
	
	if (str[0] === '1') {
		console.log(i);
	}
}

//Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
for (let i = 1; i <= 100; i++) {
	let str = String(i); // преобразуем число в строку
	
	if (Number(str[0] + Number(str[2])) == '5') {
		console.log(i);
	}
}

// Задание 154
/* Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0.
 После этого цикл должен завершить свою работу.*/
let arr8 = [1, 2, 3, 4, 5];

for (let elem of arr8) {
	if (elem != 0) {
		console.log(elem);
    }else{
    	break; // выйдем из цикла
	}
}

// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
let arr9 = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr9) {
	if (elem >= 0) {
        sum += elem;
    }else{
    	break; // выйдем из цикла
	}
}
console.log(elem);

//Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
let arr0 = [1, 2, 3, 4, 5];
let pos = 0;
for (let elem of arr0) {
	if (elem == 3) {
        break; // выйдем из цикла
    }else{
    	pos += 1;
	}
}
console.log(pos);

//Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
let sh = 0;
let k = 0;
for (let i = 1; ; i++) {
	if (sh > 100) {
        break; // выйдем из цикла
    }else{
    	sh += i;
        k += 1;
	}
}
console.log(k);

// Задание 156
// С помощью двух вложенных циклов выведите на экран следующую строку: 111222333444555666777888999
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i);
	}
}

//С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33
for (let i = 10; i <= 30; i += 10) {
    let num;
    for (let j = 1; j <= 3; j++){
        num = i + j;
        console.log(num + ' ');
    }
}

// Задание 159
//Используя цикл и метод push заполните массив числами от 1 до 10.
let arr12 = [];
for (let i = 1; i <= 10; i++) {
	arr12.push(i);
}
console.log(arr12);

//Используя цикл и метод push заполните массив 10-ю буквами 'x'.
let arr13 = [];
for (let i = 1; i <= 10; i++) {
	arr13.push('x');
}
console.log(arr13);

//Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr14 = [1, 2, 3, 4, 5, -1, 7, 6];
let arr_new = [];
for (let elem of arr14) {
	if (elem > 0) {
        arr_new.push(elem)
}
console.log(arr_new);
}

// Задание 160
//Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
let arr15 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr15.length; i++) {
	arr15[i] = arr15[i] ** 2;
}
console.log(arr15); 

//Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
let arr16 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr16.length; i++) {
	arr16[i]--;
}
console.log(arr16); // выведет [2, 3, 4, 5, 6]

//Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
let arr17 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr17.length; i++) {
	arr17[i] += 10;
}
console.log(arr17); // выведет [6, 7, 8, 9, 10]

// Задание 161
//С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
let arr11 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr22 = [1, 2, 3, 4, 5, 6, 7];
let obj5 = {};
for (let i = 0; i <= 6; i++) {
	let key = arr11[i];
	let value = arr22[i];
	obj5[arr22] = arr11;
}
console.log(obj5);


//Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
let obj4 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj_new = {};
for (let i in obj1) {
if (obj4[i] % 2 === 0) {
    obj_new[i] = obj4[i];
}
}
console.log(obj_new);

// Задание 162
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
let obj7 = {x: 1, y: 2, z: 3};
for (let key in ob7j) {
	obj7[key] = obj7[key] ** 2;
}
console.log(obj7);

// Задание 163
// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arr10 = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr10) {
	if (elem == 'c') {
		flag = true;
		break;
	}
}

if (flag === true) {
	console.log('+++');
} else {
	console.log('---');
}

//Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа.
let num2 = 31;
let flag3 = true;
for (let i = 2; i < num; i++) {
	if (num2 % i == 0) {
		flag3 = false;
		break; // выйдем из цикла
	}
}
console.log(flag);

// Задание 164

/*Дан массив:

let arr = [10, 20, 30, 40, 21, 32, 51];
Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму. */

let arr = [10, 20, 30, 40, 21, 32, 51];  
 
let sum = arr.filter(element => { 
  let firstDigit = Math.floor(element / 10); 
  return firstDigit === 1 || firstDigit === 2; 
}).reduce((acc, cur) => acc + cur, 0); 
 
console.log(sum);

// Задание 165
//Исправьте ошибки, допущенные в следующем коде:
let obj0 = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum2 = 0;

for (let elem in obj0) {
    let str = String(obg0[i]);
	if (str[0] === '1' || str[0] === '2') {
		sum2 += str;

	}
}
console.log(sum2);


//Задание 166 
/*1 Код должен вывести числа от 0 до 10:

for (let i = 0; i > 10; i++) {
	console.log(i);
} */

for (let i = 0; i <= 10; i++) {
	console.log(i);
  }

/*2  Код должен вывести числа от 10 до 0:

for (let i = 10; i > 0; i++) {
	console.log(i);
}*/

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

/*3 Код должен вывести числа от 10 до 0:

for (let i = 10; i == 0; i--) {
	console.log(i);
} */

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

/*4 Код должен вывести числа от 0 до 10:

let i = 0;

while (i >= 10) {
	console.log(i);
	i++;
} */

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

/*5 од должен найти сумму целых чисел от 1 до 10:

let res;

for (let i = 1; i <= 10; i++) {
	res += i;
}

console.log(res); */

let res = 0;

for (let i = 1; i <= 10; i++) {
  res += i;
}

console.log(res);

/*6 Код должен найти произведение целых чисел от 1 до 10:

let res = 0;

for (let i = 1; i <= 10; i++) {
	res *= i;
}

console.log(res); */

let res = 1;

for (let i = 1; i <= 10; i++) {
  res *= i;
}

console.log(res);

/*7 Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += elem;
}

console.log(sum); // должно вывести 15*/

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
  sum += Number(elem);
}
console.log(sum);

/*8 let arr = ['1', '2', '3', '4', '5'];
let sum = '';

for (let elem of arr) {
	sum += +elem;
}

console.log(sum); // должно вывести 15 */

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
  sum += +elem;
}

console.log(sum);


/*9 let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum = +elem;
}

console.log(sum); // должно вывести 15*/

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
  sum += +elem+x;
}
console.log(sum);

/*10 Код должен найти сумму элементов массива, однако, всегда выводит NaN:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит NaN*/


let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}

console.log(sum);

/*11 Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length - 1; i++) {
	sum += +arr[i];
}

console.log(sum); // почему-то выводит не 15*/

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}
console.log(sum);

/*12 Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += +i;
}

console.log(sum); // почему-то выводит не 15*/


let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += +arr[i];
}

console.log(sum);




/*13 Код должен возвести в квадрат каждый элемент массива:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	elem = elem ** 2;
}

console.log(arr);*/

let arr = [1, 2, 3, 4, 5];
for (let elem of arr) {
	elem = elem ** 2;

console.log(elem);
}






/*14  Код должен заполнить массив числами от 1 до 5:

let arr;

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */



let arr =[]; 
 
for (let i = 1; i <= 5; i++) { 
 arr.push(i); 
} 
 
console.log(arr);


/*15 Код должен найти сумму элементов объекта:

let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
	sum += elem;
}

console.log(sum); */

let obj = {a: 1, b: 2, c: 3}; 
let sum = 0; 
 
for (let elem in obj) { 
 sum += obj[elem]; 
} 
 
console.log(sum);





/*16 Код должен найти сумму элементов объекта:

let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
	sum = +obj.key;
}

console.log(sum);*/

let obj = {a: 1, b: 2, c: 3}; 
let sum = 0; 
 
for (let key in obj) { 
  sum += obj[key]; 
} 
 
console.log(sum);











/*17 Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
	if (elem === 3) {
		res = '+++';
	} else {
		res = '---';
	}
}

console.log(res);*/

let arr = [1, 2, 3, 4, 5]; 
let res = '---'; 
 
for (let elem of arr) { 
  if (elem === 3) { 
    res = '+++'; 
    break; 
  } 
} 
 
console.log(res);




/*18 Код должен заполнить массив числами от 1 до 5:

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr); */

let arr = []; 
 
for (let i = 1; i <= 5; i++) { 
 arr.push(i); 
} 
 
console.log(arr);



/*19 Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
	if (elem === 3) {
		let res = true;
		break;
	}
}

console.log(res); */

let arr = [1, 2, 3, 4, 5]; 
let res = false; 
 
for (let elem of arr) { 
 if (elem === 3) { 
     res = true; 
  break; 
 } 
} 
 
console.log(res);

/*20 Код должен вывести только четные элементы из массива:

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 = 0) {
		console.log(elem);
	}
}*/
let arr = [1, 2, 3, 4, 5]; 
 
for (let elem of arr) { 
 if (elem % 2 == 0) { 
  console.log(elem); 
 } 
}

/*21 Код должен записать в новый массив только нечетные элементы старого массива:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}

console.log(res);*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
let res = []; 
 
for (let elem of arr) { 
 if (elem % 2 != 0) { 
  res.push(elem); 
 } 
} 
 
console.log(res);


// 167 ПРАКТИКА

//Отработка циклов JavaScript

//1 Выведите с помощью цикла столбец чисел от 1 до 100.
let i = 1;

while (i <= 100) {
	console.log(i);
	i++;
}

//2 Выведите с помощью цикла столбец чисел от 100 до 1.
for (i=100; i>1; i-- ){
	console.log(i)
  }

//3 Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
	if (i % 2 === 0) {
	  console.log(i);
	}
  }

//4 Заполните массив 10-ю иксами с помощью цикла.

let str = '';

for (let i = 0; i < 10; i++) {
	str += 'x';
}

console.log(str);

//5 Заполните массив числами от 1 до 10 с помощью цикла.

let arr = [];

for (let i = 1; i <= 10; i++) {
	arr.push(i);
}

console.log(arr);

//6 Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arr20 = [1, 2, 3, 4, 5];
let sum3 = 0;
for (let elem of arr20) {
	if (elem >0 && elem < 10 ) 
    { console.log(elem);
 }
}


//7 Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.

const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    console.log('В массиве есть число 5');
    break;
  }
}

//8 Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

const arr = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);

//9 Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i] ** 2;
}

console.log(sum);


//10 Дан массив с числами. Найдите среднее арифметическое его элементов.

let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let average = sum / arr.length;
console.log(average);


//11 Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.

function factorial(n) {
	if (n === 0 || n === 1) {
	  return 1;
	} else {
	  return n * factorial(n - 1);
	}
  }
  let number = 5; 
  
  let result = factorial(number);
  console.log('Факториал числа ' + number + ' равен ' + result);

//12 Заполните массив числами от 10 до 1 с помощью цикла.
let numbers = [];
for (let i = 10; i >= 1; i--) {
  numbers.push(i);
}
console.log(numbers);

//13 Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let arr = [1, -2, 3, -4, 5, 6, -7, 8];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
console.log(sum);

//14 Дан массив числами, например:
//let arr = [10, 20, 30, 50, 235, 3000];
//Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let str = arr[i].toString();
  if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
    console.log(arr[i]);
  }
}

//15 Дан массив с числами. Выведите элементы этого массива в обратном порядке.

let arr = [1, 2, 3, 4, 5];
let rev = arr.reverse();

console.log(rev);

//16 Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

let arr = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === i) {
    console.log(arr[i]);
  }
}


//17 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.	
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
}

//18 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  document.write("<p>", arr[i],"</p>");
}

//19 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < weekDays.length; i++) {
  if (weekDays[i] === 'Суббота' || weekDays[i] === 'Воскресенье') {
    document.write('<strong>' + weekDays[i] + '</strong><br>');
  } else {
    document.write(weekDays[i] + '<br>');
  }
}

//20 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]; 
let currentDate = new Date(); 
let day = currentDate.getDay(); 
 
for (let i = 0; i < daysOfWeek.length; i++) { 
  if (i == day -1) { 
    document.write('<i>' + daysOfWeek[i] + '</i><br>'); 
  } else { 
    document.write(daysOfWeek[i] + '<br>'); 
  } 
}

//21 Дан следующий объект с работниками и их зарплатами:

/*let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
Увеличьте зарплату каждого работника на 10%.
*/
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for(let key in obj){
  obj[key] = (obj[key] * 1.1).toFixed(0);
  console.log(obj[key]);
}

//22 Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
  };
  for (let key in obj) {
	if (obj[key] <= 400) {
	  obj[key] = (obj[key] * 1.1).toFixed(0); 
	  console.log(obj[key]);
	}
  }

/*23 Даны следующие массивы:

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
*/


let arr1 = [1, 2, 3, 4, 5];  
let arr2 = [6, 7, 8, 9, 10]; 
 
let newObj = {}; 
 
for (let i = 0; i < arr1.length; i++) { 
  newObj[arr1[i]] = arr2[i]; 
} 
 
console.log(newObj);
  


/*24 Дан следующий объект:

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
Найдите сумму ключей этого объекта и поделите ее на сумму значений. */

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10}; 
let sumKeys = Object.keys(obj).reduce((acc, key) => acc + parseInt(key), 0); 
let sumValues = Object.values(obj).reduce((acc, value) => acc + value, 0); 
let result = sumKeys / sumValues; 
console.log(result);

/*25 Дан следующий объект:

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
Запишите ключи этого объекта в один массив, а значения - в другой. */

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
let keysArray = Object.keys(obj); 
let valuesArray = Object.values(obj); 
 
console.log(keysArray); 
console.log(valuesArray);


/*26 let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:

[
	125,
	225,
	128,
	145,
	281,
]; */

let obj = { 
	1: 125, 
	2: 225, 
	3: 128, 
	4: 356, 
	5: 145, 
	6: 281, 
	7: 452, 
   }; 
   let newArray = []; 
	
   for (let key in obj) { 
	   if (obj[key].toString().startsWith('1') || obj[key].toString().startsWith('2')) { 
		   newArray.push(obj[key]); 
	   } 
   } 
	
   console.log(newArray);

   /*27 Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:

{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}; */ 

let arr = ['a', 'b', 'c', 'd', 'e']; 
let obj = {}; 
 
for (let i = 0; i < arr.length; i++) { 
  obj[i+1] = arr[i]; 
} 
 
console.log(obj);

/*28 Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:

{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; */

let arr = ['a', 'b', 'c', 'd', 'e']; 
let obj = {}; 
 
for (let i = 0; i < arr.length; i++) { 
  obj[arr[i]] = i + 1; 
} 
 
console.log(obj);