// still doubt
function task04(number) {
    let i = 1;
    let sum = 0;
    while (sum <= number) {
        sum += i;
        i++;
        // while (!(sum <= number)) {
        //     let j = --i;
        //     sum = sum - (j);
        //     return i - 1
        // }

    }
    return i-2
}
console.log(task04(25));