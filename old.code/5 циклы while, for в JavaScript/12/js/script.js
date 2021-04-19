let mass = [10, 20, 30, 50, 235, 3000];
for (let i in mass) {
    if (String(mass[i])[0] == '1' || String(mass[i])[0] == '2' || String(mass[i])[0] == '5') {
        console.log(mass[i])
    }
}