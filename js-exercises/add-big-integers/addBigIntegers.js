function addBigIntegers(intString) {
    let numbers = intString.split('\n');
    let result = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
        let maxLen = Math.max(numbers[i].length, result.length);
        let carry = 0;
        let sumOfTwo = "";
        for(let j = 0; j < maxLen; j++ ) {
            let index1 =  numbers[i].length - 1 - j;
            let index2 =  result.length - 1 - j;
            if(index1 > -1 && index2 > -1) {
                let sum = parseInt(numbers[i][index1]) + parseInt(result[index2]) + carry;
                [sumOfTwo, carry] = addNum(sum, sumOfTwo,carry);
            } else if(index1 > -1) {
                let sum = parseInt(numbers[i][index1]) + carry;
                [sumOfTwo, carry] = addNum(sum, sumOfTwo,carry);
            }  else if(index2 > -1) {
                let sum = parseInt(result[index2]) + carry;
                [sumOfTwo, carry] = addNum(sum, sumOfTwo,carry);
            } else if(carry) {
                sumOfTwo = carry.toString() + result;    
                carry = 0;
            }
        }
        if(carry) {
            sumOfTwo = carry.toString() + sumOfTwo;
        }
        result = sumOfTwo;
    }
    return result;
}


function addNum(sum, result, carry) {
    if(sum > 9) {
        result = sum.toString().slice(1,2) + result;
        carry = parseInt(sum.toString().slice(0,1));
    } else {
        result = sum.toString() + result;
        carry = 0;
    }
    return [result,carry];
}

export { addBigIntegers };
