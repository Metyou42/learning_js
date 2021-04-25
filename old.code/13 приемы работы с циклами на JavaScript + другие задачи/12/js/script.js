// С помощью вложенных циклов и символа который введет пользователь:
// ******
// *    *
// *    *
// *    *
// ******

let a = document.querySelector('#input');
document.querySelector('button').onclick = () => {
    let str = '';

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 6 && (i == 0 || i == 8); j++) {
            str += a.value;
        }
        for (let j = 0; (j < 6) && (i != 0 || i != 8) && (i % 2 != 0); j++) {
            if (j == 0 || j == 5) {
                str += a.value;
            } else {
                str += '&nbsp&nbsp';
            }
        }
        str += '<br>'
    }
    document.querySelector('.out').innerHTML = str;
}



