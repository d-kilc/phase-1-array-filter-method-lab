// Code your solution here
const drivers = ['mike','joe','suzie','jeff']

const findMatching = (array, string) => {
    return array.filter( (x) => {
        return x.toLowerCase() === string.toLowerCase()
    } )
}
// console.log( findMatching(drivers, 'mike') )
// console.log( findMatching(drivers, 'joe') )
// console.log( findMatching(drivers, 'SUZIE') )

const fuzzyMatch = (array, string) => {
    return array.filter( (x) => {
        const len = string.length
        return x.substring(0, len).toLowerCase() === string.substring(0, len).toLowerCase()
    } )
}
// console.log( fuzzyMatch(drivers, 'mi') )
// console.log( fuzzyMatch(drivers, 'J') )
// console.log( fuzzyMatch(drivers, 'suz') )

// * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.
const moreDrivers = [
    {name: 'joe', hometown: 'missoula'},
    {name: 'jerry', hometown: 'cincinnati'},
    {name: 'inez', hometown: 'baton rouge'}
]

const matchName = (array, string) => {
    return array.filter( (x) => {
        return x.name.toLowerCase() === string.toLowerCase()
    } )
}
console.log( matchName(moreDrivers, 'joe') )
console.log( matchName(moreDrivers, 'INEZ') )
console.log( matchName(moreDrivers, 'Jerry') )