// /**
//  * @param {number[]} fronts
//  * @param {number[]} backs
//  * @return {number}
//  */

var flipgame = function(fronts, backs) {

    const cards = fronts.map((card, index) => [card, backs[index]])

    let tegers = cards.flat()

    const filTegers = tegers.filter((i, index) => tegers.indexOf(i) === index).sort((a, b)=>{return a-b})

    let answer = 0
    let place = 0

    while (!answer && place < filTegers.length) {
        if (
            !cards.some(card => (card[0] == filTegers[place] && card[1] == filTegers[place]))
        ) {
            answer = filTegers[place]
        }
        place += 1
    }

    return answer

};

console.log(flipgame(fronts = [5,7,6,2,3,4,4,2,1,3], backs = [5,7,4,6,3,3,4,2,1,10]))