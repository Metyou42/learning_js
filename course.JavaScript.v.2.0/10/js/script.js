let a = 'Иван';
let b = '37';
let z7 = 'Овен';
let c = ['Иван', 37, 'Овен'];
let d = [];
console.log(c[1]);
console.log(c);
console.log(c.length);

let zodiak = ['Козерог', 1, 1, 19];
let man = ['Ivan', 'male', 176, 93, 'Ivanon'];
console.log(zodiak);
console.log(man);
console.log(man[4]);
man[0] = 'Sergey';
console.log(man);

let buf;
let a_mas = [1, 2, 3, 4];

// buf = a_mas[0];
// a_mas[0] = a_mas[a_mas.length - 1];
// a_mas[a_mas.length - 1] = buf;

// console.log(a_mas);


let out = document.querySelector('.out');
let outStr = '';
for (let i = 0; i < a_mas.length; i++) {
    if (a_mas[i] % 2 === 0) {
        outStr += a_mas[i] + ' ';
    }
}
out.innerHTML = outStr;


let b_mas = [1, 0, 34, 23, 46, 7, -2, 3, 5, 7, 32, -234, 2]
let out2 = document.querySelector('.out2');
let min = b_mas[0];
let max = b_mas[0];
for (let i = 0; i < b_mas.length; i++) {
    if (b_mas[i] < min) {
        min = b_mas[i];
    }
    if (b_mas[i] > max) {
        max = b_mas[i];
    }
}
out2.innerHTML = `Min: ${min}, Max: ${max}`;


let out3 = document.querySelector('.out3');
let sum = 0;
for (let i = 0; i < b_mas.length; i++) {
    sum += b_mas[i]
}
out3.innerHTML = `Suma: ${sum}`;
