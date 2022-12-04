const mass = [
    [4, 7, 9, 45],
    [22, 90, 655, 11],
    [56, 2003, 538, 109],
    [99, 67, 2, 358],
];

function linearSearch (arr, mass) {
    for (let j = 0; j < arr.length; j += 1)
        for (let i = 0; i < arr[j].length; i += 1) {
            if (arr[j][i] === mass) {
                return "["+j+"]["+i+"]";
            }
        }
    return -1;
}

console.log (linearSearch(mass, 11));