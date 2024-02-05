//168
/*1 Дан следующий массив:

let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.*/

let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2])
console.log(arr[1][1])
console.log(arr[2][0])
console.log(arr[0][0])

/*2 Дан следующий массив:

let arr = [[1, 2], [3, 4], [5, 6]];
Обращаясь к каждому элементу массива найдите сумму всех его элементов.*/

let arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}

console.log(sum);

//169

/*1 Дан следующий массив:

let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
Обращаясь к каждому элементу массива найдите сумму всех его элементов. */

let arr = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ];
  
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          for (let k = 0; k < arr[i][j].length; k++) {
              sum += arr[i][j][k];
          }
      }
  }
  
  console.log(sum);

  //170
  /*1 Дан следующий массив:

let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
Вручную, без цикла, найдите сумму элементов этого массива.*/

let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
let sum = 0;
    sum += arr[0][0]; 
    sum += arr[0][1]; 
    sum += arr[0][2]; 
    sum += arr[0][3][0]; 
    sum += arr[0][3][1]; 
    sum += arr[0][3][2][0]; 
    sum += arr[0][3][2][1]; 
    sum += arr[1][0]; 
    sum += arr[1][1][0]; 
    sum += arr[1][1][1]; 
console.log(sum);


//171

/*1 Дан двухмерный массив с числами:

let arr = [[1, 2, 3], [4, 5], [6]];
С помощью вложенных циклов найдите сумму элементов этого массива. */

let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let subArr of arr) {
  for (let num of subArr) {
  sum += num;
  }
}
console.log(sum);


/*Дан трехмерный массив с числами:

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
С помощью вложенных циклов найдите сумму элементов этого массива.*/

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (let outer of arr) {
    for (let inner of outer) {
        for (let element of inner) {
        sum += element;
        }
    }
}
console.log(sum);



//172
/*1 Решите предыдущие две задачи через цикл for.*/



let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
    }
}
console.log(sum);



let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
        sum += arr[i][j][k];
        }
    }
}
console.log(sum);

//173 

/*1 Сформируйте с помощью двух вложенных циклов следующий массив:

[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]*/

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; 
	
	for (let j = 0; j < 5; j++) {
		arr[i].push(j + 1); 
	}
}

console.log(arr);

/*2 Сформируйте с помощью двух вложенных циклов следующий массив:

[
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x']
]*/

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []; 
	
	for (let j = 0; j < 4; j++) {
		arr[i].push('x'); 
	}
}

console.log(arr);


/*3 Сформируйте с помощью трех вложенных циклов следующий массив:

[
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
]*/

let arr = [];
for (let i = 0; i < 3; i++) {
    let a = [];
        for (let j = 0; j < 2; j++) {
            let b = [];
                for (let k = 1; k <= 5; k++) {
                    b.push(k);
                }
            a.push(b);
        }
    arr.push(a);
}
console.log(arr);

//174
/*1 Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i]=[];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);

/*Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = '';
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);

/*3 Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

/*4 Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[j] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);

/*5 Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr)

/*6 Автор следующего кода хотел сделать двухмерный массив:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr.push(j);
	}
}

console.log(arr);

Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/
let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}
console.log(arr);

//175
/*1 Сформируйте с помощью двух вложенных циклов следующий массив:

[[1, 2], [3, 4], [5, 6], [7, 8]]*/

let arr = [];
let a = 1;
for (let i = 0; i < 4; i++) {
     arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i].push(a);
        a++;
    }
}
console.log(arr);

/*2 Сформируйте с помощью двух вложенных циклов следующий массив:

[[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]*/

let arr = [];
let a = 2;
for (let i = 0; i < 4; i++) {
     arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i].push(a);
        a+=2;
    }
}
console.log(arr);

/*3 Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:

[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]*/

let arr = [];
let a = 1;
for (let i = 0; i < 2; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let k = 0; k < 2; k++) {
            arr[i][j].push(a);
            a++;
        }
    }
}
console.log(arr);

/*4 Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора. */

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);

/*5 Автор следующего кода хотел сделать вот такой массив:

 [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++
	}
}
console.log(arr);

/*6 Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k--;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}
console.log(arr);

/*7 Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];
let k;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}
console.log(arr);

/*8 Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
let k = 1;
for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++
	}
}
console.log(arr);

/*9 Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0, k++; j < 3; j++) {
		arr[i][j] = k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++
	}
}
console.log(arr);

/*10 Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++; k++) {
		arr[i][j] = k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
let k = 1;
for (let i = 0;  i < 3; i++) {
	arr[i] = [];
	for (let j = 0;j < 3; j++) {
		arr[i][j] = k;
		k++
	}
}
console.log(arr);

/*11 Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = ++k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++
	}
}

console.log(arr);

/*12 Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[k] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);

/*13 Автор следующего кода хотел сделать вот такой массив:

[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Для этого был написан следующий код:

let arr = [];

for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; k++) {
		arr[i][j] = k;
	}
}

console.log(arr);
Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.*/

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++
	}
}

console.log(arr);

//176
/*1 Дан следующий объект:

let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
Найдите сумму элементов приведенного объекта.*/

let obj = {
    key1: {
      key1: 1,
      key2: 2,
      key3: 3,
    },
    key2: {
      key1: 4,
      key2: 5,
      key3: 6,
    },
    key3: {
      key1: 7,
      key2: 8,
      key3: 9,
    },
  };
  
  let sum = 0;
  
  for (let key in obj) {
      let a = obj[key];
      for (let b in a) {
          sum += a[b];
      }
  }
  
  console.log(sum);

/*2 Дан следующий объект:

let obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
Выведите на экран элемент 'b2' и элемент 'c1'.*/

let obj = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
console.log(obj['2']['2']);
console.log(obj['3']['1']);

/*3 Дан следующий объект:

let obj = {
	key1: {
		a: 1, b: 2, c: {
			d: 3,
			e: 4,
		}, f: 5,
	},
	key2: {
		g: 6, h: 7,
	},
}
Вручную, без цикла, найдите сумму всех элементов-чисел.*/

let obj = {
    key1: {
      a: 1, b: 2, c: {
        d: 3,
        e: 4,
      }, f: 5,
    },
    key2: {
      g: 6, h: 7,
    },
  }
  let sum = obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f + obj.key2.g + obj.key2.h;
  console.log(sum); 

//177
/*1 Дан следующий объект:

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
Используя циклы, найдите сумму элементов этого объекта.*/

let obj = {
    1: {
      1: 11,
      2: 12,
      3: 13,
    },
    2: {
      1: 21,
      2: 22,
      3: 23,
    },
    3: {
      1: 24,
      2: 25,
      3: 26,
    },
  }
  let sum = 0;
  for (let key in obj) {
    for (let a in obj[key]) {
      sum += obj[key][a];
    }
  }
  console.log(sum);

/*2 Дан следующий объект:

let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
Используя циклы, найдите сумму элементов этого объекта.*/
  let obj = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
let sum = 0;
for (let key in obj) {
  for (let a in obj[key]) {
      for (let b in obj[key][a]){
        sum += obj[key][a][b];
      }
  }
}
console.log(sum);

//178
/*1 Дан следующий объект со студентами:

let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
Выведите на экран первого студента из третьей группы.*/

let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][0]);

//179
/*1 let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
С помощью вложенных циклов выведите на экран все строки с данными.*/

let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
for (let group in data) {
    for (let name of data[group]){
        console.log(name);
    }
}

/*2 Дана следующая структура с данными:

let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];
С помощью вложенных циклов выведите на экран все строки с данными.*/

let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];
for (let obj of data) {
    for (let key in obj) {
      console.log(obj[key]);
    }
}

/*3 Дана следующая структура с данными:

let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];
С помощью вложенных циклов выведите на экран все строки с данными.*/

let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];
for (let obj of data) {
    for (let key in obj) {
        for (let mas of key)
      console.log(obj[key]);
    }
}


//180
/*1 Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
Выведите на экран данные каждого работника в формате имя - зарплата.*/

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

for (let employee of employees) {
	console.log(employee.name + ' ' + employee.salary);
}

/*2 Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
Выведите на экран сумму зарплат всех работников.*/

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
for (let employee of employees) {
	console.log(employee.salary);
}


/*3 Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.*/

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let total = 0;
for (let employee of employees) {
  if (employee.age >= 30) {
    total += employee.salary;
  }
}
console.log(total);

//181
/*1 Дан следующий объект с названиями месяцев:

let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
Даны также следующие переменные:

let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11
Выведите на экран название месяца, соответствующее значениям переменных lang и month.*/

let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};
let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11

console.log(months[lang][month]);

/*2 Дана вот такая структура для хранения списка дел за года, месяцы и дни:

let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}
Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.*/

let affairs = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}

let year = '2018';
let month = 11;
let day = 29;
let delo = 2;
console.log(affairs[year][month][day][delo]);

/*3 Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj['key1'][key2]);
Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.*/

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

/*4 Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj.key1.key2);
Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.*/

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

/*5 Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj.key1['key2']);
Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.*/

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

/*6 Автор следующего кода хотел вывести элемент со значением '24':

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
console.log(obj['key1']['key4']);
Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.*/

let obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
console.log(obj[key1]['key4']);

//182
/*1 Добавьте в следующий массив еще одного работника:

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];*/

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];
employees.push({
    name: 'name4',
	salary: 600,
	age: 31,
});
console.log(employees)

//183

/*1 Скопируйте себе следующую структуру для хранения списка дел за определенные даты:

let affairs = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}*/

let affairs = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}

//2 Добавьте еще одно дело в дату '2019-12-29'.

let affairs = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}
affairs['2019-12-29'].push('data24');
console.log(affairs)

//3 Добавьте еще два дела в дату '2019-12-31'.

let affairs = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}
affairs['2019-12-31'] = []
affairs['2019-12-31'].push('data41');
affairs['2019-12-31'].push('data42');
console.log(affairs)

/*4 Скопируйте себе следующую структуру для хранения списка студентов:

let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};*/

let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

//5 Добавьте нового студента в подгруппу 'subgroup11'.

let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

students.group1.subgroup11.push('student114')
console.log(students)

//6 Добавьте в первую группу еще одну подгруппу.

let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};

students.group1.subgroup13=[]
console.log(students)


//7 Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.

let students = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};
students.group4={};
students.group4.subgroup41=[];
students.group4.subgroup41.push('student411')
students.group4.subgroup41.push('student412')
console.log(students);
