let array = document.querySelector('.array');

function ReversArr(array) {
    let splitArr = array.split(',');
    let CurItem = '';
    for (let i = splitArr.length - 1; i >= 0; i--) {
        CurItem += splitArr[i];
    }
    return 'Revers array: ' + CurItem.split('')
}


document.querySelector('button').onclick = () => {
    document.querySelector('.out').textContent = ReversArr(array.value);
}
