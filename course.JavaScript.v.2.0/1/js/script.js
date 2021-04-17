// Вивод в консоль
console.log('Hello!');
console.log('world');
console.log(3333);
console.log('Hello ' + 'world');
console.info('Hello ' + 'world');
// alert('Hello'); // Выводит всплываючое окно

// Заменна елемента html 
// getElementById по id
document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = 2021;
document.getElementById('out').innerHTML = '<b>2022</b>';

// querySelector По тегу, по .класу, по #ид и тд.
document.querySelector('h2').innerHTML = 5;
document.querySelector('h2.header').innerHTML = 6;
document.querySelector('.header').innerHTML = 7;

document.querySelector('#one').innerHTML = 777; //есть #
document.getElementById('one').innerHTML = 888; //нету #

// Переменные
let b;
let a = document.querySelector('#one'); // внутрь а получил параграф
let c;
c = document.querySelector('.header');

a.innerHTML = 99999;
c.innerHTML = 66666;