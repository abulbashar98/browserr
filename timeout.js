



// 1st Case:
/*
console.log('First: First line of code in runtime stack');
console.log('Second: Second line of code in runtime stack');
console.log('Third: Third line of code in runtime stack');
console.log('Fourth: Fourth line of code in runtime stack')
*/



// 2nd Case:

/*
function joinInMiddle() {
    console.log('Middle line in runtime stack');
}

console.log('First: First line of code in runtime stack');
console.log('Second: Second line of code in runtime stack');
joinInMiddle();
console.log('Third: Third line of code in runtime stack');
console.log('Fourth: Fourth line of code in runtime stack')
*/



// 3rd Case:


function joinInMiddle() {
    console.log('Middle line in runtime stack unless sent to the queue');
}

console.log('First: First line of code in runtime stack');
console.log('Second: Second line of code in runtime stack');
// setTimeout(joinInMiddle);
setTimeout(joinInMiddle, 5000)
setTimeout(function () {
    console.log('Takes 3.5 seconds to render from stack')
}, 3500)
setTimeout(() => console.log('this Arrow takes 7 seconds to render from stack'), 7000)
console.log('Third: Third line of code in runtime stack');
console.log('Fourth: Fourth line of code in runtime stack')



// Note:
/*
Javascript as a single threaded language works only on stacks on browser Engine.... 
Due to the efficiency of rendering site (60 times in a second) some tasks are needed to be done asynchronously...
SetTimeOut sends that task to that asynchronous queue outside of engine and Delivers it back after the stack is empty...
*/

