//2.1

function changeSize() {
    let myDiv = document.getElementById("myDiv");
    myDiv.style.width = "400px";
    myDiv.style.height = "300px";
  }

//2.2

function showSize() {
    let elem10 = document.getElementById("elem10");
    let width = elem10.offsetWidth; // Получаем ширину без учета отступов и рамок
    let height = elem10.offsetHeight; // Получаем высоту без учета отступов и рамок
    
    console.log("Ширина: " + width + ", Высота: " + height);
  }
  
//2.3
function showFontSize() {
  let elem1 = document.getElementById("elem1");
  let fontSize = window.getComputedStyle(elem1).getPropertyValue('font-size');
  fontSize = parseFloat(fontSize); // Преобразуем размер шрифта из строки в число
 console.log("Размер шрифта: " + fontSize);
}

//3.4
function increaseSize() {
    let elem2 = document.getElementById("elem2");
    let currentWidth = elem2.offsetWidth;
    let currentHeight = elem2.offsetHeight;
    
    elem2.style.width = (currentWidth + 50) + "px";
    elem2.style.height = (currentHeight + 50) + "px";
  }


//3.5
function increaseSizes() {
    let elem3 = document.getElementById("elem3");
    let currentWidth = elem3.offsetWidth;
    let currentHeight = elem3.offsetHeight;
    
    let newWidth = currentWidth * 1.1;
    let newHeight = currentHeight * 1.1;
    
    elem3.style.width = newWidth + "px";
    elem3.style.height = newHeight + "px";
  }

//4.1

function getBorderStyle() {
    let elem4 = document.getElementById("elem4");
    let computedStyle = window.getComputedStyle(elem4);
    let borderStyle = computedStyle.border;
    console.log("Толщина: " + borderStyle);
  }

//5.1

function hideElement() {
    let elem5 = document.getElementById("elem5");
    elem5.style.display = "none";
  }
  
  function showElement() {
    let elem5 = document.getElementById("elem5");
    elem5.style.display = "block";
  }

//5.2

function changeColor1(color) {
    let elem6 = document.getElementById("elem6");
    elem6.style.backgroundColor = color;
  }

//6.1

/*elem.style.cssText =
width  = '100px';
height = '100px';
margin = '10px auto';
color  = 'red';
*/

//8.1   

function displaySize() {
    let elem7 = document.getElementById("elem7");
    let width = elem7.offsetWidth;
    let height = elem7.offsetHeight;
    console.log("Ширина: " + width + "px, Высота: " + height + "px");
  }

//8.2
  function increase() {
    let elem8 = document.getElementById("elem8");
    let currentWidth = elem8.offsetWidth;
    let currentHeight = elem8.offsetHeight;
    
    elem8.style.width = (currentWidth * 2) + "px";
    elem8.style.height = (currentHeight * 2) + "px";
  }


//9.1

function getFontSize() {
    let elem9 = document.getElementById("elem9");
    let fontSize = window.getComputedStyle(elem9).getPropertyValue("font-size");
    
    console.log("Размер шрифта элемента: " + fontSize);
  }

//10.1

function highlightNumbers() {
    let paragraphs = document.querySelectorAll("#numbers p");
  
    paragraphs.forEach(function(paragraph) {
      let number = parseInt(paragraph.textContent);
      
      if (number % 2 === 0) {
        paragraph.style.color = "red";
      } else {
        paragraph.style.color = "green";
      }
    });
  }

//11.1

function changeColor(element) {
    if (element.style.color === "red") {
      element.style.color = "black";
    } else {
      element.style.color = "red";
    }
  }


//12.1

function checkInputLength(input1) {
    if (input1.value.length <= 9) {
      input1.style.border = "1px solid green";
    } else {
      input1.style.border = "1px solid red";
    }
  }

//13.1
function checkNumberRange(input) {
    let number = parseInt(input.value);
    
    if (number < 10) {
      input.style.backgroundColor = "green";
    } else if (number >= 10 && number <= 20) {
      input.style.backgroundColor = "yellow";
    } else {
      input.style.backgroundColor = "red";
    }
  }