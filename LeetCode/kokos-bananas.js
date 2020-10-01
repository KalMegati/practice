var minEatingSpeed = function(piles, H) {
    let speed = Math.ceil(piles.reduce((x,y) => x+y)/H)
    let recur = true
    while (recur) {
        let time = piles.reduce(((x,y) => x+Math.ceil(y/speed)),0)
        if (time > H) {
            speed += 1
        } else {
            recur = false
        }
    }
    return speed
};

// var minEatingSpeed = function(piles, H) {
    
// }

console.log(minEatingSpeed(piles = [30,11,23,4,20], H = 5))
