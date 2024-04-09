
      // 1-masala

//function reverseStringToArray(str) {
//      let result = [];
//      for (let i = str.length - 1; i >= 0; i--) {
//        result.push(Number(str[i]));
// }
//  return result;
//}
//let input = "34567";
//let result = reverseStringToArray(input);
//console.log(result);


//2

// function createNumberArray(n, result = []) {
//   if (n < 1) {
//      return result;
//    }
//    result.push(n);
//    return createNumberArray(n - 1, result);
//  }
//  let n = 6;
//  let result = createNumberArray(n);
//  console.log(result);
   
       
        // 3

// function sumOfArrayElements(arr1, arr2) {
//    function sum(arr) {
//      return arr.reduce((acc, curr) => acc + (Number(curr) || 0), 0);
//    }
//    return sum(arr1) + sum(arr2);
//  }
//  let array1 = [4,5, 8, 'a', 'b', 'c'];
//  let array2 = ['x', 1, 4, 6, 'y', 'z'];
//  let result = sumOfArrayElements(array1, array2);
//  console.log(result); 

  

    //4

//function findSmallestAndReturnFourthPower(arr) {
//    let smallest = Infinity;
//    for (let num of arr) {
//      if (typeof num === 'number' && num < smallest) {
//        smallest = num;
//      }
//    }
//    return (smallest ** 4).toString();
//  }
//  let array = [3,3,3,3,3];
//  let result = findSmallestAndReturnFourthPower(array);
//  console.log(result);