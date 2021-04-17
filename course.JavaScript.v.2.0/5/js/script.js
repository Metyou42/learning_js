let hel = document.querySelector('div.hel');

hel.onclick = two();
function two() {
    console.log('work');
}

document.querySelector('button.button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}

let b = '';
for (let i = 0; i < 10; i++) {
    if (i == 6) continue;
    b += i + ' ';
}
document.querySelector('.numbers').innerHTML = b;