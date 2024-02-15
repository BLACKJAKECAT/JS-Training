//269  

/*1 Допишите следующий код так, чтобы его запуск алертом выводил '!':

(function() {
	// какой-то код
})()()();*/

(function() {
	return function(){
	    console.log("!");
	};
})()();


/*2 Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

(function() {
	// какой-то код
})(1)(2);*/


(function(num1) {
    return function(num2) {
      console.log(num1 + num2);
    };
  })(1)(2);


  /*3 Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

(function() {
	// какой-то код
})(1)(2)(3);*/


(function(num1) {
    return function(num2) {
      return function(num3) {
          console.log(num1+num2+num3);
    };
   };
  })(1)(2)(3);
  
  //272

  /*1 Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.*/
  let func = (function() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	}
})();

func(); 
func(); 
func(); 
func(); 
func();

/*2 Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.*/

let func = (function() {
    let num = 0;
    
    return function() {
      num = (num % 5) + 1;
      console.log(num);
    }
  })();
  
  func(); 
  func(); 
  func(); 
  func(); 
  func();
  func();