let a = [4, 5, 6];
let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(b)

let out = '';
for (let i in b) {
    for (let j in b[i]) {
        out += b[i][j] + ' ';
    }
    out += '<br>'
}

document.querySelector('.out').innerHTML = out;

out = '';
for (let i in b) {
    for (let j in b[i]) {
        if (b[i][j] > 4) {
            out += b[i][j] + ' ';
        }
    }
}

console.log(out)

let d = [1, 0, 0, 0, 0];
let button = document.querySelector('button');

// button.onclick = () => {
//     for (let i in d) {
//         if (d[i] == 1) {
//             // d.splice(i, i + 1, 0, 1)
//             d[i] = 0;
//             d[i + 1] = 1;
//             break
//         }
//     }
//     console.log(d)
// }

let k = 0;
button.onclick = () => {
    if (k + 1 < 5) {
        d[k] = 0;
        d[k + 1] = 1;
        k++;
        document.querySelector('.out2').innerHTML = d;
    }
}