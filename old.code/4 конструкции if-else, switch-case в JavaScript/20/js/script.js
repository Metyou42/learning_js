let str = '123';
let sum = 0;
for (let i in str) {
    sum += +str[i];
}
alert(sum);
for (let i = 0; i < str.length; i++) {
    sum += +str[i];
}
alert(sum);

