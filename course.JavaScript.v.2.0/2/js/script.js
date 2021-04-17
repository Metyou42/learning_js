let a = 6;
let b = 'hello';

console.log(a, b);

let input_in = document.querySelector('.input_in');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function () {
    // Выполнитса когда кнопка будет нажата
    console.log('Работает!');
    // console.log(input_in.value); // value это то что введенно в инпут

    // Способ 1 для сложения а не конкатинации
    // let b = input_in.value
    // console.log(b * 1 + 10);

    // Способ 2 для сложения а не конкатинации
    let b = +input_in.value; // + позволяет перевести в число
    console.log(b + 10);
    div.innerHTML = b;
    input_in.value = '';

}

// let e = 3;
// let f = 5;
// document.querySelector('.out').innerHTML = e + f;