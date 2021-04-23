let arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i in arr) {
    if (arr[i] === 4) {
        console.log('Have')
        break
    }
    else if (i == arr.length - 1) {
        console.log('not have')
    }
}