//105 
//1 Проверьте, что переменная test больше 10.
let test = 0;
if (test > 10) {
	console.log('+++');
} else {
	console.log('---'); 
}

//2 Проверьте, что переменная test меньше 10.
let test = 0;
if (test < 10) {
	console.log('+++');
} else {
	console.log('---'); 
}

//3 Проверьте, что переменная test больше или равна 10.

let test = 0;
if (test >= 10) {
	console.log('+++');
} else {
	console.log('---'); 
}

//4 Проверьте, что переменная test меньше или равна 10.

let test = 0;
if (test <= 10) {
	console.log('+++');
} else {
	console.log('---'); 
}

//106 
//1 Проверьте, что переменная test равна 10.
let test = 0;

if (test == 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

//107
//1 Проверьте, что переменная test не равна 10.
let test = 0;

if (test != 10) {
	console.log('+++'); 
} else {
	console.log('---');
}

//108 
//1 Даны переменные test1 и test2. Проверьте, что значение какой из этих переменных больше и выведите соответствующее сообщение.
let test1 = 1;
let test2 = 2;

if (test2 > test1) {
	console.log('+++'); 
} else {
	console.log('---');
}

//2 Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.
let test1 = 1;
let test2 = 2;

if (test2 == test1) {
	console.log('+++'); 
} else {
	console.log('---');
}

//109
//1 Даны переменные test1 и test2, содержащие строки. Проверьте, равны ли их значения и выведите соответствующее сообщение.
let test = 'abc';

if (test == 'abc') {
	console.log('+++'); 
} else {
	console.log('---');
}

//110 
//1 Проверьте, равны ли значения переменных и выведите соответствующее сообщение.
let test1 = '123';
let test2 = 123;
if (Number(test1) == test2 ){
    console.log('+++'); 
} else {
	console.log('---');
}


//113 
//1 Проверьте, что переменная num больше нуля и меньше 5.
let num= 2;
if (num > 0 && num < 5) {
	console.log('+++');
} else {
	console.log('---');
}

//2 Проверьте, что переменная num больше или равна 10 и меньше или равна 20.
let num= 5;
if (num >= 10 && num <= 20) {
	console.log('+++');
} else {
	console.log('---');
}

//3 Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
let num1 = 2;
let num2 = 3;

if (num1 <= 1 && num2 >= 3) {
	console.log('+++');
} else {
	console.log('---');
}

//117
//1 Используя оператор ! инвертируйте приведенное условие.
if (!(num1 >= 0 || num2 <= 10)) {
	console.log('+++');
} else {
	console.log('---');
}

//118
//1 Проверьте, что переменная test равна true.
let test = true;

if (test === true) {
	console.log('+++');
} else {
	console.log('---');
}

//2 Проверьте, что переменная test равна false.
let test = true;

if (test === false) {
	console.log('+++');
} else {
	console.log('---');
}

//119
//1 Вспомните и напишите, какие значения при приведении к логическому типу дают false.
false, null, undefined, NaN, пустая строка и 0

//120
//1 Перепишите следующий код с использованием сокращенной формы
let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
}   

//121
//1 Перепишите следующий код с использованием сокращенной формы
let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}
//2 Перепишите следующий код с использованием сокращенной формы

let test = true;

if (!test) {
	console.log('+++');
} else {
	console.log('---');
}

//3 Перепишите следующий код с использованием сокращенной формы

let test = true;

if (test) {
	console.log('+++');
} else {
	console.log('---');
}

//123 
//1 Перепишите следующий код в сокращенной форме

let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}

//2 Перепишите следующий код в сокращенной форме

let test1 = true;
let test2 = true;

if (test1 && !test2) {
	console.log('+++');
} else {
	console.log('---');
}

//3 Перепишите следующий код в сокращенной форме

let test1 = true;
let test2 = true;

if (!test1 && !test2) {
	console.log('+++');
} else {
	console.log('---');
} 

//4 Перепишите следующий код в сокращенной форме

let test1 = true;
let test2 = true;

if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}

//5 Перепишите следующий код в сокращенной форм

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 && test2 && test3) {
	console.log('+++');
} else {
	console.log('---');
}

//6 Перепишите следующий код в сокращенной форме

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || test2 && test3) {
	console.log('+++');
} else {
	console.log('---');
}

//7 Перепишите следующий код в сокращенной форме

let test1 = true;
let test2 = true;
let test3 = true;

if (test1 || !test2 && !test3) {
	console.log('+++');
} else {
	console.log('---');
}

//124 Проверьте, что переменная test равна 10, то пусть на экран выведется 'yes'. В противном случае пусть ничего не произойдет.

let test = 1;

if (test == 10) {
	console.log('yes');
}

//125 

//1 Перепишите следующий код в сокращенной форме

if (test > 0) 
	console.log('+++');
 else 
	console.log('---');

//2 Перепишите следующий код в сокращенной форме:

if (test > 0) console.log('+++');

//127

//1 В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = 15;

if (day <=10 && day >0) {
	console.log('Первая декада');
} else if (day > 10 && day <=20) {
	console.log('Вторая декада');
} else if (day > 20 && day <= 31) {
	console.log('Третья декада');
}

//2 Модифицируйте предыдущую задачу так, чтобы, если в переменной day будет не число от 1 до 31, выдавалось сообщение об ошибке.

let day = 15;

if (day <=10 && day >0) {
	console.log('Первая декада');
} else if (day > 10 && day <=20) {
	console.log('Вторая декада');
} else if (day > 20 && day <= 31) {
	console.log('Третья декада');
} else 
    console.log('Ошибка');

//128 
//1 Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначна.

let num = 16;
let str = String(num);
let sum = 0

if (num >=10 && num <=99) {
    for (let digit of str){
        sum += +digit;
    }
	if (sum <=9) {
		console.log(sum, 'сумма цифр однозначна');
	} else {
		console.log(sum, 'сумма цифр двухзначная');
	}
} else {
	console.log('это не число');
}

//129 
//1 Перепишите следующий код через switch-case

let lang = 'ru';

switch (lang){
  case 'ru':
	  console.log('рус');
  break;
  case 'en':
	  console.log('анг');
  break;
  case 'de':
	  console.log('нем');
  break;
  default:
	  console.log('язык не поддерживается');
  break;
}

//131
//1 Перепишите следующий код через тернарный оператор

let num = 1;
let res = num >= 0 ? 1: 2;
console.log(res);

//132
//1 Используя оператор ==, узнайте, равны ли значения этих переменных или нет.
let a = 2 * (3 - 1);
let b = 6 - 2;
let result = a == b;
console.log(result)

//2 Используя оператор >, узнайте, больше ли переменная a, чем b.

let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
let result = a > b;
console.log(result);

//3 Используя операцию оператор !=, узнайте, разные ли значения этих переменных или нет.

let a = 2 ** 4;
let b = 4 ** 2;
let result = a != b;
console.log(result);

//133
//1 Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен.
let ok = confirm('Вам есть 18?');

if (ok) {
	alert('Для взрослых');
} else {
	alert('Доступ пользователю запрещён');
}

//134
//1 Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, не работает. Исправьте ошибку автора кода.
let age = 17;

if (age >= 18) {
	 adult = true;
} else {
	 adult = false;
}
console.log(adult);

//135
//1 Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.
let age = 17;
let adult;

if (age >= 18) {
	 adult = true;
} else {
	 adult = false;
}

console.log(adult);

//2 Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. После проверки кода оказалось, что если возраст равен или больше 18 лет, то в переменную adult записывается true, как и должно быть, однако, если возраст меньше 18, то переменная adult имеет значение undefined.

let age = 17;
let adult;

if (age >= 18) {
	adult = true;
} else {
    adult = false;
}

console.log(adult);

//3 Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при любом значение возраста выводит в консоль значение undefined.

let age = 17;
let res;

if (age >= 18) {
	if (age <= 23) {
		 res = 'от 18 до 23';
	} else {
		 res = 'больше 23';
	}
} else {
	 res = 'меньше 18';
}

console.log(res);

//4 Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined.

let age = 19;
let res;

if (age >= 18) {

	if (age <= 23) {
		res = 'от 18 до 23';
	} else {
		res = 'больше 23';
	}
} else {
	res = 'меньше 18';
}

console.log(res);

//136
//1 Решите аналогичную задачу, только определите в какую треть часа попадает указанное количество минут.

let min = 10;

if (min >= 0 && min <= 20) {
	console.log('1 четверть');
}

if (min >= 21 && min <= 40) {
	console.log('2 четверть');
}

if (min >= 41 && min <= 60) {
	console.log('3 четверть');
}

//137
//1 В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.

let arr = [1,2,3];
if (arr.length == 3) {
     res = arr.reduce(function(sum,elem){
        return sum + elem;
    }, 0);
	console.log(res);
}

//138
//1 Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'.
let str = 'a2345';

if (str[0] == 'a') {
	console.log('!');
}

//2 Дана переменная, содержащая некоторую строку. Проверьте, что эта строка заканчивается на символ 'x'.
let str = '1234x';
let last = str[str.length - 1];

if (last == 'x') {
	console.log('!');
}

//3 Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a' или символ 'b'.

let str = 'a2345';

if (str[0] == 'a' || str[0] == 'b') {
	console.log('!');
}

//139
//1 Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.

let num = 12340
let str = String(num);
let last =str[str.length - 1];

if (last == 0) {
	console.log('+++');
} else {
	console.log('---');
}

//2 Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
let num = 12340
let str = String(num);
let last =str[str.length - 1];

if (last % 2 == 0) {
	console.log('+++');
} else {
	console.log('---');
}

//140
//1 Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком. Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.

let a = 10;

if (a % 2 === 0) {
	console.log('Четное');
} else {
	console.log('Нечетное');
}

//2 Дано число. Проверьте, что оно делится на 3.

let a = 12;

if (a % 3 === 0) {
	console.log('Делится');
} else {
	console.log('Не делится');
}

//141
//2 Код должен проверить сумму чисел

let num1 = '1';
let num2 = '2';
if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//3 Код должен проверить сумму чисел

let num1 = '1';
let num2 = '2';
if (Number(num1) + Number(num2) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//4 Код должен проверить первую цифру числа

let num = [1,2,3];

if (num[0] === 1) {
	console.log('+++');
} else {
	console.log('---');
}

//5 Код должен проверить первую цифру числа

let num = 123;

if (String(num)[0] === '1') {
  console.log('+++');
} else {
  console.log('---');
}

//6 Код должен проверить первую цифру числа

let num = 123;

if (String(num)[0] === '1') {
	console.log('+++');
} else {
	console.log('---');
}

//7 Код должен проверить первую цифру числа

let num = 123;
let first = String(num)[0];
if (first === '1') {
	console.log('+++');
} else {
	console.log('---');
}

//8 Код должен проверить, что в числе ровно две цифры

let num = 12;

if (String(num).length === 2) {
  console.log('+++');
} else {
  console.log('---');
}

//9 Код должен проверить, что в числе ровно две цифры

let num = 12;
let str = String(num);
if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//10 Код должен проверить, что в числе ровно две цифры

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//11 Код должен проверить, что в числе ровно две цифры

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//12 Код должен проверить, что в числе ровно две цифры

let num = 12;

if (String(num).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//13 Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел

let num = '123033'; 
let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
if (sum1 === sum2) {
  console.log('суммы равны');
} else {
  console.log('суммы не равны');
}

//142

//1 В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 6;

if (month >= 3 && month <= 5) {
  console.log("Весна");
} else if (month >= 6 && month <= 8) {
  console.log("Лето");
} else if (month >= 9 && month <= 11) {
  console.log("Осень");
} else if (month >= 1 && month < 3 || month == 12){
  console.log("Зима");
}

//2 Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = 'abcde';

if (str[0] === 'a') {
  console.log('да');
} else {
  console.log('нет');
}

//3 Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = 12345;

if (String(str)[0] == '1' || String(str)[0] == '2' || String(str)[0] == '3') {
	console.log('Да');
}
else{
    console.log('Нет')
}

//4 Дано трехзначное число. Найдите сумму цифр этого числа.

let number = 123;
let sum = 0;

while (number > 0) {
  sum += number % 10; 
  number = Math.floor(number / 10); 
}

console.log(sum);

//5 Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let num = 123033;
let val= String(num);
let sum1 = Number(val[0]) + Number(val[1]) + Number(val[2]);
let sum2 = Number(val[3]) + Number(val[4]) + Number(val[5]);
if (sum1 === sum2) {
  console.log('суммы равны');
} else {
  console.log('суммы не равны');
}