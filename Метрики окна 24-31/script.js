let whwindow = document.querySelector('#whwindow');
let hscroll = document.querySelector('#hscroll');
let wscroll = document.querySelector('#wscroll');
//24.1
whwindow.addEventListener('click', wh);
function wh() {
    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.clientHeight);
}
//24.2
hscroll.addEventListener('click', hs);
function hs() {
    if (window.innerWidth <= document.documentElement.clientWidth){
    console.log('no have height_scroll');
    } else {
    console.log('you have height_scroll');
};
};
//24.3
wscroll.addEventListener('click', ws);
function ws() {
    if (window.innerHeight <= document.documentElement.clientHeight) {
        console.log('no have width_scroll');
    } else {
        console.log('you have width_scroll');
    };
};
//25.1
let binfo = document.getElementById('binfo');
    binfo.addEventListener('click', () => {
    console.log(`Высота с учетом прокрутки: ${document.documentElement.scrollHeight - window.pageYOffset}px`);
    console.log(`Ширина с учетом прокрутки: ${document.documentElement.scrollWidth - window.pageXOffset}px`);
    console.log(`Высота спрятанной части: ${document.documentElement.scrollHeight - window.pageYOffset - container.clientHeight}px`);
    });
//26.1
let scroll = document.getElementById('scroll');
    scroll.addEventListener('click', () => {
    console.log(`Прокручено по вертикали: ${window.pageYOffset}px`);
    });
//26.2
let sinfo = document.getElementById('sinfo');
    sinfo.addEventListener('click', () => {
    console.log(`Оставшаяся прокрутка по вертикали: ${document.documentElement.scrollHeight - window.pageYOffset - container.clientHeight}px`);
    });
//27.1
let up3 = document.getElementById('up3');
    up3.addEventListener('click', () => {
    window.scrollTo(0, 300);
    });
//27.2
let down1 = document.getElementById('down1');
    down1.addEventListener('click', () => {
    window.scrollTo(100, 0);
    });
//27.3
let up = document.getElementById('up');
    up.addEventListener('click', () => {
    window.scrollTo(0, 0);
    });
//27.4
let down = document.getElementById('down');
    down.addEventListener('click', () => {
      window.scrollTo(0, document.documentElement.scrollHeight);
    });
//28.1
let wup = document.getElementById('wup');
    wup.addEventListener('click', () => {
        window.scrollTo(0, 300)
    });
//28.2
let sup = document.getElementById('sup');
    sup.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
//28.3    
let sdown = document.getElementById('sdown');
    sdown.addEventListener('click', () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    });
//29.1
let down100 = document.getElementById('down100');
    down100.addEventListener('click', () => {
        window.scrollBy(0, 100);
    })
//29.2
let up100 = document.getElementById('up100');
    up100.addEventListener('click', () => {
        window.scrollBy(0, -100);
    })
//29.3
let sdown300 = document.getElementById('sdown300');
    sdown300.addEventListener('click', () => {
        window.scrollBy({
            top: 300,
            left: 0,
            behavior: 'smooth'
        });
    })
//29.4
let sup300 = document.getElementById('sup300');
    sup300.addEventListener('click', () => {
        window.scrollBy({
            top: -300,
            left: 0,
            behavior: 'smooth'
        });
    })
//30.1
let goto = document.getElementById('goto');
let elemen = document.getElementById("elemen");
    goto.addEventListener('click', () => {
        elemen.scrollIntoView({
        behavior: "smooth"
        });
    })
//31.1
window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log('your at down of the page')
    }
});
