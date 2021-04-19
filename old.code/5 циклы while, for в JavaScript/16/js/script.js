let n = 1000;
let num = 0;
let cout_iter = 0;
while (true) {
    n /= 2;
    cout_iter++;
    if (n < 50) {
        num = n;
        break
    }
}
console.log(num);
console.log(cout_iter);