//  Нарисуйте трапецию



k = 0;
let str = '';
let flag = 4;

while (k < 4) {
    let j = 0;
    while (j < 8) {
        if (j < flag) {
            str += '&nbsp';
        } else {
            str += '*';
        }
        j++
    }
    flag--;
    str += '<br>';
    k++
}

document.querySelector('.out').innerHTML = str;



