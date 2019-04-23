/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When a function is in a global scope, the value of "this" inside of the function becomes
     the window object.
* 2. When a function is called by a previous dot, the object before that dot is now "this".
* 3. When a constructor function is used, "this" is refered to the specific instance of the
     object that is created and returned by the constructor function.
* 4. When JavaScript's "call" or "apply" method is used, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greetMe(name) {
    console.log( `Hello `  + name);
    console.log(this);
}

greetMe( `Randy`);

// Principle 2

// code example for Implicit Binding

var greetMe = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}

greetMe.speak('Randy');

var greeting = 'Salutations ',
    greet = greetMe.speak;

greet('Randy');

// Principle 3

// code example for New Binding

function GreetMe(name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
        console.log(this);
    }
};

var greetRandy = new GreetMe('Randy');
var greetBrittany = new GreetMe('Brittany');

greetRandy.speak();
greetBrittany.speak();

GreetMe.prototype.sayGoodbye = function() {
    console.log('Goodbye ' + this.name);
    console.log(this);
};

greetRandy.sayGoodbye();
greetBrittany.sayGoodbye();
// Principle 4

// code example for Explicit Binding

greetRandy.sayGoodbye.call(greetBrittany);
greetBrittany.sayGoodbye.apply(greetRandy);
