let a = new Set();
a.add(1);
a.add(2);
a.add(3); // ===
// a.clear(); отчищает
// a.delete(2); удаляетт
console.log(a);
console.log(a[0]);
console.log(a.size); // розмер
console.log(a.has(3)); // true
console.log(a.has(5)); // false

for (let i of a) {
    console.log(i)
}

let arr = [1, 2, 3, 1, 2, 4, 5, 'hello', 2, 4];
let b = Array.from(new Set(arr));
console.log(b);