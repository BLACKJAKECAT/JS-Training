// 52 Календарь на JavaScript
let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');
let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();
draw(body, year, month);
function draw(body, year, month) {
	let arr = range(getLastDay(year, month));
	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay  = getLastWeekDay(year, month);
	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums)
}
function createTable(parent, arr) {
	parent.textContent = '';
	let cells = [];
	for (let sub of arr) {
		let tr = document.createElement('tr');
		for (let num of sub) {
			let td = document.createElement('td');
			td.textContent = num;
			tr.appendChild(td);
			cells.push(td);
		}
		parent.appendChild(tr);
	}
	return cells;
}
function normalize(arr, left, right) {
	for (let i = 0; i < left; i++) {
		arr.unshift('');
	}
	for (var i = 0; i < right; i++) {
		arr.push('');
	}
	return arr;
}
function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 1);
	let num  = date.getDay();
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}
function getLastWeekDay(year, month) {
	let date = new Date(year, month + 1, 0);
	let num  = date.getDay();
	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}
function getLastDay(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}
function range(count) {
	let arr = [];
	for (let i = 1; i <= count; i++) {
		arr.push(i);
	}
	return arr;
}
function chunk(arr, n) {
	let result = [];
	let count = Math.ceil(arr.length / n);
	for (let i = 0; i < count; i++) {
		let elems = arr.splice(0, n);
		result.push(elems);
	}
	return result;
}
prev.addEventListener('click', function() {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    updateCalendar(year, month);
  });
  
next.addEventListener('click', function() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    updateCalendar(year, month);
});
function updateCalendar(year, month) {
    let info = calendar.querySelector('.info');
    info.textContent = getMonthName(month)+' '+year;
    draw(body, year, month);
}
function getMonthName(month) {
    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    return months[month];
}
  
