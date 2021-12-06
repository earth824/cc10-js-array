// const num = 1_000_000_000_000;
// const num1 = 2e12; // 2 x 10 ** 12

// const a = 17;
// console.log(a.toString(16));

// 1.78
// -2.35

// let message = 'Hello my friend';
// // console.log(message[message.length - 1]);
// // message[4] = 'a'; // Wrong

// for (let char of message) {
//   console.log(char);
// }

// const arr = ['Cat', 'Dog', 'Bee', 'Ant'];
// console.log(arr[1]);
// arr[3] = 'Elephant';
// arr[4] = 'Zebra';
// arr[arr.length] = 'Giraffe';
// arr[10] = 'Rat';
// console.log(arr);

// let arr = ['Apple', 'Orange', 'Pear'];

// for (let item of arr) {
//   console.log(item);
// }
// Itera 1: item = 'Apple'
// Itera 2: item = 'Orange'
// Itera 3: item = 'Pear'

// Lab 1.1
// const num = 1_375_000_000_000;
// const num1 = 1.375e12;

// Lab 1.2
// const num = 255;
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));

// Lab 1.3
// function calcPoint(total) {
//   return Math.floor(total / 100);
// }

// Lab 1.4
// function formatNumberToTwoDigit(number) {
//   return (Math.floor((number * 100).toFixed(2)) / 100).toFixed(2);
// }

// console.log(formatNumberToTwoDigit(10));
// console.log(formatNumberToTwoDigit(5.1));
// console.log(formatNumberToTwoDigit(3.1289));

// Lab 1.6
// function random(min, max) {
//   // Math.random() [0, 1) // assume min = 2, max = 5:  => [2, 5)
//   // const diff = Math.random() * (max - min); // [0, 3)
//   // return min + diff; // [2, 5)
//   return min + Math.random() * (max - min);
// }

// Lab 1.7
// function randomDice() {
//   // ปัดขึ้น โอกาสไม่เท่ากัน 6 * Math.random() => [0, 6) 0-1, 1.0000001-2, 2.0000001-3, ... 5.000001-5.999999
//   // ต้องปัดลง 6 * Math.random() => 0-0.99999999, 1-1.9999999, ... 5-5.99999999999
//   return 1 + Math.floor(6 * Math.random());
// }

// console.log(randomDice());
// console.log(randomDice());
// console.log(randomDice());
// console.log(randomDice());

// Lab 1.8
// function calcCircumference(radius) {
//   return 2 * Math.PI * radius;
// }

// Lab 1.9
// function calcDiagonalLength(w, l) {
//   return Math.sqrt(w ** 2 + l ** 2);
// }

// Lab 1.10
// function convertDegToRadian(deg) {
//   return (Math.PI * deg) / 180;
// }

// Lab 2.1
// const path = 'c:\\Users\\Admin\\Desktop';

// Lab 2.2
// const str = 'Welcome to Thailand';
// console.log(str.length);

// Lab 2.3
// function ucFirst(str) {
//   return str.slice(0, 1).toUpperCase() + str.slice(1);
// }

// ucFirst('');

// Lab 2.4
// function checkWord(str) {
//   const lowerStr = str.toLowerCase();
//   return lowerStr.includes('xxx') || lowerStr.includes('porn') || lowerStr.includes('sex');
// }

// Lab 2.5
// function truncate(str, length) {
//   if (str.length > length) {
//     return str.slice(0, length - 1) + '...';
//   }
//   return str;
// }
// console.log(truncate("What I'd like to tell on this topic is:", 20));

// Lab 2.6
// function extractCurrencyValue(string, rate) {
//   return 'THB' + string.slice(1) * rate;
// }
// console.log(extractCurrencyValue('$120', 30));

// const students = ['M', 'Ton', 'Oak'];
// const retPush = students.push('Same');
// console.log(students);
// console.log(retPush);
// const retPop = students.pop();
// console.log(students);
// console.log(retPop);

// const retShift = students.shift();
// console.log(students);
// console.log(retShift);
// const retUnshift = students.unshift('Boy');
// console.log(students);
// console.log(retUnshift);

// students.push('Aof', 'Golf', 'Gun');
// console.log(students);

// const retSplice = students.splice(3, 1);
// console.log(students);
// console.log(retSplice);

// const retSplice1 = students.splice(1, 1, 'Moo', 'Tor');
// console.log(students);
// console.log(retSplice1);

// students.splice(3, 0, 'Kung');
// console.log(students);

// const retSlice = students.slice(1, 4);
// console.log(retSlice);
// console.log(students);

// const newStudents = students.slice();
// console.log(newStudents === students);

// console.log(students.slice(2));

const nums1 = [4, 9, 2];
// const nums2 = [0, 7];

// const conNums = nums1.concat(nums2);
// const spreadNums = [...nums1, ...nums2];
// console.log(nums1);
// console.log(nums2);
// console.log(conNums);
// console.log(spreadNums);

// nums1.forEach(function (el, index, arr) {
//   console.log(el, index, arr);
// });

// Iteration 1 : pass first element of array as argument of callback function
// el = 4, index = 0, arr = [4, 9, 2]
// Iteration 2 : pass second element
// el = 9, index = 1, arr = [4, 9, 2]
// Iteration 3 : pass third element
// el = 2, index = 2, arr [4, 9, 2]

// function cusForEach(arr, cb) {
//   for (let i; i < arr.length; i++) {
//     cb(arr[i], i, arr);
//   }
// }

// const students = ['M', 'Ton', 'Jay', 'Oak', 'Gun', 'Boy', 'Jay', 'New', 'Bam'];
// console.log(students);
// let retIndexOf = students.indexOf('Tor');
// console.log(retIndexOf); // Not found return -1
// retIndexOf = students.indexOf('New');
// console.log(retIndexOf);
// retIndexOf = students.indexOf('Jay', 3);
// console.log(retIndexOf);
// let retLastIndexOf = students.lastIndexOf('Jay');
// console.log(retLastIndexOf);

// let retInclude = students.includes('Oakkkk');
// console.log(retInclude);

// let retFind = students.find(function (el, index, arr) {
//   if (el.startsWith('B') === true) {
//     return true;
//   }
//   return false;
// });
// console.log(retFind);

// function search(el) {
//   if (el.startsWith('B') === true) {
//     return true;
//   }
//   return false;
// }

// let retFindIndex = students.findIndex(search);
// console.log(retFindIndex);

// let retFilter = students.filter(el => el.startsWith('B'));
// console.log(retFilter);
// retFilter = students.filter(el => el.includes('a'));
// console.log(retFilter);

// const students = ['M', 'Ton', 'Jay', 'Oak', 'Gun', 'Boy', 'Jay', 'New', 'Bam'];
// console.log(students);

// ['I am M. I am a codecamp student', 'I am Ton. I am a codecamp student', ...]
// const result = [];
// for (let i = 0; i < students.length; i++) {
//   result.push(`I am ${students[i]}. I am a codecamp student`);
// }

// console.log(result);

// const retMap = students.map(function (el, index, arr) {
//   return `I am ${el}. I am a codecamp student`;
// });

// console.log(retMap);

// const numbers = [3, 7, 2, 9, 6];

// function multiplyByThree(el, index, arr) {
//   return el * 3;
// }

// const retMap = numbers.map(multiplyByThree);
// console.log(retMap);

// Iteration 1: multiplyByThree(3, 0, [3, 7, 2, 9, 6]) return 9, 9 เป็น element ตัวแรกของ result array
// Iteration 2: multiplyByThree(7, 1, [3, 7, 2, 9, 6]) return 21, 21 เป็น element ตัวที่สองของ result array
// Iteration 3: multiplyByThree(2, 2, [3, 7, 2, 9, 6]) return 6, 6 เป็น element ตัวที่สามของ result array
// Iteration 4: multiplyByThree(9, 3, [3, 7, 2, 9, 6]) return 27, 27 เป็น element ตัวที่สี่ของ result array
// Iteration 5: multiplyByThree(6, 4, [3, 7, 2, 9, 6]) return 18, 18 เป็น element ตัวที่ห้าของ result array
// result array คือ [9, 21, 6, 27, 18]

// const students = ['M', 'Ton', 'Jay', 'Oak', 'Gun', 'Boy', 'Jay', 'New', 'Bam'];
// console.log(students);
// // students.sort(); // เรียงจาก A ไปหา Z
// // console.log(students);

// // เรียกจาก Z ไปหา A
// students.sort(function (a, b) {
//   if (b > a) {
//     return 1;
//   }
//   return -1;
// });
// console.log(students);

// const numbers = [3, 7, 2, 9, 6, 20, 11, 1, 0, 5];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);
// numbers.sort(function (a, b) {
//   // #1
//   // if (a > b) {
//   //   return 1;
//   // } else if (a === b) {
//   //   return 0;
//   // }
//   // return -1;
//   // #2
//   return a - b;
// });
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const str = 'Bangkok, Nan, Tak, Yala, Rayong, Ranong';
// const split = str.split(', ');
// console.log(split);

// const joinStr = split.join(':');
// console.log(joinStr);

// const numbers = [3, 7, 2, 9, 6, 20, 11, 1, 0, 5];

// let accum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   accum = accum + numbers[i];
// }

// function cb(previousValue, el, index, arr) {
//   return previousValue + el;
// }

// const accum = numbers.reduce(cb, 0);

// Iteration 1: call cb(0, 3, 0, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5]) ค่าที่ return จะไปเป็น previousValue ใน Iteration ถัดไป
// Iteration 2: call cb(3, 7, 1, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5]) return ค่าเป็น 10 และเป็น previousValue ใน Iteration 3
// Iteration 3: call cb(10, 2, 2, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5]) return ค่าเป็น 12 และเป็น previousValue ใน Iteration 4
// ...
// Iteration 10: call cb(59, 5, 9, [3, 7, 2, 9, 6, 20, 11, 1, 0, 5]) return ค่าเป็น 64 และไม่มี Iteration ถัดไปแล้วจีงเอา 64
// ไปเป็นผลลัพธ์ของฟังก์ชัน reduce
// console.log(accum);

// const alphabets = ['b', 'c', 'a', 'a', 'f', 'c', 'h', 'g', 'c'];
// // let result = [];
// // for (let i = 0; i < alphabets.length; i++) {
// //   if (!result.includes(alphabets[i])) {
// //     result.push(alphabets[i]);
// //   }
// // }

// const result = alphabets.reduce(function (accum, el, index, arr) {
//   if (!accum.includes(el)) {
//     accum.push(el);
//   }
//   return accum;
// }, []);

// console.log(result);

// Lab 3.1
// const friends = ['New', 'Ton', 'Pipe', 'Golf', 'Nes'];

// Lab 3.3
// const styles = ['Jazz', 'Blues'];
// styles[styles.length] = 'Rock-n-Roll';
// styles[1] = 'Classic';
// delete styles[0];
// console.log(styles);
// console.log(styles.length);

// Lab 3.4
// function isNumber(num) {
//   const strInput = '' + num; // String(num)
//   if (!strInput.trim()) {
//     return false;
//   }
//   return !isNaN(strInput);
// }

// let input;
// const arr = [];

// do {
//   input = prompt('Enter number');
//   if (isNumber(input)) {
//     arr[arr.length] = +input;
//   }
// } while (isNumber(input));

// let sum = 0;
// for (let el of arr) {
//   sum += el;
// }
// console.log(sum);

// Lab 3.5
// function squareArr(arr) {
//   const result = [];
//   for (let item of arr) {
//     result[result.length] = item ** 2;
//   }
//   return result;
// }

// console.log(squareArr([2, 3, 5, 7, 11]));

// Lab 3.6
// const sales = [{ price: 1000, discount: 0.1 }, { price: 500, discount: 0.05 }, { price: 100 }];

// const summary = [];
// for (let item of sales) {
//   if (item.discount) {
//     summary[summary.length] = { netPrice: item.price * (1 - item.discount) };
//   } else {
//     summary[summary.length] = { netPrice: item.price }
//   }
// }

// Lab 4.1
// let fruits = ['Apples', 'Pear', 'Orange'];
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push('Banana');
// // what's in fruits?
// console.log(fruits.length); // 4

// Lab 4.3
// const animals = ['Dog', 'Cat', 'Rat'];
// animals.push('Fish');
// animals.unshift('Horse');
// animals.push('Giraffe', 'Snake');
// animals.shift();
// animals.pop();
// animals.shift();

// Lab 4.4
// function first(arr, n) {
//   if (n === 1 || n === undefined) {
//     return arr[0];
//   }
//   return arr.slice(0, n);
// }

// console.log(first([7, 9, 0, -2])); // 7
// console.log(first([], 3)); // []
// console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]

// Lab 4.5
// function clone(arr) {
//   return arr.slice(0);
// }

// Lab 4.6
// const a = [1, 5, 7, 11];
// const b = [2, 3, 6];
// const result = a.concat(b);

// Lab 4.7
// let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// fish.splice(0);
// console.log(fish);

// Lab 4.8
// const person = ['John', 'Jay', 'Jim', 'Jame'];
// person.splice(1, 1, 'Jack', 'Joe');

// Lab 4.9
// const sports = ['football', 'volleyball', 'tennis', 'basketball', 'judo'];
// const result = sports.slice(1, 4);

// Lab 4.10
// const cars = ['volvo', 'toyota', 'honda', 'ford'];
// cars.splice(3, 0, 'Mazda', 'BMW', 'Nissan');

// Lab 4.11
// const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// array.forEach(function (el) {
//   sum += el;
// });
// console.log(sum);

// Lab 4.12
// const names = ['Mike', 'Sid', 'Jack', 'Bill'];
// 1. Mike
// 2. Sid
// 3. Jack
// 4. Bill
// names.forEach(function (el, index) {
//   console.log(`${index + 1}. ${el}`);
// });

// Lab 4.14
// const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];

// let result = [];
// let foundIndex = alphabets.indexOf('a');
// do {
//   if (foundIndex !== -1) {
//     result.push(foundIndex);
//     foundIndex = alphabets.indexOf('a', foundIndex + 1);
//   }
// } while (foundIndex !== -1);
// console.log(result);

// result = alphabets.reduce((prev, el, index) => {
//   if (el === 'a') {
//     prev.push(index);
//   }
//   return prev;
// }, []);
// console.log(result);

// Lab 4.15
// console.log([1, 2, 3].includes(2)); // *
// console.log([1, 2, 3].includes(4)); // **
// console.log([1, 2, 3].includes(3, 3)); // ***
// console.log([1, 2, 3].includes(3, -1)); // ****
// console.log([1, 2, NaN].includes(NaN)); // *****
// console.log(['1', '2', '3'].includes(3)); // ******

// Lab 4.16
// const nums = [7, 9, -5, -1, 0, 3];
// const result = nums.find(function (el) {
//   return el < 0;
// });
// console.log(result);

// Lab 4.17
// const inventory = [
//   { name: 'apples', quantity: 2 },
//   { name: 'bananas', quantity: 0 },
//   { name: 'cherries', quantity: 5 }
// ];
// // expected result: { name: 'cherries', quantity: 5 }
// const result = inventory.find(function (el) {
//   return el.name === 'cherries';
// });
// console.log(result);

// Lab 4.18
// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];
// const result = tasks.findIndex(function (el) {
//   return el.id === 2;
// });
// console.log(result);

// Lab 4.19

// const tasks = [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Shopping' },
//   { id: 3, name: 'Swimming' }
// ];

// function updateTask(id, newName) {
//   const idx = tasks.findIndex(function (el) {
//     return el.id === id;
//   });
//   if (idx !== -1) {
//     tasks[idx].name = newName;
//   }
// }

// updateTask(2, 'Travelling');
// console.log(tasks);

// // Lab 4.20
// function deleteTask(id) {
//   const idx = tasks.findIndex(function (el) {
//     return el.id === id;
//   });
//   if (idx !== -1) {
//     tasks.splice(idx, 1);
//   }
// }

// deleteTask(1);
// console.log(tasks);

// Lab 4.2
// let arr = ['a', 'b'];
// arr.push(function () {
//   console.log(this);
// });

// arr[2](); // *

// Lab 4.21
// #1
// let array = [9, 17, 23, 5];
// let result = array.filter(function (el) {
//   return el > 10;
// });
// console.log(result);
// // #2
// array = [1, 2, 3, 4];
// result = array.filter(function (el) {
//   return el % 2;
// });
// console.log(result);
// // #3
// array = [1, '1', 2, {}];
// result = array.filter(function (el) {
//   return typeof el === 'number';
// });
// console.log(result);
// // #4
// array = ['apple', 'banana', 'orange', 'pineapple', 'watermelon'];
// result = array.filter(function (el) {
//   return el.length > 6;
// });
// console.log(result);
// // #5
// array = [1, -3, 2, 8, -4, 5];
// result = array.filter(function (el) {
//   return el > 0;
// });
// console.log(result);
// // #6
// array = [1, 3, 4, 5, 6, 7, 8];
// result = array.filter(function (el) {
//   return el % 3 === 0;
// });
// console.log(result);
// // #7
// array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// result = array.filter(function (el) {
//   return el.startsWith('E');
// });
// console.log(result);
// // #8
// array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// result = array.filter(function (el) {
//   return el.toUpperCase() === el;
// });
// console.log(result);

// // #9
// array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
// result = array.filter(function (el) {
//   return el.toLowerCase().includes('buri');
// });
// console.log(result);

// // #10
// array = [
//   { name: 'Ben', age: 14 },
//   { name: 'Phil', age: 18 },
//   { name: 'John', age: 32 },
//   { name: 'Ann', age: 16 },
//   { name: 'Paul', age: 24 }
// ];

// result = array.filter(function (el) {
//   return el.age >= 18;
// });
// console.log(result);
// // #11
// array = [
//   { id: 1, name: 'Pepsi' },
//   { id: 2, name: 'Mirinda' },
//   { id: 3, name: 'Coke' },
//   { id: 4, name: 'Fanta' },
//   { id: 5, name: 'Sprite' }
// ];
// result = array.filter(function (el) {
//   return el.id !== 4;
// });
// console.log(result);

// // #12
// array = [
//   { name: 'John', birth: '2001-07-31' },
//   { name: 'Jack', birth: '1990-06-24' },
//   { name: 'Jim', birth: '1984-12-13' },
//   { name: 'Jeff', birth: '1996-02-05' },
//   { name: 'Joe', birth: '2002-06-13' }
// ];
// result = array.filter(function (el) {
//   return el.birth.slice(5, 7) === '06';
// });
// console.log(result);

// Lab 4.22
// function filterRange(arr, a, b) {
//   return arr.filter(function (el) {
//     return el >= a && el <= b;
//   });
// }

// // const array = [5, 3, 8, 1];
// // console.log(filterRange(array, 1, 4)); // [3,1]
// const array = [7, 12, 9, 21, 15, 0, 4];
// console.log(filterRange(array, 5, 10)); // [3,1]

// const str = 'CodeCamp';
// for (let alphabet of str) {
//   console.log(alphabet);
// }

// const array = [5, 3, 8, 1, 3, 9, 5];
// console.log(array);

// const obj = {
//   a: 2,
//   true: 5
// }

// function Product(name, price) {
//   this.name = name;
//   this.price = price;

//   this.report = function() {
//     return this.name + ': ' + this.price
//   }
// }

// const pro = new Product('Coke', 30)

// const obj = {};
// obj.true = 'boolean key';

// const map = new Map();
// map.set(true, 'boolean key');
// map.set('true', 'string key');
// console.log(map.get(true));
// console.log(map.has('true'));
// console.log(map.has(true));
// console.log(map.keys());
// for (let k of map.keys()) {
//   console.log(k);
// }

// const arrKeys = Array.from(map.keys());
// console.log(arrKeys);

// console.log(map.entries());
// for (let ent of map.entries()) {
//   console.log(ent[1]);
// }

// [true, 'boolean key'], ['true', 'string key']

// const set = new Set();
// set.add(1); // { 1 }
// set.add(2); // { 1,2 }
// set.add(1); // { 1,2 }
// set.add(1); // { 1,2 }
// set.add(2); // { 1,2 }
// set.add(1); // { 1,2 }
// console.log(set);
// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());
// for (let entry of set.entries()) {
//   console.log(entry);
// }

// const obj = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// };

// const keys = Object.keys(obj);
// console.log(keys);
// const values = Object.values(obj);
// console.log(values);
// const entries = Object.entries(obj);
// console.log(entries);

// Lab 4.23
// #1
// let array = [1, 2, 30, 400];
// let result = array.map(function (el) {
//   return el * 2;
// });
// console.log(result);

// #2
// array = [1, 2, 3, 4];
// result = array.map(function (el) {
//   return String(el);
// });
// console.log(result);

// #3
// array = [1, '1', 2, {}];
// result = array.map(function (el) {
//   return typeof el;
// });
// console.log(result);

// #4
// array = ['apple', 'banana', 'orange'];
// result = array.map(function (el) {
//   return el.toUpperCase();
// });
// console.log(result);

// #5
// array = [1, 3, 4, 5, 6, 7, 8];
// result = array.map(function (el) {
//   return el % 2 === 0 ? 'even' : 'odd';
// });
// console.log(result);

// #6
// array = [1, -3, 2, 8, -4, 5];
// result = array.map(function (el) {
//   return Math.abs(el);
// });
// console.log(result);

// #7
// array = [100, 200.25, 300.84, 400.3];
// result = array.map(function (el) {
//   return el.toFixed(2);
// });
// console.log(result);

// #8
// const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// array = [0, 5, 10, 7, 6, 5, 0];
// result = array.map(function (el) {
//   return MONTH[el];
// });
// console.log(result);

// #9
// array = [1, 16, 81, 256, 625, 1296];
// result = array.map(function (el) {
//   return Math.sqrt(Math.sqrt(el));
// });
// console.log(result);

// #10
// array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// result = array.map(function (el) {
//   return el.name;
// });
// console.log(result);

// #11
// array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// result = array.map(function (el) {
//   return el.age;
// });
// console.log(result);

// #12
// array = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// result = array.map(function (el) {
//   return `${el.name} ${el.surname}`;
// });
// console.log(result);

// #13
// array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-01' },
//   { name: 'watermelon', birth: '1985-12-01' }
// ];
// result = array.map(function (el) {
// return {
//   name: el.name,
//   birth: el.birth,
//   age: 2021 - el.birth.slice(0, 4)
// };
//   return {
//     ...el,
//     age: 2021 - el.birth.slice(0, 4)
//   };
// });
// console.log(result);

// #14
// const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// function formatDate(date) {
//   return date.slice(8, 10) + ' ' + MONTH[+date.slice(5, 7) - 1].toLowerCase() + ' ' + date.slice(0, 4);
// }
// array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-10' },
//   { name: 'watermelon', birth: '1985-12-30' }
// ];
// result = array.map(function (el) {
//   return `<tr><td>${el.name}</td><td>${formatDate(el.birth)}</td></tr>`;
// });
// console.log(result);

// Lab 4.24
// function firstUc(str) {
//   return str.slice(0, 1).toUpperCase() + str.slice(1);
// }

// function convertToCamel(dashSeparated) {
//   return dashSeparated
//     .split('-')
//     .map(function (el, index) {
//       return index ? firstUc(el) : el;
//     })
//     .join('');
// }

// console.log(convertToCamel('dash-separated'));
// console.log(convertToCamel('border-top-right-radius'));

// Lab 4.25
// const arr = [11, 17, 23, 13, 7, 19];
// arr.sort((a, b) => b - a);
// console.log(arr);

// Lab 4.26
// const arr = [-3, 2, 0, -7, 4, 6];
// arr.sort((a, b) => a ** 2 - b ** 2);
// console.log(arr);

// Lab 4.27
// const arr = [
//   { name: 'John', age: 25 },
//   { name: 'Leon', age: 26 },
//   { name: 'Mick', age: 29 },
//   { name: 'Pete', age: 30 },
//   { name: 'Mary', age: 28 }
// ];
// arr.sort((a, b) => a.age - b.age);
// console.log(arr);

// Lab 4.28
// function copySorted(array) {
//   return array.slice(0).sort();
// }

// let arr = ['React', 'Vue', 'Angular'];
// let sorted = copySorted(arr);

// console.log(sorted); // Angular, React, Vue
// console.log(arr); // React, Vue, Angular (no changes)

// Lab 4.29
// const nums = [-3, 2, 11, -7, 4, 6];
// let result = 1;
// for (let i = 0; i < nums.length; i++) {
//   result = result * nums[i];
// }
// console.log(result);

// const result1 = nums.reduce((acc, el) => acc * el, 1);
// console.log(result1);

// Lab 4.30
// const scores = [
//   { score: 90, subject: 'HTML', weight: 0.2 },
//   { score: 95, subject: 'CSS', weight: 0.3 },
//   { score: 85, subject: 'JavaScript', weight: 0.5 }
// ];
// let result = 0;
// for (let i = 0; i < scores.length; i++) {
//   result = result + scores[i].score * scores[i].weight;
// }
// console.log(result);

// const result1 = scores.reduce((acc, el) => acc + el.score * el.weight, 0);
// console.log(result1);

// Lab 4.31
// let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// let max = arr[0],
//   min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(max);
// console.log(min);

// const initialValue = [arr[0], arr[0]];
// const initialValue = { max: arr[0], min: arr[0] };

// const result = arr.reduce((acc, el) => {
//   if (acc.max < el) {
//     acc.max = el;
//   }
//   if (acc.min > el) {
//     acc.min = el;
//   }
//   return acc;
// }, initialValue);
// console.log(result);

// Lab 4.32
// let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// let result = {};
// for (let i = 0; i < names.length; i++) {
//   if (result[names[i]]) {
//     result[names[i]] = result[names[i]] + 1;
//   } else {
//     result[names[i]] = 1;
//   }
// }
// console.log(result);

// const result1 = names.reduce((acc, el) => {
//   if (acc[el]) {
//     acc[el] = acc[el] + 1;
//   } else {
//     acc[el] = 1;
//   }
//   return acc;
// }, {});
// console.log(result1);

// Lab 4.33
// let str = 'I live in Thailand';
// const splited = str.toLowerCase().split('');
// console.log(splited);
// const result = {};
// for (let i = 0; i < splited.length; i++) {
//   if (splited[i] !== ' ') {
//     if (result[splited[i]]) {
//       result[splited[i]] = result[splited[i]] + 1;
//     } else {
//       result[splited[i]] = 1;
//     }
//   }
// }
// console.log(result);

// const result1 = splited.reduce((acc, el) => {
//   if (el !== ' ') {
//     if (acc[el]) {
//       acc[el] = acc[el] + 1;
//     } else {
//       acc[el] = 1;
//     }
//   }
//   return acc;
// }, {});
// console.log(result1);

// Lab 4.34
// let flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5]
// ];
// const result = [];
// for (let i = 0; i < flattened.length; i++) {
//   result.push(...flattened[i]);
// }
// console.log(result);

// const result1 = flattened.reduce((acc, el) => {
//   acc.push(...el);
//   return acc;
// }, []);
// console.log(result1);

// Lab 4.35
// let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// let result = [];
// for (let i = 0; i < alphabets.length; i++) {
//   if (!result.includes(alphabets[i])) {
//     result.push(alphabets[i]);
//   }
// }
// console.log(result);
// const result1 = alphabets.reduce((acc, el) => {
//   if (!acc.includes(el)) {
//     acc.push(el);
//   }
//   return acc;
// }, []);
// console.log(result1);
// console.log(Array.from(new Set(alphabets)));

// Lab 4.36
// const products = [
//   { id: 1, name: 'Crystal' },
//   { id: 4, name: 'Namthip' },
//   { id: 5, name: 'Nestle' }
// ];
// let result = {};
// for (let i = 0; i < products.length; i++) {
//   result[products[i].id] = { name: products[i].name };
// }
// console.log(result);

// const result1 = products.reduce((acc, el) => {
//   acc[el.id] = { name: el.name };
//   return acc;
// }, {});
// console.log(result1);

// const result1 = products.reduce((acc, { id, ...rest }) => {
//   return { ...acc, [id]: rest };
// }, {});
// console.log(result1);

// Lab 4.37
// let john = { name: 'John', age: 27 };
// let jo = { name: 'Jo', age: 21 };
// let jin = { name: 'Jin', age: 25 };

// let arr = [john, jo, jin];

// function getAverageAge(arr) {
//   const totalAge = arr.reduce((acc, el) => acc + el.age, 0);
//   const avg = totalAge / arr.length;
//   return avg;
// }
// console.log(getAverageAge(arr));

// Lab 4.38
// const persons = [
//   { name: 'John', sex: 'M' },
//   { name: 'Jody', sex: 'M' },
//   { name: 'Susan', sex: 'F' },
//   { name: 'Kate', sex: 'F' },
//   { name: 'Sid', sex: 'M' }
// ];
// let result = {};
// for (let i = 0; i < persons.length; i++) {
//   if (result[persons[i].sex]) {
//     result[persons[i].sex] = [...result[persons[i].sex], persons[i].name];
//   } else {
//     result[persons[i].sex] = [persons[i].name];
//   }
// }
// console.log(result);

// const result1 = persons.reduce((acc, el) => {
//   // if (acc[el.sex]) {
//   //   acc[el.sex] = [...acc[el.sex], el.name];
//   // } else {
//   //   acc[el.sex] = [el.name];
//   // }
//   // return acc;
//   return { ...acc, [el.sex]: acc[el.sex] ? [...acc[el.sex], el.name] : [el.name] };
// }, {});
// console.log(result1);

// Lab 4.39
// let str = '31 45 12 67 34 86 23 37 19 41';
// const result = str
//   .split(' ')
//   .filter(el => el < 40)
//   .reduce((acc, el) => acc + +el, 0);
// console.log(result);

// Lab 4.40
// const isArray = function (input) {
//   return Array.isArray(input);
// };

// Lab 6.1
// const map = new Map();
// map.set('name', 'Thomas');
// map.set('age', 31);
// map.set('name', 'Dan');
// map.delete('age');
// map.has('birthDate');
// map.size;
// map.clear();

// Lab 6.2
// const arr = [
//   ['email', 'codeisfun@example.com'],
//   ['isActive', true]
// ];
// const map = new Map(arr);
// console.log(map);

// Lab 6.3
// const set = new Set();
// set.add('Thailand');
// set.add('Japan');
// set.add('Thailand');
// set.add('China');
// set.add('India');
// set.add('Thailand');
// set.add('China');
// set.add('Singapore');
// set.add('Japan');
// set.delete('India');
// set.size;
// const array = Array.from(set);
// console.log(array);

// Lab 6.4
// const arr = ['Dog', 'Giraffe', 'Bear'];
// const set = new Set(arr);
// console.log(set);

// Lab 6.5
// const unique = function (arr) {
//   return Array.from(new Set(arr));
// };

// const values = [1, 4, 8, 2, 1, 3, 3, 8];
// console.log(unique(values)); // [1, 4, 8, 2, 3]

// Lab 7.1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sumKey = 0;
// for (let key of Object.keys(salaries)) {
//   sumKey += salaries[key];
// }

// let sumValue = 0;
// for (let value of Object.values(salaries)) {
//   sumValue += value;
// }

// let sumEntries = 0;
// for (let entry of Object.entries(salaries)) {
//   sumEntries += entry[1];
// }
// console.log(sumKey);
// console.log(sumValue);
// console.log(sumEntries);

// Lab 7.2
function checkEmptyObj(obj) {
  return Object.keys(obj).length === 0;
}
