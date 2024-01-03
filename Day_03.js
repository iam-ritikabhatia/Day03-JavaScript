// Basic Operator(+ is add, - is subtract, ** is power, /is divide, % is means remainder which is left after dividing)
// #1
console.log((2+2), (2-2), (2**3), (2*2), (2/2), (2%2));


// #2
console.log( (3) + (5) * (3) -(3))

// #3 it's not a good quality code
console.log(3+3*5-3)

// #4 coercion 

 console.log(("2")+ (1)+ (2)) //in this we have a string first so everything is treated like a string

// #5
console.log((1) + (2) + ("5")) //here first we have a numbers 1 + 2 = 3 & then string so 3 + "5" = 35

// #6
console.log((1) + (2) + (Number("2"))) //here we have a number so 1 + 2 = 3 & then string is converted into number then 3 + 2 = 5

// #7
 console.log(  (1) + (2) + (Number("Years Old")))  //output is NaN because number("years old") will be NaN

// #8
console.log(typeof ((1) + (2) + (Number("Year Old")) )) //output is a Number


// #9 Increment Operator (Prefix, Postfix)

let counter = 100;
let updatedCounter = ++counter;
console.log(updatedCounter, counter)

// #10

let timeCounter = 100;
let updatedTimeCounter = ++timeCounter;
console.log("Output in Prefix Condition", updatedTimeCounter, timeCounter)

// #11
let gameCounter = 100;
let updatedGameCounter = gameCounter++;
console.log("output is Prefix Condition", updatedGameCounter, gameCounter)

// #12 ( in this situation we got an error because we are updating a constant  that's why the error is (assignment to constant error)).

const taskTime = "5 PM"
let newTaskTimePrefix = ++taskTime
console.log(newTaskTimePrefix, taskTime)

// #13 (in this situation we got an error because we are updating a constant that's why the error is (assignment to constant error)).
const taskTime = "5 PM"
let newTaskTimePostFix = taskTime++
console.log(newTaskTimePostFix, taskTime)

// #14 (Comparision)

let a = 3;
let b = 4;
console.table([(a>b), (a<b), (a==b), (a>=b), (a<=b), (a!=b)])

// #15

let firstName = "Tina"
let parentName = "Ritika"
let lastName = "Bhatia"
console.log(firstName < parentName)
console.log(parentName == lastName)

// #16
let myName = Number("Ritika")
let myAge = "489247"
console.table([myName > myAge])


