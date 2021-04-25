// С помощью вложенных циклов и символа * нарисуйте:
// *
// **
// ***
// **
// *

for (let i = 0; i < 5; i++) {
    let str = '';
    for (let j = 0; j < i + 1 && i < 3; j++) {
        str += '*';
    }
    for (let j = 5; j > i && i >= 3; j--) {
        str += '*';
    }
    console.log(str);
}
