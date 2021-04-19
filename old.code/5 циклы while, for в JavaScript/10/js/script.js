let mass = [5, -5, 0, 3, 7, 3, 2, -10]
let sum = 0;
for (let i in mass) {
    if (mass[i] > 0) {
        sum += +mass[i];
    }
}
console.log(sum)