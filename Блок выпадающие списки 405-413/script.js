//405
//1
let select = document.getElementById('mySelect');
let selectedText = document.getElementById('selectedText');
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
    selectedText.innerHTML = select.options[select.selectedIndex].innerHTML;
});

//2



let yearSelect = document.getElementById('yearSelect');
let leapYearMessage = document.getElementById('leapYearMessage');

yearSelect.addEventListener("change", function() {
    let selectedYear = document.getElementById('yearSelect').value;

    if (selectedYear) {
        if (selectedYear % 4 === 0 && (selectedYear % 100 !== 0 || selectedYear % 400 === 0)) {
            leapYearMessage.innerText = selectedYear + '- Год весокосный';
        } else {
            leapYearMessage.innerText = selectedYear + '- Год не выскоксный';
        }
    } else {
        leapYearMessage.innerText = "";
    }
});





//406
//1

let daySelect = document.getElementById("daySelect");
let dayMessage = document.getElementById("dayMessage");

daySelect.addEventListener("change", function() {
  let selectedDay = daySelect.value;
  
  if (selectedDay) {
    let selectedOption = daySelect.options[daySelect.selectedIndex].text;
    
    if (selectedDay === "6" || selectedDay === "7") {
      dayMessage.innerText = "Выбран выходной день - " + selectedOption;
    } else {
      dayMessage.innerText = "Выбран рабочий день - " + selectedOption;
    }
  } else {
    dayMessage.innerText = "";
  }
});
//407
//1

let monthSelect = document.getElementById("monthSelect");
let currentMonth = new Date().getMonth() + 1; 

monthSelect.value = currentMonth.toString(); 

select.addEventListener("change", function() {
  let selectedValue = this.value;
  console.log(selectedValue);
});

//408
//1
let i5 = document.getElementById('i5');
i5.addEventListener("blur", function (){
    let iv = parseInt(i5.value);
    if (iv >= 1 && iv <= s1.options.length) {
        s1.selectedIndex = iv - 1;
    }
})

//2
let day = document.getElementById('day');
day.value = new Date().getDay();

//410
//1

let b4 = document.getElementById('b4');
b4.addEventListener("click", function (){
    for (let i = 0; i < s1.options.length; i++) {
        s1.options[i].text += s1.options[i].value;
    }
});

//411
//1

let b3 = document.getElementById('b3');
b3.addEventListener("click", function (){
    for (let i = 0; i < s1.options.length; i++) {
        if (i === s1.selectedIndex) {
            s1.options[i].text += "!";
        } else {
            s1.options[i].text += "?";
        }
    }
});

//412
//1

let b2 = document.getElementById('b2');
b2.addEventListener("click", function (){
    s1.selectedIndex = s1.options.length - 1;
});

//413
//1

let s1 = document.getElementById('s1');
let b1 = document.getElementById('b1');
let p1 = document.getElementById('p1');

b1.addEventListener('click', function (){
    p1.innerHTML = s1.options[s1.selectedIndex].text;
});


//2

let b12 = document.getElementById('b12');
b12.addEventListener("click", function (){
    let opt = s1.options[s1.selectedIndex];
    opt.innerHTML += '!';
});