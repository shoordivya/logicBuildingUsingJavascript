//Count digits in a number 
function countDigits(num){
    let count =0;  // num.toString().length; another way to doing it in one line
    num=Math.abs(num);
    while(num > 0){
        count++;
        num=Math.floor(num/10);
    }
    return count;
}

console.log(countDigits(894276847283)); // Output: 1