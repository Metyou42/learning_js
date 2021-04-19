// month = 1:12
let month = 9;
if (month > 0 && month <= 2 || month === 12) {
    alert('Winter');
}
else if (month > 2 && month <= 5) {
    alert('Spring');
}
else if (month > 5 && month <= 8) {
    alert('Summer');
}
else if (month > 8 && month <= 11) {
    alert('Autem');
} else {
    alert('No month of Year');
}
