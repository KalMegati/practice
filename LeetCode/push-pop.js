var buildArray = function(target, n) {
    last = target[target.length-1]
    newArr = [];
    let i = 1
    let index = 0
    while (i <= last) {
        newArr.push("Push")
        if (!(i == target[index])) {
            newArr.push("Pop")
            index -= 1
        }
        i += 1
        index += 1
    }
    console.log(newArr);
    return newArr;
};