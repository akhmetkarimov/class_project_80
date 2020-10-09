// let arr = [1, 24, 3, 51, 55, 3, 1, 2, 24, 24, 6]
// let maxCount = 0
// let maxElem = 0

// for (let i = 0; i < arr.length; i++) {
//     let elemCount = 0
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             elemCount++
//         }
//     }
//     if (maxCount < elemCount) {
//         maxCount = elemCount
//         maxElem = arr[i]
//     }
// }
// console.log("COUNT", maxCount, "ELEMENT", maxElem)



// let arr = [12, 104, 81]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i]
//     let sumEachElem = 0
//     while (temp > 0) {
//         let digit = temp % 10 // 2
//         sum += digit
//         sumEachElem += digit
//         temp = Math.floor(temp / 10)
//     }

//     console.log("SUM of", arr[i], ":", sumEachElem)
// }

// console.log("TotalSUM:", sum)