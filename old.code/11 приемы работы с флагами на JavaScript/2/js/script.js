// Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
// То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - 
// выведите 'false', а если делится - выведите 'true'.

let num = 31;

function IsNaturalNumber(a) {
    for (let i = 2; i < a; i++) {
        if (Number.isInteger(a / i)) {
            return 'True'
        }
    }
    return 'False'
}

console.log(IsNaturalNumber(num))
