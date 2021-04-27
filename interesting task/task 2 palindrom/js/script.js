let word = document.querySelector('.word');


function WordPalindrom(str) {
    str = str.toLowerCase();
    return str == str.split('').reverse().join('')
}


document.querySelector('button').onclick = () => {
    document.querySelector('.out').innerHTML = WordPalindrom(word.value);
}


