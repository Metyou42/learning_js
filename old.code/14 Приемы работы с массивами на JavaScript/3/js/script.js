let count = document.querySelector('.count');
let item = document.querySelector('.item');

function arrayFill(item, count) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(item);
    }
    return arr
}


document.querySelector('button').onclick = () => {
    document.querySelector('.out').innerHTML = arrayFill(item.value, count.value);
}
