// takes an array of numbers and returns an object with the max and min of the array without math.min
/* function minMax(arr) {

    let result = {
        min: null,
        max: null
    };

    for(let i = 0; i < arr.length; i++ ) {
        if(arr[i] < result.min || result.min === null) {
            result['min'] = arr[i];
        }
        if (arr[i] > result.max || result.max === null) {
            result.max = arr[i];
        }
    }
    return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));

// takes an array of strings and returns an object with how many times each string appeared
function countWords(words) {
    const result = {};

    for (let i = 0; i < words.length; i++) {
      const word = words[i];


      // result[word] adds/accesses a property using whatever is
      // saved inside the 'word' variable.
      // If word = 'apple', result[word] will do result['apple']
      // If word = 'grape', result[word] will do result['grape']
      if (!result[word]) {
        result[word] = 1;
      } else {
        result[word]++;
      }
    }

    return result;
  }

console.log(countWords(['apple', 'grape', 'apple', 'apple']));
console.log(countWords([2, 2, -5, 7, 7]));
//console.log(countWords(['appple', 'grape', 'grape', 'apple']));
//console.log(countWords(['mango', 'grape', 'apple', 'papaya']));

let product = {
    name: 'Shoes',
    price: 1000,
    stock: 10,
    description: 'Shoes are cool',
    'color':'red'
};
console.log(product);

// add a new property to an object via dot notation
product.ghy = 'green';
console.log(product);

// use bracket notation to add a new property to an object, access too and change
product['size'] = 'large';
product['color'] = 'blue';
console.log(product); 

// fizbuzz problem, difference is save in an object with num and type
// to refresh your javascript object problem
function fizzbuzz (num) {
    let arr = [];
    let obj = {};
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            obj[i] = 'FizzBuzz';
        } else if (i % 3 === 0) {
            console.log('Fizz');
            obj[i] = 'Fizz';
        } else if (i % 5 === 0) {
            console.log('Buzz');
            obj[i] = 'Buzz';
        } else {
            console.log(i);
            obj[i] = i;
        }
        
    }
    arr.push(obj);
    return arr;
}

console.log(fizzbuzz(20)); 


let timeoutId;
// onclick, show added then remove after 2 seconds
function clickCart() {
    let element = document.querySelector('.js-message');
    element.innerHTML = 'Added';

    // clear timeout so reclicking doesn't remove message too quickly
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
        element.innerHTML = '';
    }, 2000);
}

// replace title of messaging app, better solution in 12i.html
let messages = 2;
let timeId;
function replaceTitle(param) {
    clearInterval(timeId);
    timeId = setInterval(function() {
        if (param < 0) {
            return;
        } else if (param === 0) {
            document.title = `App`;
        } else {
            if (document.title === 'App') {
                document.title = `(${param}) New messages`;
            } else {
                document.title = 'App';
            }
        }
    }, 1000);
    
}

function onAdd(params) {
    messages++;
    replaceTitle(messages);
}

function onRemove(params) {
    if(messages > 0) {
        messages--;
        replaceTitle(messages);
    }
}

replaceTitle(messages);

*/
