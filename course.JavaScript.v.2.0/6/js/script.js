let out = document.querySelector('div.out');

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
        out.innerHTML += j + 1 + ' ';
    }
    out.innerHTML += '<br>';
}


let out2 = document.querySelector('div.out2');

// for (i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         out2.innerHTML += `${i}*${j}=${j * i} <br>`;
//     }
//     out2.innerHTML += '<br>';
// }


let romb = document.querySelector('div.romb');
for (i = 1; i <= 10; i++) {
    if (i <= 5) {
        for (let j = 0; j < i; j++) {
            romb.innerHTML += '* ';
        }
    } else {
        for (let j = 9; j >= i; j--) {
            romb.innerHTML += '* ';
        }
    }
    romb.innerHTML += '<br>';
}


let trapecia = document.querySelector('div.trapecia');
for (i = 5; i <= 10; i++) {
    for (let j = 0; j < i; j++) {
        trapecia.innerHTML += '* ';
    }
    trapecia.innerHTML += '<br>';
}


// let paralelegram = document.querySelector('div.paralelegram');
// for (i = 5; i <= 10; i++) {
//     for (let j = 0; j < i; j++) {
//         paralelegram.innerHTML += '/';
//     }
//     for (let j = 0; j < i; j++) {
//         paralelegram.innerHTML += '* ';
//     }
//     paralelegram.innerHTML += '<br>';
// }