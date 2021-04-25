let FirstNumber = document.querySelector('.NumOne')
let SecondNumber = document.querySelector('.NumTwo')

function bigger(a, b) {
    let arr = [];
    let aCopy = a;
    let bCopy = b;
    while (aCopy) {
        arr.push(a);
        aCopy--;
    }
    while (bCopy) {
        arr.push(b);
        bCopy--;
    }
    let c = a - b;
    let BiggerNum = +arr.splice(c, 1);
    return BiggerNum
}

document.querySelector('button').onclick = () => {
    document.querySelector('.out').innerHTML = bigger(FirstNumber.value, SecondNumber.value);
}