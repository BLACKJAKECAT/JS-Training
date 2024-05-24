// 30 Тест с вопросами и ответами в HTML коде на JavaScript
// Сделайте так, чтобы ввод ответа в инпут завершался нажатием клавиши Enter. Пусть в этом случае инпут сразу проверяет ответ на правильность.
let input1 = document.querySelector('#elem30_1');
input1.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        let value = input1.value.trim();
        if (value === '4') {
            input1.classList.add('right');
        } else {
            input1.classList.add('wrong');
        }
    }
});
let input2 = document.querySelector('#elem30_2');
input2.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        let value = input2.value.trim();
        if (value === 'среда') {
            input2.classList.add('right');
        } else {
            input2.classList.add('wrong');
        }
    }
});
let input3 = document.querySelector('#elem30_3');
input3.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        let value = input3.value.trim();
        if (value === '12') {
            input3.classList.add('right');
        } else {
            input3.classList.add('wrong');
        }
    }
});

// 32 Тест с вопросами и ответами в массиве на JavaScript
// Реализуйте поставленную задачу.
let answers32 = [
    'Москва',
    'Рим',
    'Вашингтон',
];
let questions = [
    'столица России?',
    'столица Италии?',
    'столица США?'
];
let test32 = document.getElementById('test32');
let button = document.getElementById('button32');
function createQuestionHTML(question, _index) {
    let div32 = document.createElement('div');
    let question32 = document.createElement('p');
    let answer32 = document.createElement('input');
    question32.textContent = question;
    answer32.placeholder = 'Введите ответ';
    div32.appendChild(question32);
    div32.appendChild(answer32);
    test32.appendChild(div32);
}
questions.forEach((question, index) => {
    createQuestionHTML(question, index);
});
button.addEventListener('click', function() {
    let inputs = test32.querySelectorAll('input');
    let allCorrect = true;
    inputs.forEach((input, index) => {
        if (input.value.toLowerCase() !== answers32[index].toLowerCase()) {
            allCorrect = false;
        }
    });
    if (allCorrect) {
        alert('Все ответы верные!');
    } else {
        alert('Есть ошибки в ответах.');
    }
});

// 34 Тест с вариантами ответов в HTML коде на JavaScript
// Сделайте так, чтобы при выборе одного из ответов вопроса этот ответ сразу проверялся на правильность.
// let answers34 = [
//     'ответ 1',
//     'ответ 2',
//     'ответ 3',
// ];
// let questions34 = [
//     'вопрос 1?',
//     'вопрос 2?',
//     'вопрос 3?'
// ];
// let test34 = document.getElementById('test34');

// function createQuestionHTML(question34, index34) {
//     let div34 = document.createElement('div');
//     let q34 = document.createElement('p');
//     q34.textContent = question34;
//     div34.appendChild(q34);
//     answers34.forEach((answer34) => {
//         let ainp34 = document.createElement('input');
//         ainp34.type = 'radio';
//         ainp34.name = question34[index34];
//         ainp34.value = answer34;
//         ainp34.addEventListener('change', function() {
//             if (ainp34.checked) {
//                 if (ainp34.value.toLowerCase() === answers34[index34].toLowerCase()) {
//                     alert('Правильный ответ!');
//                 } else {
//                     alert('Неправильный ответ!');
//                 }
//             }
//         });
//         let label34 = document.createElement('label');
//         label34.textContent = answer34;
//         div34.appendChild(ainp34);
//         div34.appendChild(label34);
//     });
//     test34.appendChild(div34);
// }
// questions34.forEach((question34, index34) => {
//     createQuestionHTML(question34, index34);
// });

// 
// 
let texts37 = ['text1', 'text2', 'text3'];
let current37 = 0;
let slide37 = document.getElementById('slider37');

function updateText37() {
    slide37.textContent = texts37[current37];
    current37 = (current37 + 1) % texts37.length; 
}
setInterval(updateText37, 1000);

// 38 Слайдер текста со стрелками на JavaScript
let texts = ['text1', 'text2', 'text3'];
let current38 = 0;
let slide38 = document.getElementById('slider38');
let leftArrow = document.getElementById('left');
let rightArrow = document.getElementById('right');
function updateText38() {
    slide38.textContent = texts[current38];
}
function decreaseIndex() {
    current38 = (current38 - 1 + texts.length) % texts.length; 
    updateText38();
}
function increaseIndex() {
    current38 = (current38 + 1) % texts.length; 
    updateText38();
}
leftArrow.addEventListener('click', decreaseIndex);
rightArrow.addEventListener('click', increaseIndex);
updateText38(); 

// 39 Слайдер картинок через массив на JavaScript
// Реализуйте описанный слайдер. Сделайте так, чтобы картинки ходили по кругу.
let images = ['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg'];
let currentIndex = 0;
let sliderElement = document.getElementById('slider');
function updateImage() {
    sliderElement.src = images[currentIndex];
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    updateImage();
}
setInterval(nextImage, 1000);
updateImage();

// 41 Игра крестики-нолики на JavaScript
let board = document.querySelector('.board');
let currentPlayer = 'X';
let cells = Array.from({ length: 9 });
cells.forEach((_, index) => {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = index;
    cell.addEventListener('click', () => cellClick1(index));
    board.appendChild(cell);
});
function cellClick1(index) {
    if (cells[index] || checkForWinner()) return;
    cells[index] = currentPlayer;
    renderBoard();
    if (!checkForWinner()) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}
function renderBoard() {
    cells.forEach((value, index) => {
        board.children[index].textContent = value || '';
    });
}
function checkForWinner() {
    let comb41 = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let comb of comb41) {
        let [a, b, c] = comb;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            alert('Игрок ' +currentPlayer+' победил!');
            return true;
        }
    }
    if (cells.every(cell => cell)) {
        alert('Ничья');
        return true;
    }
    return false;
}

// 47 Игра смена цветов на JavaScript 
const colors = ['red', 'green', 'blue'];
let clicks = 0;
const field = document.getElementById('field');
const counter = document.getElementById('clicks');
const cells2 = Array.from({ length: 9 });
cells2.forEach((_, index) => {
    const cell = document.createElement('td');
    cell.addEventListener('click', () => cellClick2(cells2, index));
    field.appendChild(cell);
});
function cellClick2(cells2, index) {
    clicks++;
    counter.textContent = clicks;
    const currentColor = cells2[index]?.classList[1];
    const nextColorIndex = (currentColor ? colors.indexOf(currentColor) + 1 : 0) % colors.length;
    cells2[index].className = colors[nextColorIndex];
    if (win2(cells2)) {
        alert('Победа');
    }
}
function win2(cells2) {
    return cells2.every(cell => cell.classList[1] === cells2[0].classList[1]);
}