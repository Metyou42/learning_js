let count = 0;
document.querySelector('button').onclick = (e) => {
    count++;
    localStorage.setItem('b1', count)
}