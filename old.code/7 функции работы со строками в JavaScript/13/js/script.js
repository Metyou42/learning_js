let str = 'adnrii matviichuk andriyovich';
let StrSplit = str.split(' ');
let result = '';
for (let i in StrSplit) {
    result += StrSplit[i][0].toUpperCase() + StrSplit[i].slice(1) + ' ';
}
console.log(result)
