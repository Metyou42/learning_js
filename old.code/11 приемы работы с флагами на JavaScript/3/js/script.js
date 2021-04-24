// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.

let arr = [-4, 1, 3, 7, 2, 6];

// 1-st way
function IsItemNonRepetition(arr) {
    let CopyArr = arr.slice();
    for (let i in arr) {
        CopyArr.splice(0, 1)
        if (CopyArr.includes(arr[i])) {
            return 'Yes'
        }
    }
    return 'No'
}

console.log(IsItemNonRepetition(arr))


// 2-nd way
function IsItemNonRepetition2(arr) {
    if (new Set(arr).size != arr.length) {
        return 'Yes'
    }
    return 'No'
}

console.log(IsItemNonRepetition2(arr))
