let array = document.querySelector('.array');

function arrayFill(array) {
    let splitArr = array.split(',');
    let sum = 0;
    for (let i in splitArr) {
        sum += +splitArr[i];
        if (sum > 10) {
            return 'The number of elements from the beginning of the list, when their sum was more than 10: ' + (+i + 1)
        }
    }
    if (sum <= 10) {
        return 'Sum of all elements less than or equal to 10'
    }
}


document.querySelector('button').onclick = () => {
    document.querySelector('.out').textContent = arrayFill(array.value);
}
