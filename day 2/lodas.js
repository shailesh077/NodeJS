const _ = require('lodash')

function evenNumber(number) {
    const findEven = _.filter(number, num => num % 2 != 0)
    return _.sumBy(findEven)

}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(evenNumber(number))