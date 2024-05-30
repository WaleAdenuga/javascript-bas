// Javascript is about behaviour, it determines how the elements on the page behave.
console.log('Hello World'); 
// node includes google's v8 javascript engine and it is used to run javascript
// use let not var to declare a variable

/* const myName = 'Adewa';
console.log(myName);

let myAge = 25;
console.log(myAge);

let isApproved = true;

// javascript is dynamically typed, the type of a variable can be changed at runtime

let person = {
    name: 'Adewa',
    age: 25
};
console.log(person);

// dot notation is used to access properties of an object
person.age = 26;
console.log(person.age);

// bracket notation is used to access properties of an object
// note that element in brackets must be a string and is the name of the target property
// bracket notation is useful when the name of the property is stored in a dynamic variable (can change at runtime)
person['age'] = 27;
console.log(person.age);

// length and type of array can change at runtime
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Adewa', 'Adeyemi');

// interpolation is a feature of javascript that allows you to insert a variable into a string
// it's a feature of template strings, template strings can be multiline
let template = `Items (${selectedColors.length})`;
console.log(template);

let cartQuantity = 45; */

// == converts both sides to the same type before comparison
// === checks if both sides are of the same type and value
// comparison operators have a lower priority than math operators
/* if (true) {
    console.log('Hello World');
} else {
    
}

// var doesn't have block scope, which can lead to unexpected results

// truthy and falsy values, any value not in the falsy list is truthy
// falsy values are false, 0, empty string ' ', null, undefined, NaN (not a number) eg string / number
if (88) {
    console.log('truthy');
}

function calculateTax(cost, taxPercent=0.1){
    console.log(cost * taxPercent);
}

calculateTax(100);
calculateTax(3000, 0.3); */

// use this to get value saved from local storage (saved below)
//console.log(localStorage.getItem('person'));

/* 
// create an object in javascript
let product = {
    name: 'Shoes',
    price: 1000,
    stock: 10,
    description: 'Shoes are cool',
    'color':'red'
};
console.log(product);

// change the value of a property of an object, access the property using dot notation
product.price = 2000;
console.log(product);

// add a new property to an object
product.color = 'green';
console.log(product);

// use bracket notation to add a new property to an object, access too and change
product['size'] = 'large';
product['color'] = 'blue';
console.log(product);

// nested objects also exist
let person = {
    name: 'Ade',
    age: 30,
    hobbies: ['coding', 'reading', 'sleeping'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    // function inside an object is called a method
    fun: function sayHello() {
        console.log('Hello from your object function');
    }
};

console.log(person);
console.log(person.address.street);

person.fun();

// json is similar to object but no support for functions and everything must be double quoted like a string
// stringify converts an object to a json string
// json can be sent to another computer or used to store data
console.log(JSON.stringify(person));
// json to javaascript object

let json = JSON.stringify(person);
let obj = JSON.parse(json);
console.log(obj);
console.log(obj.name);

// localStorage is a built in object in javascript that allows you to store data in the browser (permanently)
// refreshing the page normally resets the data in a variable

// local storage only supports strings, 
// first parameter is the key, second parameter is the value to store
localStorage.setItem('person', JSON.stringify(person)); */

// we use null when we intentionally want something to be empty
// auto boxing - javascript wraps the string into an object
console.log('hello'.toUpperCase())

// objects in javascript are references, you can still change the values inside the object despite using const
// it's like a pointer in c++ to the object stored in computer memory
// object = object just copies the reference and both point to the same location in memory
// objects can't be directly compared with == or ===, it compares the reference not the value
/* 
// destructuring
const object = {
    message: 'hello brothers',
    price: 1000,
    color:'red'
};
// creates a variable called message and sets it to the value of the message property of the object
// keep in mind that the name of the variable and the name of the property must be the same
const { message, price } = object;

// unless you explicitly want to change the name of the variable
const { message: msg } = object;
console.log(msg);

console.log(message, price);

const object1 = {
    // shorthand property
    // shortcut since the name of the variable and the name of the property are the same
    message,
    price,
    // shorthand method, no need to use the word function
    method() {
        console.log(this.message + this.price);
    }
};
console.log(object1);

object1.method(); */

// changing innerhtml changes the webpage
// this document object is the DOM, it gives js full control over the webpage 
// innerhtml gives all the html inside the body tag
//document.body.innerHTML = 'hello';
//document.title = 'jon';

// we can have html elements in javascript and it's converted to a javascript object
//document.body.innerHTML = '<button>Click me</button>';

// document.querySelector lets us get any element from the page and put it in our javascript code
/* console.log(document.querySelector('button')); // returns the first button element on the page

// every html element has a property called innerHTML which lets us control the html inside the element
console.log(document.querySelector('button').innerHTML); // changing innerHTML changes the html inside the element

document.querySelector('button').innerHTML = 'Changed';

// get specific element
// starting with a dot means it'll look for a class (class selector )
let buttonElem = document.querySelector('.js-button');
console.log(buttonElem);
 */
//String(25);
// if a string only contains a number, it will be converted to a number when we -*/
// don't do it because addition works differently with strings
//console.log('25' - 5);

// window element represents the entire browser window
// document and console are properties of the window element
// we never need to use the window element, we can just use document and console becauuse javascript adds it automatically
window.document;
 
// array is a list of values
/* let array = [10, 20, 30];
//get specific element from an array

console.log(array[0]);
console.log(array[1]);

// change element
array[0] = 100;
console.log(array[0]);

// any type of value can be stored in an array
// {name: 'Ade} is an object
let array2 = [1, 'hello', true, { name: 'Ade' }, [1, 2, 3]];

// array is a special type of object
// push adds an element to the end of the array

array2.push(50);
console.log(array2);

// splice removes a value from an array
// first parameter is the index of the element to remove (starting position), second parameter is the number of elements to remove
array2.splice(2, 1);
console.log(array2);

// loops
let i = 1;
while(i <= 5) {
    console.log(i);
    i++;
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const list = ['make dinner', 'wash dishes', 'watch youtube'];

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

// accumulator pattern, to get the sum of an array of numbers
// create a variable to store the result
const nums = [1, 2, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}
console.log(total);

// create a copy of the array where it's doubled
const doubled = [];

for (let i = 0; i < nums.length; i++) {
    doubled.push(nums[i] * 2);
}
console.log(doubled); */

// arrays are references
// 1,2,3 are stored in memory, array only equals a reference to the memory location
// so simply equating and modifying the copy also modifies the original
/* let array = [1,2,3];
let array2 = array;
array2.push(7);
console.log(array); // [1,2,3,7]
console.log(array2); // [1,2,3,7]

// solve by taking a slice of the array instead
let array3 = array.slice();
array3.push(7);
console.log(array); // [1,2,3,7]
console.log(array3); // [1,2,3,7,7]

// array destructuring
// get value from array and assign it to a variable
const [first, second, third] = [1,2,3];

// break lets you exit a loop early
// continue lets to skip one iteration of the loop
for (let i = 1; i<=10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
    if (i === 8) {
        break;
    }
}

// count fro, 1 to 10, except numbers divisible by 3
// in a while, you have to add increment step manually to avoid infinite loop

let i = 1;
while (i < 10) {
    if (i % 3 === 0) {
        i++; // manual implement
        continue;
    }
    console.log(i);
    i++;
}

function doubleArray(nums) {
    const doubled = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) return doubled;
        doubled.push(nums[i] * 2);
    }
    return doubled;
}

// use loops with functions
console.log(doubleArray([1,1,3, 9, 0, 15]));
 */


