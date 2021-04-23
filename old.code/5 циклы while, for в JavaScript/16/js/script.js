let n = 1000;
let num = 0;
let k = 0;
while (true) {
    n /= 2;
    if (n < 50) {
        num = n;
        break
    }
    k++
}
console.log(k);
console.log(num);
