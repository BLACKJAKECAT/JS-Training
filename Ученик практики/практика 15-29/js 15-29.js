// 15 Игра в города на JavaScript
let cities = []; // массив для хранения введенных городов
let player15 = 1; // переменная для определения текущего игрока
function vvod() {
    let input15 = document.getElementById("elem15");
    let city15 = input15.value.trim(); // Метод trim() удаляет пробельные символы с начала и конца строки.
    if (city15 === "") {
        showMessage("Сначала введите город"); 
        return;
    }
    if (cities.length > 0) {
        let lastCity = cities[cities.length - 1];
        if (city15[0].toLowerCase() !== lastCity[lastCity.length - 1].toLowerCase()) {
            showMessage("Название города должно начинаться с последней буквы предыдущего города");
            return;
        }
        if (cities.includes(city15.toLowerCase())) {
            showMessage("Этот город уже был введен");
            return;
        }
    }
    cities.push(city15.toLowerCase());
    showMessage("последний введенный город: " + city15);

    player15 = player15 === 1 ? 2 : 1; // переключаем игрока

    input15.value = "";
}
function showMessage(text) {
    let message15 = document.getElementById("message15");
    message15.textContent = text;
}

// 18 Чеклист на JavaScript
let input18 = document.querySelector('#input18');
let list18 = document.querySelector('#list18');
input18.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        let li18 = document.createElement('li');
        let task18 = document.createElement('span');
        task18.classList.add('task');
        task18.textContent = this.value;
        task18.addEventListener('dblclick', function() {
            let text18 = this.textContent;
            this.textContent = '';
            let edit18 = document.createElement('input');
            edit18.value = text18;
            this.appendChild(edit18);
            let self18 = this;
            edit18.addEventListener('keypress', function(event) {
                if (event.key == 'Enter') {
                    self18.textContent = this.value;
                }
            });
        });
        li18.appendChild(task18);
        let remove18 = document.createElement('span');
        remove18.textContent = ' удалить ';
        remove18.style.color = 'red';
        remove18.classList.add('remove');
        remove18.addEventListener('click', function() {
            this.parentElement.remove();
        });
        li18.appendChild(remove18);
        let mark18 = document.createElement('span');
        mark18.textContent = ' сделано';
        mark18.style.color = 'green';
        mark18.classList.add('mark');
        mark18.addEventListener('click', function() {
            this.parentElement.style.textDecoration = 'line-through';
        });
        li18.appendChild(mark18);
        list18.appendChild(li18);
        this.value = '';
    }
});

// 24 Калькулятор продуктов на JavaScript
let name   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');
add.addEventListener('click', function() {
    let tr = document.createElement('tr');
    edit24(create24(tr, name.value, 'name'));
    edit24(create24(tr, price.value, 'price'));
    edit24(create24(tr, amount.value, 'amount'));
    create24(tr, price.value * amount.value, 'cost');
    create24(tr, 'удалить', 'remove').addEventListener('click', function() {
        this.parentElement.parentElement.removeChild(this.parentElement);
        res24();
    });
    table.appendChild(tr);
    res24();
});
function create24(tr, value, name) {
    let td = document.createElement('td');
    td.textContent = value;
    td.classList.add(name);
    tr.appendChild(td);
    return td;
}
function edit24(td) {
    td.addEventListener('dblclick', function() {
        let text = td.textContent
        td.textContent = '';
        let input = document.createElement('input');
        input.value = text;
        input.focus();
        td.appendChild(input);
        input.addEventListener('keydown', function(event) {
            if (event.key == 'Enter') {
                td.textContent = this.value;
                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    let tr = td.parentElement;
                    let price = tr.querySelector('.price');
                    let amount = tr.querySelector('.amount');
                    let cost = tr.querySelector('.cost');
                    cost.textContent = price.textContent * amount.textContent;
                    res24();
                }
            }
        });
    });
}
function res24() {
    let costs = table.querySelectorAll('.cost');
    if (costs) {
        let sum = 0;
        for (let cost of costs) {
            sum += +cost.textContent;
        }
        total.textContent = sum;
    }
}
