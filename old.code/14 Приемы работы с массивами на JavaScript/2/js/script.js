let count = document.querySelector('.count');

function task1(count) {
    let arr = [];
    for (let i = 1; i <= count; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += i;
        }
        arr.push(str);
    }
    return arr
}


document.querySelector('button').onclick = () => {
    document.querySelector('.out').innerHTML = task1(count.value);
}
