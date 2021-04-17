let out = document.querySelector('.out');
let k = 0;
let sum = 0;
while (k < 10) {
    k++;
    sum += k;
    // console.log(sum);
}
out.textContent = `Sum = ${sum}`;
console.log(sum);

let out2 = document.querySelector('.out2');

k = 0;
let out2Str = '';
let flag = 4;

while (k < 5) {
    let j = 0;
    while (j < 5) {
        if (j < flag) {
            out2Str += '&nbsp';
        } else {
            out2Str += '*';
        }
        j++
    }
    flag--;
    out2Str += '<br>';
    k++
}
out2.innerHTML = out2Str;
