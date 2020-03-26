
// **************************** 
// *** Declaring a variable ***
// ****************************
// When you declare a variable, you're telling your computer to reserve some bits in 
// memory to hold a value of your choice.
//
// In Javascript, you declare a variable with var, let, or const. 
// You can give your variable any name, so long as it starts with a letter.
// You can only declare a variable once!

var myVariable;
let myOtherVariable; // <-- You should usually use "let" over the other options
const myVarThatCantChange;

// *******************************************
// *** Instantiating/assigning a variable  ***
// *******************************************
// Whereas declaring a variable reserves bits in memory, instantiating (aka assigning) the variable will
// write a value to those bits.
//
// In Javascript, you instantiate the variable in the same line that you declare by using "=". 
// Optionally, you can hold off the instantiations until later in your code.

let myFirstNumber = 4;
let myFirstBoolean;
myFirstBoolean = true; // <-- notice the lack of "let" on this line. myFirstBoolean was declared in the line above.



// ********************************
// *** Value ***
// ********************************
// A value is a group of bits that represent some real-life concept.
//
// In Javascript, your values can be Numbers, Strings, Booleans, Arrays, and much more!

let myNumber = 5;
let myBoolean = false;
let myString = "look at me, I'm a string!";
let myArray = [4, 3, false, 'hi'];

// ********************************
// *** Operator   ***
// ********************************
// An operator takes two values and combines them to create an output. Just like in Math! 
// Plus, minus, divide, and multiply are all operators

5 + 3; // These are your standard number operators
9 - 1;
4 / 2;
2 * 9;

true && false; // the "and" operator for Booleans. This expression evaluates to "false"
true || false; // the "or" operator for Booleans. This expression evaluates to "true"
true === false; // the "is equal to" operator. This expression evaluates to "false"

"my name is " + "Adam."; // When used with strings, "+" will smush strings together. 

// ********************************
// *** Expression   ***
// ********************************
// An expression is a combination of values and operators. All of the operators get evaluated
// one-by-one according to the Order of Operations (remember PEMDAS?) until one final value is outputted.
//
// When you write an expression after a variable declaration, javascript will evaluate the whole expression 
// before writing the value to your variable 

let myExpression = (2 + 3) / 1;
let myComplexExpression = (9 / (1 + 2)) + "!"; // evaluates to "3!"

let combo = myExpression + myComplexExpression; // you can even use other variables in your expressions
// "combo" now holds the value "53!"