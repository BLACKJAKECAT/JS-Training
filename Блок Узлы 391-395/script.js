 //391
 //1
 let elem = document.querySelector('#elem')
 console.log(elem.lastChild);
 console.log(elem.lastElementChild);

 //2
 console.log(elem.nextSibling);
 console.log(elem.nextElementSibling);

 //3
 console.log(elem.previousSibling);
 console.log(elem.previousElementSibling);

 //392
 //1
 let elem1 = document.querySelector('#elem');

 for (let node of elem1.childNodes) {
   console.log(node);
 }


 //393
 //1
 let elem2 = document.querySelector('#elem');

 for (let node of elem2.childNodes) {
   console.log(node.nodeName);
 }

 //394
 // 1
 let elem3 = document.querySelector('#elem');

 for (let node of elem3.childNodes) {
   if (node.nodeType === 1 || node.nodeType === 3) {
     console.log(node);
   }
 }


//395
 //1
 let elem4 = document.querySelector('#elem');

 for (let node of elem4.childNodes) {
   console.log(node.textContent);
 }

 //2
 let elem5 = document.querySelector('#elem');

 for (let node of elem5.childNodes) {
   if (node.nodeType === 3 || node.nodeType === 8) {
     console.log(node.textContent);
   }
 }

// 3
 let elem6 = document.querySelector('#elem');

 for (let node of elem6.childNodes) {
   if (node.nodeType === 3 || node.nodeType === 1) {
     console.log(node.textContent);
   }
 }

// 4
 let elem7 = document.querySelector('#elem');

 for (let node of elem7.childNodes) {
   console.log(node.textContent + ' - ' + node.nodeName);
 }