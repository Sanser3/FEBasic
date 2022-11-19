// Task 1
console.log('// Task 1');
let d = 7;
for(i = 1; i < 4; i++){
    console.log(d**i);
}

// Task 2
console.log('// Task 2');
let num2 = Number(prompt('Enter the number Task 2'));
if(num2 > 0){
    console.log(num2 * 2);
} 
else{
    console.log(num2);
}

// Task 3
console.log('// Task 3');
let num3 = Number(prompt('Enter the number Task 3'));
if (num3 > 0) {
    console.log('положительное');
} 
else if (num3 < 0) {
    console.log('отрицательное');
} 
else {
    console.log('ноль');
}

// Task 4
console.log('// Task 4');
let num4_1 = +prompt('Enter the number Task 4, 1');
let num4_2 = +prompt('Enter the number Task 4, 2');
if (num4_1 > num4_2) {
    console.log(num4_1 + num4_2);
} 
else if (num4_1 < num4_2) {
    console.log(num4_1 * num4_2);
} 
else {
    console.log('числа одинаковые');
}

// Task 5
console.log('// Task 5');
let num5 = +prompt('Enter the number Task 5');
if (num5 < 0) {
    console.log(num5**2);
} 
else {
    console.log('ошибка');
}

// Task 6
console.log('// Task 6');
let num6_1 = +prompt('количество учеников в классе');
let num6_2 = +prompt('количество стульев в кабинете');
if ((num6_1 < num6_2) || (num6_1 == num6_2)) {
    console.log(`учеников: ${num6_1}, стульев: ${num6_2} ⇒ стульев хватает`);
} 
else if (num6_1 > num6_2) {
    console.log(`учеников: ${num6_1}, стульев: ${num6_2} ⇒ стульев не хватает)`);
}

// Task 7
console.log('// Task 7');
console.log('start');
for(let i = 1; i < 10; i++){
    console.log(i);
}
console.log('finish');

// Task 8
console.log('// Task 8');
for(let i = 9; i < 100; i++){
    if (i % 5 == 0) {
        console.log(i);
    }
}

// Task 9
console.log('// Task 9');
let num9 = +prompt('Enter the number Task 9');
for(let i = num9 + 1; i < num9 + 15; i++){
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Task 10
console.log('// Task 10');
let arr = [1, 6, 2, -5, 15, 17, 27, 7, -39, 9, -7, -55, 63, 13, 39, 33, 16, 0, 18, -9];
console.log(arr);
for(let i = 0; i < arr.length; i++) {
    if (arr[i] >= 15) {
        console.log(arr[i]);
    }
}

// Task 11
console.log('// Task 11');
console.log(arr);
for(let i = 0; i < arr.length; i++) {
    if (arr[i]%2 != 0) {
        console.log(arr[i]);
    }
}

// Task 12
console.log('// Task 12');
console.log(arr);
for(let i = 1; i < arr.length; i++) {
    if (i%3 == 0) {
        console.log(arr[i]);
    }
}

// Task 13
console.log('// Task 13');
console.log(arr);
let sum13 = 0;
for(let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
        sum13 += arr[i];
    }
}
console.log(sum13);

// Task 14
console.log('// Task 14');
console.log(arr);
let sum14 = 0;
for(let i = 0; i < arr.length; i++) {
    if (arr[i]%2 != 0) {
        sum14 += arr[i];
    }
}
console.log(sum14);

// Task 15
console.log('// Task 15');
console.log(arr);
let sum15_1 = 0;
let sum15_2 = 0;
for(let i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 0) {
        sum15_1 += arr[i];
    }
    else {
        sum15_2 += arr[i];
    }
}
console.log(Math.abs(sum15_1 - sum15_2));
