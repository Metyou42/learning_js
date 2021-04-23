let obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}
for (let i in obj) {
    console.log(`${i} - зарплата ${obj[i]} долларов.`)
}