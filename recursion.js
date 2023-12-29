//Recursion Questions
//1. What is potential consequence of not including a base case in a recursive function?
//A downfall of recursion is the space complexity of it's operations. When we add a function call to the call stack, it is not allowed to leave until the final function call is resolved and unwound back to itself. This can become a problem when we are working on larger inputs, and the growth in the call stack can be almost impossible to fully comprehend.
//2. What does memoization allow you to avoid?
// Memoization is the practice of ensuring that a function does not run the same inputs more than once by keep a record of the results for the given inputs. The record is usually kept in an object. 
//3. What are the steps to writing a recursive function?
// steps to writing a recursive function. 
//1. Define your function and parameters.
//2. Define your base cases and return the computed results.
//3. Perform the action step.
//4. Return the function with new arguments that will progress toward the base case.
//Recursive functions rely on "the call stack". When a program calls a function, that function call goes to the top of the call stack (like pancakes!). You can add things one at a time but when yuo take something off, you can only take it off from the top.

//Recursive Practice
//1. Write a JavaScript program to calculate the factorial of a number.  
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
 function factorial(n){  //base case
     if (n === 0) return 1;  //the action
     return n * factorial(n-1);
 }
console.log(factorial(5)) // recursive call
//2. Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.  
const gcd = function (a,b) {
    if (b == 0) {
        return a;
    }
        return gcd(b,a % b);
    };
console.log(gcd(1263262,553443))
//3. Write a JavaScript program to get integers in the range (x, y) using recursion.  
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
function range(x, y) {
    const results = [];
    if(x >= y - 1) {
        return results;
    }
    results.push(x + 1);
    return results.concat(range(x + 1,y));
}
console.log(range(2,9));
//4. Write a JavaScript program to compute the sum of an array of integers.  
//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21
const sum = function(array) {
    if(array.length === 1){
        return array[0]
    }
    else {
        return array.pop() + sum(array);
    }
   
};
console.log(sum([1,2,3,4,5,6]))
//5. Write a JavaScript program to compute the exponent of a number.  
//Note : The exponent of a number says how many times the base number is used as a factor.
//82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
function solution(base, exponent) {
    if(exponent === 1) {
        return base;
    } else {
        return base * solution(base, exponent-1);
    }
}
console.log(solution(8,2))
//6. Write a JavaScript program to get the first n Fibonacci numbers.  
//Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
const fibonacci = function (num) {
    if(num <= 1) {
        return [0,1];
    } else {
        const s = fibonacci(num-1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s.slice(0,num);
    }
}
console.log(fibonacci(10));
//7. Write a JavaScript program to check whether a number is even or not.
function isEven(num) {
    if(num <0) {
        num = Math.abs(num);
    }
    if (num === 0) {
        return true;
    }
    if (num === 1) {
        return false;
    } else {
        num = num - 2;
        return isEven(num)
    }

}
console.log(isEven(66));
console.log(isEven(-55))
console.log(isEven(100))
//8. Write a JavaScript program for binary search.  
//Sample array : [0,1,2,3,4,5,6]
//console.log(l.br_search(5)) will return '5
function binarySearch (arr, target, start = 0, end = arr.length - 1) {
    //base case
    if (start > end) {
        return -1;
    }
    //calculate index of middle element
    const middle = Math.floor((start + end) /2);
    //base case middle element equal to target
    if (arr[middle] === target) {
        return middle;
    }
    //recursive case
    else if (target < arr[middle]) {
        return binarySearch(arr, target, middle + 1, end);
    }
}

//usage example: perform binary search on sorted array
const sortedArray = [0,1,2,3,4,5,6];
const targetValue = 5;
const resultIndex = binarySearch(sortedArray, targetValue);

//output result
if (resultIndex !== -1) {
    console.log(`Target value ${targetValue} is found at index ${resultIndex}.`)
} else {
    console.log(`Target value ${targetValue} is not present in the array.`)
}
//9. Write a merge sort program in JavaScript.  
//Sample array : [34,7,23,32,5,62]
//Sample output : [5, 7, 23, 32, 34, 62]
//Merge function to combine two sorted arrays
function merge(left, right) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from left and right arrays and merge them
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements in left and right
  return mergedArray.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Merge sort function using recursion
function mergeSort(array) {
  // Base case: If the array has 1 or fewer elements, it is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Calculate the middle index
  const middle = Math.floor(array.length / 2);

  // Recursively sort the left and right halves of the array
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  // Return the merged result of sorting the left and right halves
  return merge(left, right);
}

// Example usage: Perform merge sort on an array
const inputArray = [34, 7, 23, 32, 5, 62];
const sortedArr = mergeSort(inputArray);

// Output the sorted array
console.log(sortedArr);
//10. Write a JavaScript program to check whether a given string is a palindrome or not using recursion.  
//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama".
//Test Data:
// ("madam") -> true
// ("abdb") -> false
// ("ab") -> false
// (test("a") -> true
//Define a function named 'test' that checks if string is a palindrome
function isPalindrome(str) {
    //base case: if string has 0 or 1 characters, its a palindrome
    if(str.length <= 1) {
        return true;
    }

    //check if the first and last characters are equal
    if (str[0] !==str[str.length - 1]) {
        return false;
    } else {
        //recursively check the substring excluding the first and last characters
        return isPalindrome(str.slice(1, -1));
    }
}

//test the function with different input strings
console.log(isPalindrome("madam"));
console.log(isPalindrome("abdb"));
console.log(isPalindrome("ab"));
console.log(isPalindrome("a"));
//11. Write a JavaScript program to convert binary number (positive) to decimal number using recursion. 
//recursive function to convert a binary to decimal
const binaryToDecimal = (binaryString, index =0) => {
    //base case: if the string is empty, return 0
    if (index === binaryString.length) {
        return 0;
    }
    //Get the current binary digit (0 or 1)
    const currentDigit = parseInt(binaryString[index]);

    //recursive step: convert the rest of the string and update the result
    const restDecimal = binaryToDecimal(binaryString, index + 1);
    const currentDecimal = currentDigit * Math.pow(2, binaryString.length - index - 1);

    return currentDecimal + restDecimal;
};

//Test the function with different binary numbers
console.log(binaryToDecimal("1"));
console.log(binaryToDecimal("0"));
console.log(binaryToDecimal("10"));
console.log(binaryToDecimal("101"));

//12. Write a JavaScript program to search for a given integer in an array of sorted integers using the Binary Search Algorithm and recursion.  
// Test Data:
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6) -> 4
// ([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 16) -> -1
//Recursive binary search function
const BinarySearch = (arr, target, start =0, end = arr.length - 1) => {
    //base case target not found
    if (start > end) {
        return -1;
    }
    //calculate middle index
    const mid = Math.floor((start + end) /2);
    //check if target is at the middle
    if(arr[mid] === target) {
        return mid;
    }
    //if target is smaller, search in the left half
    if(arr[mid] > target) {
        return BinarySearch (arr, target,start, mid -1);
    }
    //if target is larger, search in the right half
    return BinarySearch(arr, target, mid + 1, end);
};

//test the binary search function
const sortedArray1 = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23]
const target1 = 6;
const sortedArray2 = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23]
const target2 = -1;
console.log(`Index of ${target1}: ${BinarySearch(sortedArray1, target1)}`);
console.log(`Index of ${target2}: ${BinarySearch(sortedArray2,target2)}`);

//13. A string consists of digits ranging from 2 to 9, inclusive. Write a JavaScript program to get all possible letter combinations that represent the number using recursion.  
// Test Data:
// ("12") -> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
// ("9") -> ["y", "z"]
//function to generate letter combinations for a given digit string
const letterCombinations = (digits) => {
    const length = digits?.length;//get the length of the input digits
    const result = []; //initialize an array to store the combinations

    //base case: if the input are empty, return array
    if (!length) {
        return result;
    }

    //map of digits to corresponding letters on a phone keypad
    const digitMap = {
        1: 'abc',
        2: 'def',
        3: 'ghi',
        4: 'jkl',
        5: 'mno',
        6: 'pqr',
        7: 'stu',
        8: 'vwx',
        9: 'y,z',
    };

    //recursive function to generate combinations
    const generateCombinations = (index, combination) => {
        let letter;
        let letterIndex;

        //if the index exceeds the length, add the combination to the result array
        if (index >= length) {
            result.push(combination);
            return;
        }

        //get the letters corresponding to the current digit
        const digit = digitMap[digits[index]];

        //Iterate through each letter and recusively generate combinations
        letterIndex = 0;
        while ((letter = digit[letterIndex++])) {
            generateCombinations(index + 1, combination + letter);
        }
    };
    //start generating combinations from the first digit
    generateCombinations(0, '');

    //return the final array of combinations
    return result;
};

//test the function with different input digits
console.log(letterCombinations("12"));
console.log(letterCombinations("9"));

