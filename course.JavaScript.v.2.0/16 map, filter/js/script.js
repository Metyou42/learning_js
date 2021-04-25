let arr = [4, 5, 12, 200, 1, 0, -2];

let b = arr.map((item, index) => {
    return item * 5
});

console.log(b)

let sort = arr.filter((item, index) => {
    return item > 0

});

console.log(sort)