//396
//1
let textarea = document.getElementById('elem');
let output = document.getElementById('par');

textarea.addEventListener('blur', function() {
  output.innerHTML = textarea.value;
}); 

//397
//1
let input = document.getElementById('myInput');
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
  input.disabled = true;
}); 

//2

let input1 = document.getElementById('myInput1');
let button1 = document.getElementById('myButton1');
let button2 = document.getElementById('myButton2');

button1.addEventListener('click', function() {
  input1.disabled = true;
}); 


button2.addEventListener('click', function() {
    input1.disabled = false;
  }); 

//3
let input2 = document.getElementById('myInput2');
let button3 = document.getElementById('myButton3');

button3.addEventListener('click', function() {
  if (input2.disabled) {
    console.log('Инпут заблокирован');
  } else {
    console.log('Инпут не заблокирован');
  }
});


//398
//1

let input3 = document.getElementById('myInput3');
let button4 = document.getElementById('myButton4');
let button5 = document.getElementById('myButton5');

button4.addEventListener('click', function() {
  input3.checked = true;
}); 


button5.addEventListener('click', function() {
    input3.checked = false;
  }); 

//2

let input4 = document.getElementById('myInput4');
let button6 = document.getElementById('myButton6');
let abz = document.getElementById('abz')

button6.addEventListener('click', function() {
  if (input4.checked) {
    abz.innerHTML = "Привет"
  } else {
    abz.innerHTML = "Пока"
  }
});

//399
//2

let input5 = document.getElementById('myInput5')
let button7 = document.getElementById('myButton7');
button7.addEventListener('click', function() {
	input5.disabled = !input5.disabled;
});


//400
//1
let radios = document.querySelectorAll('input[type="radio"]');
let button8 = document.querySelector('#myButton8');
let abz1 = document.querySelector('#abz1')

button8.addEventListener('click', function() {
	for (let radio of radios) {
		if (radio.checked) {
			abz1.innerHTML  = radio.value;
		}
	}
});

//401
//1

let input6 = document.querySelector('#myInput6');
let abz2 = document.querySelector('#abz2')

input6.addEventListener('change', function() {
	abz2.innerHTML = this.value;
});

//2
let input7 = document.querySelector('#myInput7');
input7.addEventListener('change', function() {
	console.log(this.checked);
});

//4
   let input8 = document.getElementById('myInput8');

        input8.addEventListener('change', function() {
        if (input8.value.length < 5) {
        input8.style.border = 'solid green';
      } else {
        input8.style.border = 'solid red';
      }
    });


//402
//1
let input9 = document.querySelector('#myInput9');

input9.addEventListener('input', function() {
	if(input9.value.length == 5){
        console.log('5 символов')
    }
});

//2
let input10 = document.getElementById('myInput10');
let abz3 = document.getElementById('abz3');

input10.addEventListener('input', function() {
  let remainingChars = 5 - input10.value.length;

  if (remainingChars >= 0) {
    abz3.innerHTML = remainingChars;
  } else {
    abz3.innerHTML = Math.abs(remainingChars);
  }
});

//403
//1
let input11 = document.getElementById('input11');
let input12 = document.getElementById('input12');

input11.addEventListener('input', function() {
  if (input11.value.length == 2) {
    input12.focus();
  }
});

input12.addEventListener('input', function() {
  if (input12.value.length == 2) {
    input12.blur();
  }
});