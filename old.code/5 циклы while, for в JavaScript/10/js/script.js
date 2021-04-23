let arr = [-2, 2, -8, 8, 10];
let sum = 0;
for (let i in arr) {
    if (arr[i] > 0) {
        sum += +arr[i]
    }
}
console.log(sum)