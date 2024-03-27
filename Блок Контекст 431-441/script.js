//438
//1
let elem1 = document.getElementById('elem1');
let elem2 = document.getElementById('elem2');
let elem3 = document.getElementById('elem3');


function func() {
    console.log(this.value);
  }


func.call(elem1); 
func.call(elem2); 
func.call(elem3);
//439
//1




function func1(surname, name) {
 console.log(this.value + ', ' + name + ' ' + surname);
}

func1.call(elem, 'Smit', 'John');




//440
//1



function func2(surname, name) {
 console.log(this.value + ', ' + surname + ' ' + name);
}

func2.apply(elem, ['John', 'Smit']);

//441
//1



function func3(name, surname) {
 console.log(this.value + ', ' + name + ' ' + surname);
}

let boundFunc = func3.bind(elem);

boundFunc('John', 'Smit'); 
boundFunc('Eric', 'Luis'); 