// Task1

let num1 = Number(prompt("Enter the number 1"));
let num2 = Number(prompt("Enter the number 2"));
console.log(arrArray(num1, num2));
function arrArray(a, b){
    let arr = [];
    if (a < b){
        for (let i = a; i < b; i++){
            arr.push(i);
        }
    }
    else{
        for (let i = b; i < a; i++){
            arr.push(i);
        }
    }
    return arr;
}

// Task2

let arrUrl = [];
for (let elem of document.querySelectorAll('a')){
    arrUrl.push(elem.getAttribute('href'));
}
console.log(arrUrl);

// Task3

function addAttribute(SelectorName, AttName, AttValue){
    return document.querySelector(SelectorName).setAttribute(AttName, AttValue);
}
addAttribute('a', 'href', 'https://www.google.com/');

// Task4

// Пример массива
// let arrPromptUrl = ['https://oir.mobi/uploads/posts/2021-04/thumbs/1619654562_61-oir_mobi-p-dikie-zhivotnie-afriki-zhivotnie-krasivo-f-64.jpg', 
// 'https://oir.mobi/uploads/posts/2021-04/thumbs/1619654539_39-oir_mobi-p-dikie-zhivotnie-afriki-zhivotnie-krasivo-f-41.jpg',
// 'https://oir.mobi/uploads/posts/2021-04/1619654577_48-oir_mobi-p-dikie-zhivotnie-afriki-zhivotnie-krasivo-f-50.jpg',
// 'https://oir.mobi/uploads/posts/2021-04/thumbs/1619654516_16-oir_mobi-p-dikie-zhivotnie-afriki-zhivotnie-krasivo-f-17.jpg',
// 'https://oir.mobi/uploads/posts/2021-04/thumbs/1619654556_14-oir_mobi-p-dikie-zhivotnie-afriki-zhivotnie-krasivo-f-15.jpg'];

let arrPromptUrl = [];
for (let i = 1; i < 6; i++){
    arrPromptUrl.push(prompt(`Enter the Url ${i}`));
}
let africanAnimals = document.querySelectorAll('.images > img');

// // Вариант 1
// for (let i = 0; i < arrPromptUrl.length; i++){
//     for (let j = i * 2; j < africanAnimals.length; j++){
//         if(j%2 != 0){
//             africanAnimals[j].setAttribute('src', arrPromptUrl[i]);
//         }
//     }
// }

// Вариант 2
for (let i = 0; i < arrPromptUrl.length; i++){
    for (let j = i * 2; j < africanAnimals.length; j++){
        if(j%2 == 0){
            continue;
        }
        africanAnimals[j].setAttribute('src', arrPromptUrl[i]);
    }
}

// Task 5
document.querySelector('#main').innerText = 'Hello '+ prompt('Enter your name');
let images = document.querySelectorAll('.block > img');

let arrMy = ['My profession', 'My hobby', 'My family'];

for (let i = 0; i < 3; i++){
    images[i].setAttribute('src', prompt(`Image url address: ${arrMy[i]}`));
    document.querySelector(`#blockH${i+1}`).innerText = arrMy[i];
}