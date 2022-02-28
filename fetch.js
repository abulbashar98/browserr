

console.log(111111);
console.log(2222222);
setTimeout(() => {
    console.log('aaaaaaaaa')
}, 3000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));
console.log(3333333);
console.log(444444);

// Note: To integrate Chrome dev Tool with JS...

// Step 1: Open live server from HTML file.
// step 2: Open Run and debug in HTML.
// step 3: Open Debug Console.
// step 4: Now Chrome Dev tool and Debug Console is Connected.