

// Note: Difference of setTimeout and setInterval is:- set time out works once after
// the interval(if mentioned)...
// where set interval works time and time again.....

// setInterval
/*
console.log('first');
setInterval(() => {
    console.log('tik tok tik tok')
}, 1000)
console.log('second');
*/


// How to stop Set Interval

// 1. (Ctrl + c) to stop runtime in terminal

// 2. Stop by using it's return.... Proper way.


let timer = 1000;

const timeIntervalId = setInterval(() => {
    timer--;
    if (timer < 985) {
        clearInterval(timeIntervalId)
    }
    console.log(timer);     // Starts at 999 ends at 984
    // console.log(timer--);   // starts at 1000 ends at 985
    // console.log(timer--);    //  starts at 1000 ends at 985
}, 1000)
