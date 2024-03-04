//1
let input = document.querySelector('#myInput');
let paragraph = document.querySelector('#myParagraph');

input.addEventListener('blur', function() {
    paragraph.textContent += input.value;
});

//2
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let calculateButton = document.querySelector('#calculateButton');
let resultParagraph = document.querySelector('#resultParagraph');
calculateButton.addEventListener('click', function() {
    
        let num1 = Number(input1.value);
        let num2 = Number(input2.value);
        let num3 = Number(input3.value);
    
        let sum = num1 + num2 + num3;
        resultParagraph.textContent = 'Сумма: ' + sum;
});

//3

let numberInput = document.querySelector('#numberInput');
let sumOutput = document.querySelector('#sumOutput');

numberInput.addEventListener('blur', function() {
    let number = numberInput.value;
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }

    sumOutput.textContent = 'Сумма цифр: ' + sum;
});

//4

let numbersInput = document.getElementById('numbersInput1');
let averageSpan = document.getElementById('average');

    numbersInput.addEventListener('blur', function() {
    let numbers = numbersInput.value.split(',').map(Number);
    let er1 = numbers.reduce((acc, curr) => acc + curr, 0);
    let av = er1 / numbers.length;
    averageSpan.textContent = av;
});

//5

let fullNameInput = document.querySelector("#fullNameInput");
let lastNameInput = document.querySelector("#lastNameInput");
let firstNameInput = document.querySelector("#firstNameInput");
let middleNameInput = document.querySelector("#middleNameInput");

fullNameInput.addEventListener("blur", function () {
  let fullName = fullNameInput.value.trim();
  let [lastName, firstName, ...middleName] = fullName.split(" ");

  lastNameInput.value = lastName;
  firstNameInput.value = firstName;
  middleNameInput.value = middleName.join(" ");
});

//6 

let z6 = document.getElementById('zd6')
z6.addEventListener('blur', function(){
    let input = document.getElementById('zd6');
    let fullName = input.value.split(' ');
    let capitalizedFullName = fullName.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    input.value = capitalizedFullName.join(' ');
})

//7

let z7 = document.getElementById('zd7')
z7.addEventListener('blur', function() {
    let text = z7.value;
    let words = text.split(/\s+/).filter(function(word) {
      return word.length > 0;
    });
    console.log('Количество слов: ' + words.length);
  });

//8

let z8 = document.getElementById('zd8')
z8.addEventListener('blur', function(){
    let parts = z8.value.split(".");
    let date = parts[2] + "-" + parts[1] + "-" + parts[0];
    z8.value = date;
})

//9

let z9 = document.getElementById('zd9')
let z9b = document.getElementById('zd9b')
z9b.addEventListener('click', function(){
    let word = z9.value.toLowerCase();
    let reversedWord = word.split('').reverse().join('');
  if (word == reversedWord) {
    console.log('yes');
  } else {
    console.log('no');
  }
})

//10

let z10 = document.getElementById('zd10')
z10.addEventListener('blur', function(){
    if (z10.value.includes('3')) {
        console.log('yes');
      } else {
        console.log('no');
      }
})

//11 

let z11p = document.getElementById('zdp11')
let z11b = document.getElementById('zd11b')
z11b.addEventListener('click', function(){
    let paragraphs = document.querySelectorAll('#zdp11');
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML += ' ' + (i + 1);
}});

//12 

let z12 = document.getElementById("zd12");
add()
function add(){ 
    z12.innerHTML +="(" + z12.href + ")";
};

//13 

let links = ["http://example.com", "https://example2.com", "ftp://example3.com"];
let linksDiv = document.querySelector('#links1');
for (let i = 0; i < links.length; i++) {
    let modifiedLink = links[i];
    if (links[i].startsWith("http://")) {
      modifiedLink += " &rarr;";
    }
    let p = document.createElement('p');
    p.innerHTML = modifiedLink;
    linksDiv.appendChild(p);
  }

//14 

let z14 = document.getElementById('zd14')
    z14.addEventListener('click', function() {
      let number = parseFloat(z14.textContent);
      if (!isNaN(number)) {
        z14.textContent = Math.pow(number, 2);
      }
    });;

//15

let dateInput = document.getElementById("dateInput");

        dateInput.addEventListener("blur", function() {
            let inputDate = dateInput.value;
            let dateParts = inputDate.split('.');
            let day = parseInt(dateParts[0]);
            let month = parseInt(dateParts[1]) - 1; 
            let year = parseInt(dateParts[2]);

            let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
            let dayOfWeek = new Date(year, month, day).getDay();
            console.log("День недели: " + daysOfWeek[dayOfWeek]);
        });


//16

let numberIn = document.getElementById("numberIn");

        function incrementValue() {
            let value = parseInt(numberIn.value, 10);
            numberIn.value = value + 1;
        }

        function decrementValue() {
            let value = parseInt(numberIn.value, 10);
            if (value > 0) {
                numberIn.value = value - 1;
            }
        }


//17

let clickCount = 0;
        let clickCountInput = document.querySelector("#clickCountInput");

        function incrementCounter() {
            clickCount++;
            clickCountInput.value = clickCount;
        }

//18

let divs = document.getElementsByClassName("text-div");

for (let i = 0; i < divs.length; i++) {
  let text = divs[i].innerHTML;
  if (text.length > 10) {
    divs[i].innerHTML = text.slice(0, 10) + '...';
  }
}

//19

function generateRandomString() {
  let randomString = generateRandomStringOfLength(8);
  document.querySelector("#randomStringInput").value = randomString;
}

function generateRandomStringOfLength(length) {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  let charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * charactersLength)];
  }

  return result;
}

//20

function shuffleCharacters() {
  let input = document.querySelector("#inputString");
  let text = input.value;
  let shuffledText = shuffleString(text);
  input.value = shuffledText;
}

function shuffleString(str) {
  let shuffled = str
    .split("")
    .sort(function () {
      return 0.5-Math.random();
    })
    .join("");
  return shuffled;
}

//21

let fahrenheitInput = document.querySelector("#fahrenheitInput");
let convertButton = document.querySelector("#convertButton");
let celsiusOutput = document.querySelector("#celsiusOutput");

convertButton.addEventListener("click", function () {
  let fahrenheit = Number(fahrenheitInput.value);
  let celsius = (fahrenheit - 32) * (5 / 9);
  celsiusOutput.innerText = celsius.toFixed(1);
});

//22

function calculateFactorial() {
  let number = parseInt(document.querySelector("#number").value);
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  document.querySelector("#result").innerText =
    "Факториал числа " + number + " равен " + factorial;
}

//23

function solveQuadratic() {
  let a = +document.querySelector("#a").value;
  let b = +document.querySelector("#b").value;
  let c = +document.querySelector("#c").value;

  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.querySelector("#result1").innerText = "Корни уравнения: x1 = " + x1 + ", x2 = " + x2;
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    document.querySelector("#result1").innerText = "Уравнение имеет один корень: x = " + x;
  } else {
    document.querySelector("#result1s").innerText = "Уравнение не имеет действительных корней";
  }
}
