// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели.


let num = 5;

function func4(a) {
    if (a >= 1 && a <= 7) {
        let DaysOfTheWeek = {
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thurday',
            5: 'Friday',
            6: 'Saturday',
            7: 'Sunday'
        };
        return DaysOfTheWeek[a]
    } else {
        return 'Number not in range 1 to 7'
    }
}

console.log(func4(num));