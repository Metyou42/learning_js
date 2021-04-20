let str = 'var_test_text';
let StrSplit = str.split('_');
let result = '';
for (let i in StrSplit) {
    if (i > 0) {
        result += StrSplit[i][0].toUpperCase() + StrSplit[i].slice(1);
    } else {
        result += StrSplit[i];
    }
}
console.log(result)
