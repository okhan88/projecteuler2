/*

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

function sumOfEvenValuedTerms(n) {
    let sum = 0;
   
    /*
    
    new challenge

    step 1- set prevNum to 1
    step 2- set currentNum to 2
    step 3- add prevNum and currentNum to equal tempNum
    step 4- set prevNum to currentNum
    steo 5- set currentNum to tempNum
    step 6- repeat step 3 while tempNum is less than 4 million

    */

    let prevNum = 0
    let currentNum = 1
    let tempNum = currentNum
    while (tempNum <= n) {
        tempNum = prevNum + currentNum
        let a = tempNum / 2
        if (Number.isInteger(a)) {
            sum = sum + tempNum
        }
        
        if (tempNum > n) {
            break
        }
        prevNum = currentNum

        currentNum = tempNum
    }

    return sum;


}

  
  console.log(sumOfEvenValuedTerms(4000000));