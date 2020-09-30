// /**
//  * @param {number} N
//  * @param {number} K
//  * @return {number}
//  */
var kthGrammar = function(N, K) {

    if (K < 3) {
        return ((K === 1) ? 0 : 1)
    } else if (K > 2**(N-1)) {
        cake = K-2**(N-1)
        return Math.abs(kthGrammar((N-1), cake)-1)
    } else {
        return kthGrammar(N-1, K)       
    }

}

console.log(kthGrammar(1,1))
console.log(kthGrammar(2,1))
console.log(kthGrammar(2,2))
console.log(kthGrammar(4,5))
console.log(kthGrammar(6,19))

// K - 2^(N-1)

// While K > 2

//     const generator = (depth) => {
//         let i = 1
//         let row = [0]
//         if (depth === 1) {return row}
//         do {
//             row = row.map(char => {
//                 return ((char === 1) ? [1,0] : [0,1])
//             }).flat()
//             i++
//         }
//         while (i < depth)
//         return row
//     }

//     return generator(N)[K-1]
// };

// const generator = (depth) => {
//     let i = 1
//     let row = [0]
//     if (depth === 1) {return row}
//     do {
//         row = row.map(char => {
//             return ((char === 1) ? [1,0] : [0,1])
//         }).flat()
//         i++
//     }
//     while (i < depth)
//     return row
// }

// let j = 1
// do {
//     console.log(generator(j).join())
//     j++
// }
// while (j < 7)

