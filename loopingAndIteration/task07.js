// function task07(num) {
//     let i;
//     let mul = 1;
//     for (i = 1; i <= num; i++) {
//         mul = mul * i;
//     }
//     return mul;
// }

// console.log(task07(5))

function task07(n) {
    if (n <= 0) {
        return 1;
    }
    return n * task07(n - 1);
}

console.log(task07(5))