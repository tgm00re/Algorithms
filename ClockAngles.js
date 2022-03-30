//clock angles!

//Given a number of minutes past midnight, determine the angle between the minutes hands at that point in time keep in mind that, on an analog clock, the hour hand is not perfectly aligned with the number hour.

//I.E at 4:45, the hour hand is 3/4 the way between 4 and 5.

const clockAngles = (minutes) => {

    const hours = (minutes / 60);
    //Hour hand moves .5 degrees per minute
    const hourAngle = (hours * 30);
    //Minute hand moves 6 degrees per minute
    const minuteAngle = (minutes % 60) * 6;
    //Calculate difference between hour and minutes angles
    let finalAngle = Math.abs(minuteAngle - (hourAngle))
    if(finalAngle >= 360){
        return finalAngle % 360;
    }
    return finalAngle
}

// console.log(clockAngles(360));
// console.log(clockAngles(180));
// console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980));
console.log(clockAngles(1440));