let count = document.querySelector('.count');

function task1(count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        let str = '';
        for (let j = 0; j <= i; j++) {
            str += 'x';
        }
        arr.push(str);
    }
    return arr
}


document.querySelector('button').onclick = () => {
    document.querySelector('.out').innerHTML = task1(count.value);
}
