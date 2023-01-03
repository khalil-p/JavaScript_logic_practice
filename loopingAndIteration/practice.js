// // Reverse a given Number
// function task08(num) {
//     let remainder;
//     let reversedNum = 0;
//     while (num >= 1) {
//         remainder = num % 10;
//         reversedNum = reversedNum * 10 + remainder;
//         num = parseInt(num / 10);
//     }
//     return reversedNum;
// }

// console.log(task08(12345))

//how to write star pattern programme in java script?
function start() {
    let max = 10;

    for (let i = 1; i <= max; i++) {
        console.log("*".repeat(i));
    }

    for (let i = max - 1; i >= 1; i--) {
        console.log("*".repeat(i));
    }

    max = 1;

    setInterval(() => {
        console.log("");

        for (let i = 1; i <= max; i++) {
            console.log("*".repeat(i));
        }

        for (let i = max - 1; i >= 1; i--) {
            console.log("*".repeat(i));
        }

        max++;
    }, 500)

}