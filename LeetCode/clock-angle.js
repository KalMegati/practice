// /**
//  * @param {number} hour
//  * @param {number} minutes
//  * @return {number}
//  */
var angleClock = function(hour, minutes) {
    
    const minAngle = minutes*6
    const hourAngle = ((hour%12)*30)+(minutes/2.0)
    
    const diffAngle = Math.abs(hourAngle-minAngle)
    
    return ((diffAngle > 180) ? 360-diffAngle : diffAngle)
    
};