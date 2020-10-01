

var longestSubarray = function(nums) {
    let frags = nums.join("").split("0").map(x => x.length)
    if (frags.length == 1) {return frags[0]}
    console.log(frags)
    let joins = frags.map((i, index) => i+frags[index+1])
    console.log(joins)
    console.log(joins)
    return Math.max(...joins)
};

console.log(longestSubarray([1,1,1]))

