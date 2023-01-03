function task05(number) {
    let output = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            output += i;
        }
    }
    return output;
}

console.log(task05(20));