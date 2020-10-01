var minIncrementForUnique = function(A) {
    let dex = 0
    let increms = 0
    while (dex < A.length) {
        if (A.indexOf(A[dex]) == dex) {
            dex += 1
        } else {
            A[dex] += 1
            increms += 1
        }
    }
    return increms
};

console.log(minIncrementForUnique([3,2,1,2,1,7]))