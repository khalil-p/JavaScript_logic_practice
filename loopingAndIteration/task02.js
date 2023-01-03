function task02(number) {
    let sum = 0;
    let i = 1;
    while (i <= number) {
        let j = 1;
        while (j <= 10) {
            sum += i * j;
            j++;
        }
        i++;
    }
    return sum;
}

console.log(task02(2));