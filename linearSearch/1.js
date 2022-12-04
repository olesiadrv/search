const numbers = [3, 8, 30, 25, 33, 93];
function linearSearch (array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array [i] === num) {
            return i;
        }
    }
    return -1;
}
console.log (linearSearch(numbers, 10))