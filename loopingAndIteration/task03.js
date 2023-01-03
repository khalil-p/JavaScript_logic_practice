function task03(number){
    let i=1;
    let sum=0;
    while(i<=number){
        sum+=Math.pow(i,3);
        i++;
    }
    return sum;
}

console.log(task03(5))