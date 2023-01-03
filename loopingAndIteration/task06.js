function task06(number){
    let i=0;
 while(!(number%10==0)){
    number+=1;
    i++;
}
return number;
}

console.log(task06(596))