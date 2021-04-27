let arr = [[1, 2, 3], [4, 5], [6]];

function sum(array) {
    let sum = 0;
    for (let i of arr) {
        for (let j of i) {
            sum += +j;
        }
    }
    return sum
}


document.querySelector('button').onclick = () => {
    document.querySelector('.out').textContent = sum(arr);
}
