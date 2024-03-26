
// 414 1

let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
    console.log(event); // увидим объект с событием
});

// 415 1

let elem1 = document.querySelector('#elem');		
window.addEventListener('mousemove', function(event) {
	elem1.innerHTML = event.pageX + ':' + event.pageY;
});

// 416 1

let elem2 = document.querySelector('#elem');

elem2.addEventListener('click', func);
elem2.addEventListener('dblclick', func);

function func(event) {
    if (event.type === 'click') {
        elem2.style.backgroundColor = 'green';
    }
	else if (event.type === 'dblclick') {
        elem2.style.backgroundColor = 'red';
    }

}

// 417 1

let elem3 = document.querySelector('#ele');

elem3.addEventListener('click', function(event) { 
    if (event.target.tagName === 'LI') { 
        event.target.textContent += '!'; 
    } 
    else if (event.target.tagName === 'UL') { 
        console.log('Клик был по тегу ul'); 
    } });


// 418 1

  let inputField = document.getElementById('input-field');
  inputField.addEventListener('input', function(event) {
    let inputValue = event.target.value;
    let keyCode = event.keyCode;
    let key = event.key;
    console.log(`Введен символ: ${inputValue}`);
    console.log(`Код клавиши: ${keyCode}`);
    console.log(`Нажатая клавиша: ${key}`);
  });

// 418 2

  let inputField1 = document.getElementById('input-field');
  inputField1.addEventListener('keydown', function(event) {
    let keyCode = event.keyCode;
    console.log(`Код клавиши: ${keyCode}`);
  });

// 418 3

  let inputField2 = document.getElementById('input-field');
  inputField2.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      console.log(`Код клавиши: ${event.keyCode} (Enter)`);
    }
  });


// 418 4

  let inputField3 = document.getElementById('input-field');
  inputField3.addEventListener('keydown', function(event) {
    if (event.keyCode === 8) {
      console.log(`Код клавиши: ${event.keyCode} (Backspace)`);
    }
  });

// 418 5

let input = document.getElementById("input");
let output = document.getElementById("output");

input.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    output.textContent = input.value; 
    input.value = ""; 
}});




// 419 1

let elem4 = document.querySelector('#element');
elem4.addEventListener('click', function(event) {
	if (event.altKey) {
        elem4.style.backgroundColor = 'red';
	}
});

//419 2

let listItems = document.querySelectorAll("#elem5 li");

listItems.forEach(item => {
    item.addEventListener("click", function(event) {
        if (event.ctrlKey) {
            item.textContent += "1"; 
        } else if (event.shiftKey) {
            item.textContent += "2"; 
        }
    });
});



// 420 1

  let elem5 = document.querySelector('#elem6');
  elem5.addEventListener('click', function(event) {
    event.preventDefault();
    elem5.innerHTML = 'Ссылка: '+ elem5.href;
  });



//420 2

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", function() {
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    let sum = num1 + num2;
    result.textContent = 'Сумма введенных чисел:' + sum;
});

// 421 1

document.getElementById('outer').addEventListener('click', function() {
    alert('Outer element clicked');
});

document.getElementById('middle').addEventListener('click', function() {
    alert('Middle element clicked');
});

document.getElementById('inner').addEventListener('click', function() {
    alert('Inner element clicked');
});



// 421 2

let ie = document.getElementById('i1');
ie.addEventListener('blur', function() {
    console.log('Элемент потерял фокус.');
});





// 422 1

let divElement = document.querySelector('#div12');

divElement.addEventListener('click', function(event) {
  const target = event.target;

  if (target.tagName.toLowerCase() === 'li') {
    target.textContent += '!';
  } else if (target.tagName.toLowerCase() === 'ul') {
    console.log('Событие произошло в ul');
  }
});



// 426

let parent = document.querySelector('#parent');
let button = document.querySelector('#but');
let block  = document.querySelector('#block');

button.addEventListener('click', function() {
	block.classList.add('active');
});


parent.addEventListener('click', function() {
	block.classList.remove('active');
});
// 429 

let list = document.getElementById('list');

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.textContent = event.target.textContent + '!';
  } 
});


// 430

let list1   = document.querySelector('#ul1');

list1.addEventListener('click', function(event) {
	let li = event.target.closest('#li1');
	
	if (li) {
		li.textContent = '!';
	}
});
