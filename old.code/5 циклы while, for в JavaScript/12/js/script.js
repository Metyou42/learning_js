let arr = [10, 20, 30, 50, 235, 3000];
for (let i in arr) {
    if (String(arr[i])[0] == 1 || String(arr[i])[0] == 2 || String(arr[i])[0] == 5) {
        console.log(arr[i]);
    }
}