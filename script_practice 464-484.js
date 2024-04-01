// 465.1 Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. 

let parent = document.querySelector('#elem');
let arr = ['first', 'second', 'third'];

for (let elem of arr) {

	let li = document.createElement('li');
	li.textContent = elem;
	parent.appendChild(li);
}

// 465.2 Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента. 

let parent1 = document.querySelector('#elem');
let arr1 = ['first', 'second', 'third'];

for (let elem of arr1) {

	let li = document.createElement('li');
	li.textContent = elem;
    li.addEventListener('click', function () {
        alert(this.textContent)
    })
	parent1.appendChild(li);
}

// 465.3 Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'. 

let parent2 = document.querySelector('#elem');
let arr2 = ['first', 'second', 'third'];

for (let elem of arr2) {

	let li = document.createElement('li');
	li.textContent = elem;
    li.addEventListener('click', function () {
        this.textContent += '!'
    })
	parent2.appendChild(li);
}

//465.4 Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'. 

let parent3 = document.querySelector('#elem');
let arr3 = ['first', 'second', 'third'];

for (let elem of arr3) {

	let li = document.createElement('li');
	li.textContent = elem;
    li.addEventListener('click', function func() {
        this.textContent += '!'
        this.removeEventListener('click',func)
    })
	parent3.appendChild(li);
}

//466.1 Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками. 

let table = document.querySelector('#table');

for (let i = 0; i < 5; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}

//466.2 Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок. 

let table1 = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
        td.textContent = 'text' + ` №${i} `
		tr.appendChild(td);
	}
	
	table1.appendChild(tr);
}

//466.3 Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'. 

let table2 = document.querySelector('#table');

for (let i = 0; i < 10; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
        td.textContent = 'twitter';
		tr.appendChild(td);
	}
    
	table2.appendChild(tr);
}

//466.4 Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).

let table3 = document.querySelector('table');
let button = document.querySelector('button')
let rows = document.querySelector('#rows');
let columns = document.querySelector('#columns');

button.addEventListener('click', function () {
    for (let i = 0; i < rows.value; i++) {
        let tr = document.createElement('tr');
        
        for (let i = 0; i < columns.value; i++) {
            let td = document.createElement('td');
            td.textContent = 'text' + ` №${i} `;
            tr.appendChild(td);
        }
        
        table3.appendChild(tr);
    }  
})

//467.1 Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25. 

let table4 = document.querySelector('table');

let k = 1;
for (let i = 0; i < 5; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
		td.textContent = k; 
		k++;
		
		tr.appendChild(td);
	}
	
	table4.appendChild(tr);
}

//467.2 Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50. 

let table5 = document.querySelector('table');

let k1 = 2;
for (let i = 0; i < 5; i++) {
	let tr = document.createElement('tr');
	
	for (let i = 0; i < 5; i++) {
		let td = document.createElement('td');
		td.textContent = k1; 
		k1 += 2;
		
		tr.appendChild(td);
	}
	
	table5.appendChild(tr);
}

//468.1 Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table. 

let arr4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

let table6 = document.querySelector('table');

for (const subArr of arr4) {
    let tr = document.createElement('tr');

    for (const elem of subArr) {
        let td = document.createElement('td');
        td.textContent = elem;
        tr.appendChild(td)
    }

    table6.appendChild(tr)
}

//468.2 Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов. 

let arr5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

let table7 = document.querySelector('table');

for (const subArr of arr5) {
    let tr = document.createElement('tr');

    for (const elem of subArr) {
        let td = document.createElement('td');
        td.textContent = elem**2;
        tr.appendChild(td)
    }

    table7.appendChild(tr)
}

//469.1 Дан массив с работниками. Выведите элементы этого массива в виде HTML таблицы.  

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

let table8 = document.querySelector('#table');

for (const employee of employees) {
    let tr = document.createElement('tr');

    let tdName = document.createElement('td');
    tdName.textContent = employee.name;
    tr.appendChild(tdName);

    let tdAge = document.createElement('td');
    tdAge.textContent = employee.age;
    // 469.2 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1. 
    tdAge.onclick = () => {
        tdAge.textContent = +tdAge.textContent + 1;
    }
    tr.appendChild(tdAge);

    let tdSalary = document.createElement('td');
    tdSalary.textContent = employee.salary;
    // 469.3 Модифицируйте задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%. 
    tdSalary.onclick = () => {
        tdSalary.textContent = +tdSalary.textContent + (+tdSalary.textContent * 0.1);
    }
    tr.appendChild(tdSalary);

    table8.appendChild(tr);
}

//470.1 Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд. 

let table9 = document.querySelector('#table');
let button2 = document.querySelector('button');

button2.addEventListener('click', function() {
    table9.appendChild(document.createElement('tr'));
})

//470.2 Дана таблица размером 2 на 2. Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку. 

let table10 = document.querySelector('#table');
let button3 = document.querySelector('button');

button3.addEventListener('click', function() {
    let tr = document.createElement('tr');
    table10.appendChild(tr);

    let trList = document.querySelectorAll('#table tr');
    for (const tr of trList) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }

    table10.appendChild(tr);
})

//471.1 Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза. 

let table11 = document.querySelector('#table');
let button4 = document.querySelector('#button');

button4.addEventListener('click', function() {
    let tdList = document.querySelectorAll('#table td');
    for (const td of tdList) {
        td.textContent *= 2; 
    }
})

//472.1 Дан список. Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент.
//Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку. 

let ul = document.querySelector('#parent');
let button5 = document.querySelector('#button');

button5.addEventListener('click', function() {
    ul.appendChild(document.createElement('li'))

    liList = document.querySelectorAll('#parent li');

    for (const li of liList) {
        li.onclick = () => {
            ul.removeChild(li)
        }
    }
})

//473.1 предотвратить переход по ссылке с помощью preventDefault

let elem = document.querySelector('#elem');
let remove = document.querySelector('#remove');

remove.addEventListener('click', function(event) {
	elem.remove();
	event.preventDefault();
});

//474.1 Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка. 

let ul1 = document.querySelectorAll('ul li');

for (let li of ul1) {
    let remove = document.createElement('a');
    remove.textContent = 'click to remove';
    remove.addEventListener('click', function(event) {
        li.remove();
        event.preventDefault();
    });     
    li.appendChild(remove);
}

//474.2 Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда. 

let table12 = document.querySelector('table');

let trList = document.querySelectorAll('table tr');

for (const tr of trList) {
    let tdDeleteLinks = document.createElement('td');
    let deleteLink = document.createElement('a');
    deleteLink.textContent = "click here to delete row";
    deleteLink.onclick = (event) => {
        tr.remove()
        event.preventDefault()
    }
    tdDeleteLinks.appendChild(deleteLink);

    
    tr.appendChild(tdDeleteLinks)
}

//475.1 Модифицируйте код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.

let elem1 = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.textContent;

input.addEventListener('input', function() {
	elem1.textContent = this.value;
});

//475.2

let elem2 = document.querySelector('#elem');

elem2.addEventListener('click', function() {
	let input = document.createElement('input');
	input.value = elem.textContent;
	
	input.addEventListener('blur', function() {
		elem2.textContent = this.value;
        this.remove();
	});
	
	elem.parentElement.appendChild(input);
});

//476.1 
let elem3 = document.querySelector('#elem');
elem3.addEventListener('click', function func() {
	let input = document.createElement('input');
	input.value = elem3.textContent;
	
	elem3.textContent = '';
	elem3.appendChild(input);
	
	input.addEventListener('blur', function() {
		elem3.textContent = this.value;
		elem3.addEventListener('click', func);
	});
	
	elem3.removeEventListener('click', func);
});

//477.1 Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.

let ul2 = document.querySelectorAll('ul li');

for (let li of ul2) {
	li.addEventListener('click', function func() {
		let input = document.createElement('input');
		input.value = li.textContent;
		
		li.textContent = '';
		li.appendChild(input);
		
		input.addEventListener('blur', function() {
			li.textContent = this.value;
			li.addEventListener('click', func);
		});
		
		li.removeEventListener('click', func);
	});
}

//477.2 Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки. 

let table13 = document.querySelector('table');
let tdList = document.querySelectorAll('td');

for (const td of tdList) {
    td.addEventListener('click', function func() {
    let input = document.createElement('input');
    input.value = td.textContent;
    
    td.textContent = '';
    td.appendChild(input);
    
    input.addEventListener('blur', function() {
        td.textContent = this.value;
        td.addEventListener('click', func);
    });
    
    td.removeEventListener('click', func);
    });
}

//478.1  Дан следующий HTML код:

//  <div id="parent">
// 	<p><span>text1</span></p>
// 	<p><span>text2</span></p>
// 	<p><span>text3</span></p>
// </div>

//Добавьте ссылку на удаление в конец каждого абзаца. Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.  

let pList = document.querySelectorAll('#parent p');
let spanList = document.querySelectorAll('#parent span');

for (let p of pList) {
    let remove = document.createElement('a');
    remove.textContent = ' remove link'
    remove.onclick = () => {
        p.remove()
    }
    p.appendChild(remove);
}

for (let span of spanList) {
    span.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = span.textContent;
        
        span.textContent = '';
        span.appendChild(input);
        
        input.addEventListener('blur', function() {
            span.textContent = this.value;
            span.addEventListener('click', func);
        });
        
        span.removeEventListener('click', func);
    });
}

//478.2 Пусть теперь изначально тегов span нет:

 <div id="parent">
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>
</div>

//Оберните сначала текст абзаца в теги span,
//добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление. 

let pList1 = document.querySelectorAll('#parent p');

for (let p of pList1) {
    let span = document.createElement('span');
    span.textContent = p.textContent;
    p.textContent = '';
    p.appendChild(span);

    let remove = document.createElement('a');
    remove.textContent = ' remove link';
    remove.onclick = () => {
        p.remove();
    }
    p.appendChild(remove);

    span.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = span.textContent;

        span.textContent = '';
        span.appendChild(input);

        input.addEventListener('blur', function() {
            span.textContent = this.value;
            span.addEventListener('click', func);
        });

        span.removeEventListener('click', func);
    });
}

//479.1  Дан следующий HTML код:

/* 	
	<p>text1</p>
    <p>text2</p>
    <p>text3</p>

Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).  */


//Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).  

let pList2 = document.querySelectorAll('#parent p');

for (let p of pList2) {
    let span = document.createElement('span');
    span.textContent = p.textContent;
    p.textContent = '';
    p.appendChild(span);

    let lineThrough = document.createElement('a');
    lineThrough.textContent = ' add through line';
    lineThrough.onclick = () => {
        span.style.textDecoration = 'line-through';
//479.2 Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым). 
		p.removeChild(lineThrough)
    }
    p.appendChild(lineThrough);
}

//479.3 Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона. 
//479.4 Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие. 

let table14 = document.querySelector('table');

let trList1 = document.querySelectorAll('table tr');

for (let tr of trList1) {
	
	let td = document.createElement('td');

	let greenBackLink = document.createElement('a');
	greenBackLink.textContent = ' add green background';
	greenBackLink.addEventListener('click', function func() {
		tr.classList.toggle('colored')
	})
	
	td.appendChild(greenBackLink);
	tr.appendChild(td);
}

//480.1 Модифицируйте мой код так, чтобы была только одна кнопка. Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается. 

let elem4 = document.querySelector('#elem');
let button6 = document.querySelector('#button');

button6.addEventListener('click', function() {
	elem4.classList.toggle('hidden');
});

//481.1 Много элементов с кнопками показа


//1 Способ

let buttons7 = document.querySelectorAll('button');

for (let button of buttons7) {
	button.addEventListener('click', function() {
		let elem = document.querySelector('#' + this.dataset.elem);
		elem.classList.toggle('hidden');
	});
}

//2 Способ

let buttons8 = document.querySelectorAll('button');
let pList3 = document.querySelectorAll('p');

for (let i = 0; i < buttons8.length; i++) {
	buttons8[i].addEventListener('click', function () {
		pList3[i].classList.toggle('hidden');
	})	
}

//3 Способ

let buttons = document.querySelectorAll('button');

for (let button of buttons) {
	button.addEventListener('click', function() {
		this.previousElementSibling.classList.toggle('hidden');
	});
}

//482.1 Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном. 

let ul3 = document.querySelectorAll('ul li');

for (let li of ul3) {
	li.addEventListener('click', function() {
		li.classList.toggle('active');
	})
}

//482.2 


ul3.forEach(item => {
    item.addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            ul3.forEach(li => {
                li.classList.remove("active");
            });
            this.classList.add("active");
        }
    });
});


//483.1

let tds = document.querySelectorAll('table td');

let color = 'color1';
for (let td of tds) {
	td.addEventListener('click', function() {
		if (color == 'color1') {
			color = 'color2'
		} else {
			color = 'color1'
		}
		
		this.classList.add(color);
	});
}

//483.2 

let tds1 = document.querySelectorAll('#table td');

let i = 0;
let colors = ['color1', 'color2', 'color3'];

for (let td of tds1) {
	td.addEventListener('click', function() {
		this.classList.add(colors[i]);
		
		i++;
		if (i == colors.length) {
			i = 0;
		}
	});
}

//484.1 Дан массив. Выведите его элементы в виде списка ul.

function createListItem(textContent) {
	let li = document.createElement('li');
	let span = document.createElement('span');
	li.appendChild(span);
	span.textContent = textContent;
	span.addEventListener('click', editItem);
	li.appendChild(createDeleteLink(li));
	li.appendChild(createCrossLink(span));
	return li;
  }
  
//484.2 Модифицируйте задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать. 
  function editItem() {
	let span = this;
	let input = document.createElement('input');
	input.value = span.textContent;
	span.textContent = '';
	span.appendChild(input);
  
	input.addEventListener('blur', function() {
	  span.textContent = input.value;
	  span.addEventListener('click', editItem);
	});
  
	span.removeEventListener('click', editItem);
  }
  // 484.4 Модифицируйте задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul. 
  function createDeleteLink(li) {
	let deleteLink = document.createElement('a');
	deleteLink.textContent = ' click to remove';
	deleteLink.onclick = () => {
	  ul3.removeChild(li);
	}
	return deleteLink;
  }
//484.5 Модифицируйте задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li. 
  function createCrossLink(span) {
	let crossLink = document.createElement('a');
	crossLink.textContent = ' click to cross';
	crossLink.onclick = () => {
	  span.style.textDecoration = 'line-through';
	}
	return crossLink;
  }

//  484.1 Дан массив. Выведите его элементы в виде списка ul.
  let arr6 = ['red','green','blue','yellow','black'];
  let body = document.querySelector('body');
  let ul4 = document.createElement('ul');
  
  for (let i = 0; i < arr.length; i++) {
	let li = createListItem(arr6[i]);
	ul4.appendChild(li);
  }
  
  body.appendChild(ul);
  
//484.3 Модифицируйте задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать. 
  let input = document.createElement('input');
  input.placeholder = "Новый элемент";
  body.appendChild(input);
  
  input.addEventListener('blur', function() {
	let li = createListItem(input.value);
	ul4.appendChild(li);
	input.value = '';
  });
  

// 481.6 Дан массив с работниками. Выведите этих работников в HTML таблице.  

let body1 = document.querySelector('body');
let table15 = document.createElement('table');

let employees1 = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
]; 

for (const employee of employees1) {
    let tr = document.createElement('tr');

    let tdName = document.createElement('td');
    tdName.textContent = employee.name;
    tr.appendChild(tdName);

    let tdAge = document.createElement('td');
    tdAge.textContent = employee.age;
    tr.appendChild(tdAge);

    let tdSalary = document.createElement('td');
    tdSalary.textContent = employee.salary;
    tr.appendChild(tdSalary);

    // 481.8 Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы. 
    let tdDeleteLinks = document.createElement('td');
    let deleteLink = document.createElement('a');
    deleteLink.textContent = ' click to remove';
    deleteLink.onclick = () => {
        table15.removeChild(tr);
    }
    tdDeleteLinks.appendChild(deleteLink);
    tr.appendChild(tdDeleteLinks);

    table.appendChild(tr);
}

body1.appendChild(table);

// 481.7 Добавьте ячейкам созданной таблицы возможность редактирования. 
let tdList1 = document.querySelectorAll('table td');
for (let td of tdList1) {
    td.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = td.textContent;
        td.textContent = '';
        td.appendChild(input);

        input.addEventListener('blur', function() {
            td.textContent = input.value;
            td.addEventListener('click', func)
        });
        td.removeEventListener('click', func);
    });
}

// 481.9 Сделайте под таблицей 3 инпута и кнопку для добавление нового работника.
//Реализуйте редактирование ячеек для вновь добавленных работников. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. 
let inputName = document.createElement('input');
inputName.placeholder = 'Введите имя';
let inputAge = document.createElement('input');
inputAge.placeholder = 'Введите возраст';
let inputSalary = document.createElement('input');
inputSalary.placeholder = 'Введите зп';
let addButton = document.createElement('button');
addButton.textContent = 'Добавить сотрудника';

addButton.addEventListener('click', function() {
    let name = inputName.value;
    let age = inputAge.value;
    let salary = inputSalary.value;

	let tr = document.createElement('tr');

	let tdName = document.createElement('td');
	tdName.textContent = name;
	tr.appendChild(tdName);

	let tdAge = document.createElement('td');
	tdAge.textContent = age;
	tr.appendChild(tdAge);

	let tdSalary = document.createElement('td');
	tdSalary.textContent = salary;
	tr.appendChild(tdSalary);

	let tdDeleteLinks = document.createElement('td');
	let deleteLink = document.createElement('a');
	deleteLink.textContent = ' click to remove';
	deleteLink.onclick = () => {
		table.removeChild(tr);
	}
	tdDeleteLinks.appendChild(deleteLink);
	tr.appendChild(tdDeleteLinks);

	table.appendChild(tr);

	inputName.value = '';
	inputAge.value = '';
	inputSalary.value = '';
});

body.appendChild(inputName);
body.appendChild(inputAge);
body.appendChild(inputSalary);
body.appendChild(addButton);

//484.10 Дан следующий массив с работниками:

let employees2 = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];

let ul5 = document.createElement('ul');

//484.11 Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля. 
for (const employee of employees2) {
    let li = document.createElement('li');

    for (const key in employee) {
        let span = document.createElement('span');
        span.textContent = `${key}:  ${employee[key]} `;
        li.appendChild(span);

        span.addEventListener('click', function() {
            if (span.querySelector('input')) return;
            let input = document.createElement('input');
            input.value = employee[key];
            span.textContent = '';
            span.appendChild(input);

            input.addEventListener('blur', function() {
                employee[key] = input.value;
                span.textContent = `${key}: ${employee[key]}`;
            });

        });
    }

//484.12 Добавьте в конец каждого тега li ссылку на удаление этого li из списка. 
    let deleteLink = document.createElement('a');
    deleteLink.textContent = ' click to remove';
    deleteLink.onclick = () => {
        ul5.removeChild(li);
    }
    li.appendChild(deleteLink);

    ul5.appendChild(li);
}

document.body.appendChild(ul5);

//484.13 Под списком сделайте форму для добавления нового работника. 
let form = document.createElement('form');

let inputName = document.createElement('input');
inputName.placeholder = 'Имя';
form.appendChild(inputName);

let inputAge = document.createElement('input');
inputAge.placeholder = 'Возраст';
form.appendChild(inputAge);

let inputSalary = document.createElement('input');
inputSalary.placeholder = 'Зарплата';
form.appendChild(inputSalary);

let addButton = document.createElement('button');
addButton.textContent = 'Добавить сотрудника';
form.appendChild(addButton);

addButton.addEventListener('click', function(event) {
    event.preventDefault();
    let name = inputName.value;
    let age = parseInt(inputAge.value);
    let salary = parseInt(inputSalary.value);

    if (name && !isNaN(age) && !isNaN(salary)) {
        let newEmployee = { name, age, salary };
        employees2.push(newEmployee);

        let li = document.createElement('li');

        for (const key in newEmployee) {
            let span = document.createElement('span');
            span.textContent = `${key}: ${newEmployee[key]}`;
            li.appendChild(span);

            span.addEventListener('click', function() {
                if (span.querySelector('input')) return;
                let input = document.createElement('input');
                input.value = newEmployee[key];
                span.textContent = '';
                span.appendChild(input);

                input.addEventListener('blur', function() {
                    newEmployee[key] = input.value;
                    span.textContent = `${key}: ${newEmployee[key]}`;
                });
            });
        }

        let deleteLink = document.createElement('a');
        deleteLink.textContent = ' click to remove';
        deleteLink.onclick = () => {
            ul.removeChild(li);
            employees2.splice(employees2.indexOf(newEmployee), 1);
        }
        li.appendChild(deleteLink);

        ul.appendChild(li);

        inputName.value = '';
        inputAge.value = '';
        inputSalary.value = '';
    }
});

document.body.appendChild(form);