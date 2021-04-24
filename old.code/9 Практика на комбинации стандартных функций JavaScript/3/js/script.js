// Проверьте, что строка начинается на http://.


let str = 'google.com';
let str2 = 'http://google.com';

// 1-st way
if (str2.split('//')[0] === 'http:') {
    console.log('True')
} else {
    console.log('False')
}

// second way
if (str2.substr(0, 7) === 'http://') {
    console.log('True')
} else {
    console.log('False')
}