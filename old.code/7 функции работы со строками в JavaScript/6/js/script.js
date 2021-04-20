let str = 'я учу javascript!';
let n = 10;
let result;
if (str.length > n) {
    result = str.slice(0, n) + '...'
} else {
    result = str;
}
console.log(result)