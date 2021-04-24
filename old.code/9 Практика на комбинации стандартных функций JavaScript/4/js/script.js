// Проверьте, что строка заканчивается на .html


let str = 'http://google.com';
let str2 = 'http://google.html';

// 1-st way
if (str2.split('.')[str2.split('.').length - 1] === 'html') {
    console.log('True')
} else {
    console.log('False')
}

// second way
if (str2.substr(-5) === '.html') {
    console.log('True')
} else {
    console.log('False')
}
