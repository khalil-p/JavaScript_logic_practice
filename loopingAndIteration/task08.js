//
function task08(num1, num2) {
    if (num2 === 1) {
        return 1;
    } else {
        let i = 0;
        while (num1 % num2 === 0) {
            num1 = num1 / num2;
            i++;
        }
        return num1;
    }
}
console.log(task08(54, 11))