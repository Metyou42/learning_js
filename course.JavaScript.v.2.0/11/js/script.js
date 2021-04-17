const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(a);
a.push(10, 2, 3, 4, 5);
console.log(a);
// b.push('a', 'b', 'c');
// console.log(b);

console.log('.......................................');

console.log(b.pop());
console.log(b);

console.log('.......................................');

delete a[3];
console.log(a);

console.log('.......................................');

a.splice(3, 1, 'hi')
console.log(a);

console.log('.......................................');

a.splice(3, 1, 'hi')
console.log(a);
