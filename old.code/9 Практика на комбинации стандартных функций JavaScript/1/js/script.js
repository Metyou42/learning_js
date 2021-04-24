// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения

let str = "andrii";
// 1-st way
console.log(str[0].toUpperCase() + str.slice(1));

// second way
str = str.split('');
str[0] = str[0].toUpperCase();
str = str.join('');
console.log(str)