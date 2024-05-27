let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let btsize = document.querySelector('#btsize');
let btnScroll = document.querySelector('#btnScroll');
let btnScrollSize = document.querySelector('#btnScrollSize');
let btnScrollest = document.querySelector('#btnScrollest');
let srcollno = document.querySelector('#scrollno');
let scrollup = document.querySelector('#scrollup');
let scrolldown = document.querySelector('#scrolldown');
let scrollall = document.querySelector('#scrollall');
let scrolladd = document.querySelector('#scrolladd');
let scrollleft = document.querySelector('#scrollleft');
let btnhight = document.querySelector('#btnhight');
let getscroll = document.querySelector('#getscroll')
//16
btn.addEventListener('click', Csize);
function Csize() {
    console.log(elem.clientWidth, "ширина");
    console.log(elem.clientHeight, "высота");
};
//17.1
btn2.addEventListener('click', Esize);
function Esize() {
    console.log(elem.offsetWidth, "ширина");
    console.log(elem.offsetHeight, "высота");
};
//17.2
btsize.addEventListener('click', MathSize);
function MathSize() {
    console.log(elem.offsetWidth - elem.clientWidth, "разница между полной и клиентской шириной")
};
//18.1
btnScroll.addEventListener('click', ScrollSize);
function ScrollSize() {
    console.log(elem.scrollWidth, "ширина"); 
    console.log(elem.scrollHeight, "высота");
};
//18.2
btnScrollSize.addEventListener('click', SZ);
function SZ() {
    console.log(elem.scrollHeight - elem.offsetHeight, "разница между высоты прокрутки от полной высоты")
};
//19.1
btnScrollest.addEventListener('click', scroll);
function scroll() {
    console.log(elem.scrollTop, "сверху");
    console.log(elem.scrollLeft, "слева");
};
//19.2
srcollno.addEventListener('click', scrolll);
function scrolll() {

    if (elem.scrollTop === 0 || elem.scrollLeft === 0){
        console.log('no');
    }
    else if (elem.scrollTop > 0 || elem.scrollLeft > 0){
        console.log('yes');
    }
};
//20.1
scrollall.addEventListener('click', scrollAll);
function scrollAll() {
    elem.scrollTop = 200;
    elem.scrollLeft = 50;
};
//20.2
scrolladd.addEventListener('click', scrollAdd);
function scrollAdd() {
    elem.scrollTop = elem.scrollTop + 50;
};
//20.3
scrollup.addEventListener('click', scrollUp);
function scrollUp() {
    elem.scrollTop = 0;
};
//20.4
scrolldown.addEventListener('click', scrollDown);
function scrollDown() {
    elem.scrollTop = elem.scrollHeight;
};
//21
scrollleft.addEventListener('click', ScrollLeft);
function ScrollLeft() {
    if (elem.scrollLeft === elem.scrollWidth - elem.clientWidth) {
        console.log('yes');
    } else {
        console.log('no')
    }
};
//22
btnhight.addEventListener('click', btnHight);
function btnHight() {
    elem.style.height = elem.scrollHeight + 'px';
};
//23
getscroll.addEventListener('click', get);
function get() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    console.log(scrollWidth)
    div.remove();
};