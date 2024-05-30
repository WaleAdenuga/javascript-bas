// functions are values just like numbers, strings, etc
// we can save a function in a variable

// anonymous function - function without a name
let function1 = function() {
    console.log('hello2');
}; // don't forget semicolon at the end since it's a variable

console.log(function1); 
// can be accessed by calling variable name like you call a function
function1();

// hoisting
/* normally, we decalre  functions like
    function greeting() {

    }
    and this means we cann call it before it's even created 
*/
// hoisting doesn't work with anonymous functions

// function inside an object is called a method
// function is a value, we can have that in an object
let obj1 = {
    num: 2,
    fun: function() {
        console.log('fun');
    }
};
obj1.fun();

// function is a value, we can pass it into a function
function display(param) {
    console.log(param);
}

display(2);

// passing a function into another function
function run(params) {
    params();
}

// function we're passing in is called a callback
run(function() {
    console.log('run');
}); 

run(function1);

//set timeout
// 2 pparameters - function we want to run in the future - timeoutms (how long to wait before running function)
// advantage is it doesn't block our code while waiting for a function response
setTimeout(function() {
    console.log('timeout');
}, 3000);

// asynchronous code - won't wait for code to finish before going to the next line
// synchronous - line by line
// notice set timeout only sets a timer and goes to the next line (console printed first) 
console.log('next line');

// same params as setTimeout
// will run the function every 3 seconds
/* setInterval(function(params) {
    console.log('interval');
}, 3000); */

// difference is it'll immediately go the next line
console.log('next line 2');

// another way to loop through an array
// for each loops through the array, for each element in the array, it saves into params and runs the function
// better way to loop through array
// foreach also has info on index
// forEach doesn't have continue but can return to skip an iteration
// better to use a for loop if you want to use break


/* ['make dinner', 'watch youtube', 'footbal'].forEach(
    function (params, index) {

        if (params === 'watch youtube') {
            return;
        }

        console.log(index);
        console.log(params);
    }
) */

['make dinner', 
'watch youtube', 
'footbal']
    .forEach((params, index) => {

        if (params === 'watch youtube') {
            return;
        }

        console.log(index);
        console.log(params);
    });


// simpler way to write functions
// arrow functions - mostly work like regular ones

const regular = function(params) {
    console.log('garrapolo');
    return 5;    
}

const arrowFunction = (param, param2) => {
    console.log('risky throw');
    return 5;
}
arrowFunction();

// arrow functions hhave shortcuts regular ones don't
// if only one param, you don't need the () around it
// scroll up for forEach to see arrow in action
// recommended to use arrow when passing a functio into another function
// keep in mind that regular functions are easier to read and support hoisting
const oneParam = param => {
    console.log(param + 1);
}

oneParam(2); 

//one line arrow function, curly {} not needed and return not needed
// automatically returns the rsult from the right
const oneLine = () =>  2 + 3; 
console.log(oneLine());

// use arrow function inside an object
// recommended to use other type because it's easier to read
const obj2 = {
    method: () => {

    },
    method2() {
    }
};

// use event listener to activate onclick of a button
let button = document.querySelector('.js-button');

// 2 parameters
// 1 is the event we want to listen for, word after "on" is the event
// 2 is a function we want to run

let listener = (x, y, z) => {
    console.log((x+y+z));
};

listener(2, 4, 5);

button.addEventListener('click', () => {
    listener(2,3,4);
});
// it has some advantages over normal onClick
// it lets us add multiple event listeners for an event
button.addEventListener('click', () => {
    console.log('click2');
});
// we can remove an event listener
// event - function we want to remove
// best advise is to use addevent listener instead of onclick
//button.removeEventListener('click', listener); // will no longer log click


// array.filter
// array of numbers with all negative numbers removed
// filter works the same as forEach, saves each value and index
// but it returns a value
// filter creates a new array , if the inner function returns true, it'll put the value in the new array
// if it returns false, it won't put the new value in the array 
let res = [1,2,-4,-5].filter((value, index) => {
    return (value >= 0);
});
console.log(res);

// array.map 
// make array with each number doubled
// map takes each element in the array and stores in the value and runs the function
// map creates a new array, whatever we return is added to the new array
let ma = [1,1,3,3,5,6].map((value, index) => {
    return value * 2;
});
console.log(ma);

// arrow function in one line
let ba = [1,1,3,3,5,6].map(v =>  v * 2);
console.log(ba);

// closure
// if a function has access to a value, it'll always have access to that value
// value gets packaged together with the function, good thing is it's almost done automatically by javascript