const n = document.querySelector('.n');

let str = ''

function WordPalindrom(n = 5) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            str += 'FizzBazz <br>';
        } else if (i % 3 == 0) {
            str += 'Fizz <br>';
        } else if (i % 5 == 0) {
            str += 'Bazz <br>';
        } else {
            str += i + '<br>';
        }
    }
    return str
}


document.querySelector('button').onclick = () => {
    document.querySelector('.out').innerHTML = WordPalindrom(+n.value);
}


