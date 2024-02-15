//261

//1 Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.
function test() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	};
}

let func1 = test(); 
func1();  
func1();  




//2 Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.

function test() {
	let num = 10;
	
	return function() {
		console.log(num);
		num--;
	};
}

let func1 = test();
func1();
func1(); 
func1();
func1(); 
func1();
func1(); 
func1();
func1();
func1();
func1(); 



//3 Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.

function test() {
	let num = 11;
	
	return function() {
    if (num > 0) {
      num--;
      console.log(num);
    } else {
      console.log("Отсчет окончен");
    }
	}
}
let func1 = test();
func1();
func1(); 
func1();
func1(); 
func1();
func1(); 
func1();
func1();
func1();
func1(); 
func1();
func1();
func1();
func1();


