let password = document.querySelector('#one');
let color = document.querySelector('#two');
let range = document.querySelector('#three');
let button = document.querySelector('button.button').onclick = myFunc;

function myFunc() {
    console.log(password.value);
    // стили для елемнтов присваюватся через .style
    document.querySelector('button.button').style.background = color.value;
}

range.oninput = function () {
    console.log(range.value);
    document.querySelector('.show').innerHTML = range.value;
}

let button2 = document.querySelector('button.button2');
let checkbox = document.querySelector('#i2');

button2.onclick = () => {
    console.log(checkbox.value);
    console.log(checkbox.checked);
    if (checkbox.checked) {
        console.log('Нажат!');
    } else {
        console.log('Не нажат!');
    }
}

let text_area = document.querySelector('#a3');
let button3 = document.querySelector('button.button3');
let form = document.querySelector('#forma');

button3.onclick = (event) => {
    event.preventDefault();
    // console.log(text_area.value);
    // text_area.value = 'one';
    console.log(form);
    console.log(form.elements.a3.value);
    console.log(form.elements.in_3.value);
}

let show_index = document.querySelector('.show_index').onclick = () => {
    alert('Zadacha 1');
}
let click = document.querySelector('.click').onclick = () => {
    alert('Zadacha 1');
}