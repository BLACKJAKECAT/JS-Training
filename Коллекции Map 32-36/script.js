//32.1
let array1 = [1, 2, 3];
let array2 = ["a", "b", "c"];
let array3 = ["apple", "banana", "cherry"];

let map = new Map();
map.set(array1, "This is array 1");
map.set(array2, "This is array 2");
map.set(array3, "This is array 3");

console.log(map);


//32.2
let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };
let obj3 = { name: "Charlie" };

let array4 = [1, 2, 3];
let array5 = ["a", "b", "c"];
let array6 = ["apple", "banana", "cherry"];

let map1 = new Map();
map1.set(obj1, array4);
map1.set(obj2, array5);
map1.set(obj3, array6);

console.log(map1);

//35.1

let map2 = new Map();
        map2.set('key1', 'value1');
        map2.set('key2', 'value2');
        map2.set('key3', 'value3');

        let keysArray = Array.from(map2.keys());

        for (let key of keysArray) {
            console.log(key);
        }

//35.2

let map3 = new Map();
map3.set('key1', 'value1');
map3.set('key2', 'value2');
map3.set('key3', 'value3');

let entriesArray = Array.from(map3.entries());

for (let [key, value] of entriesArray) {
    console.log(`Key: ${key}, Value: ${value}`);
}

//36.1

let inputs = document.querySelectorAll('.field');
        let inputMap = new Map();

        inputs.forEach((input, index) => {
            inputMap.set(input, index + 1);
            input.addEventListener('click', function() {
                input.value = inputMap.get(input);
            });
        });

//36.2

let inputs1 = document.querySelectorAll('.input-field');
        let inputValues = [];

        inputs1.forEach(input => {
            input.addEventListener('keyup', function(event) {
                if (event.key === 'Enter') {
                    inputValues.push(Number(input.value));
                    input.value = '';
                }
            });

            input.addEventListener('blur', function() {
                console.log(inputValues);
            });
        });

