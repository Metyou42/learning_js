const one = document.querySelector('.one');

one.style.width = '200px';
one.style.textAlign = 'center';

one.classList.add('two', 'three');
one.classList.remove('two');

const toggle = document.querySelector('button.toggle');

toggle.onclick = function () {
    this.classList.toggle('three');
}

console.log(one.getAttribute('data'));
console.log(document.querySelectorAll('link')[1].getAttribute('href'));

one.setAttribute('data-num', 6);


let gas = document.querySelectorAll('.gas');

let a = document.createElement('div');
a.classList.add('two');
document.querySelector('.test').appendChild(a);

for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function calc() {
        let cost = +this.getAttribute('data');
        let galons = +document.querySelector('.galons').value;
        console.log(galons * cost)
        a.innerHTML = '<br>Cтоимость: ' + galons * cost;
    }
}



