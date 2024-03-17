//  1-savol    ////////////////////////////////////////////////////

// const summa = (num) => {
//     let sum = 0;
//     num = prompt("sonni kiriting:");

//     for (let digit of num) {
//         if (!isNaN(parseInt(digit))) {
//             sum += parseInt(digit);
//         }
//     }

//     return sum;
// };

// console.log(summa()); 


//  3-masala   //////////////////////////////////////////////////////////

// const palindrome = () => {
//     let num = prompt("sonni kiriting:");
//     let reversedNum = num.split('').reverse().join('');

//     if (num === reversedNum) {
//         return "Bu son palindrome";
//     } else {
//         return "Bu son palindrome emas";
//     }
// };

// console.log(palindrome());

//   4-masala   ///////////////////////////////////////////////

// const palindrome = () => {
//     let text = prompt("so'zni kiriting:");
//     let text2 = text.split('').reverse().join('');

//     if (text.toLowerCase() === text2.toLowerCase()) {
//         return "Bu so'z palindrome";
//     } else {
//         return "Bu so'z palindrome emas";
//     }
// };

// console.log(palindrome());


//  5- masala   /////////////////////////////////////////////////

// const obj = {a: 0, b: 232};

// const sumOfValues = (obj) => {
//     let totalSum = Object.values(obj).reduce((acc, curr) => acc + curr, 0);
//     return totalSum;
// };

// const finalSum = sumOfValues(obj);
// const finalSumDigits = String(finalSum).split('').reduce((acc, curr) => parseInt(acc) + parseInt(curr));

// console.log(finalSumDigits);

//  2-masala  ///////////////////////////////////////////////////

// const sumOfNumbers = (...numbers) => {
//     const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
//     const sumArray = String(totalSum).split('').map(Number);
//     return sumArray;
// };

// const result = sumOfNumbers(556, 668, 746);
// console.log(result);



//////////////////////////////////



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const x = (a) => {
//     let newArr = [];
//     for (let i = 0; i < a.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             newArr.push(a[i])
//         }
//     }
//     return newArr;
// }

// console.log(x(arr));



///  arrayda sonlar va harflar berilgan sonlarni alohida harflarni alohisa qilsin ///////

// let arr = [1, 2, "s", 3, 4, "r", 5, 6, 7]

// function arrNumbersAndLetters(arr) {
//     let numbers = arr.filter(item => typeof item === 'number');
//     let letters = arr.filter(item => typeof item === 'string');
    
//     return { numbers, letters };
//     };

// let newStr = arrNumbersAndLetters(arr);

// console.log(newStr.numbers); 
// console.log(newStr.letters); 

