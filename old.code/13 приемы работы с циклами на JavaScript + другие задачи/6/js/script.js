// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

let str = 'xx';
for (let i = 0; i < 5; i++) {
    console.log(str);
    str += 'xx';
}
