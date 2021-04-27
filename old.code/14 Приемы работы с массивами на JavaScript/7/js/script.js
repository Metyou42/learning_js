let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function sum(array) {
    let sum = 0;
    for (let i of arr) {
        for (let j of i) {
            for (let k of j) {
                sum += +k;
            }
        }
    }
    return sum
}


document.querySelector('button').onclick = () => {
    document.querySelector('.out').textContent = sum(arr);
}
