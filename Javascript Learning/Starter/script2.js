//Primitives vs objects
/*
variables containing primitives boolean strings number those values are contained in the variable itself.

variables associated with objects, do nto actually contain the object.  Instead they contain a reference to the place in memory where the object sits or the object is stored. 
    A variable containing an object does that have a copy of that object only a reference point to where the object is(It just points to that object)
*/

//PRIMITIVES

//defining a few primitives
var a = 23;
var b = a;  //now b is also 23.
a = 46;     //changing its value.
console.log(a);
console.log(b);
//expected results a is 46 and b is 23 because a was changed but b was not.
//we simply copied the value of a to b.  When we changed a its value was changed so its copy was changed.

//This means each primitive variable has its own copy of its data.  THEY DO NOT REFERENCE ANYTHING.
//two variables holding primitives are really just 2 different things.

//OBJECTS
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
//Both results will show 30 this is because when we said obj2 should = obj1 a copy was not created just a reference point.

/*
SEQUENCE OF EVENTS
1. obj1 is created.
2. we say obj2 is same as obj1 a refernce point is put in but no obj2 is actually created just a "reference point".
3. We change obj1's age to 30.
4. we console log the age of obj1 and the obj2.  Because obj2 is simply referencing obj1 they both result in the same age being displayed.

! - With functions it works the exact same way.
*/

//FUNCTIONS
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
//this function will mutate the data.
}

change(age, obj);

console.log(age);
console.log(obj.city);

/*
this will present

27
San Fransicso

this is because the function has a copy of the primitive variable.  As the pimitive value is passed into the function. And, why the age on the outside of the function stays the same.  But when we pass the object (not really object itself just a reference) it is still reflected outside of the function.

//If you dont pay attention to this it can lead to bugs and unforseen consequences
*/

//FIRST CLASS FUNCTIONS: PASSING FUNCTIONS IN AS ARGUMENTS.
//Funtions are also objects in javascript

/*

//A function is an instance of the object type.
//because of that
//A function behaves like any other object.
//We can store functions in a variable.
//We can pass a function as an argument to another function.
//We can return a function from a function.

//Because of this in javascript we say we have first class functions

//Passing functions in as arguments.
var years = [1990, 1965, 1937, 2005, 1998];
//We will write a function that will recieve and array and return a new result array and do the calculations based on a function that we pass into the calculation function.
function arrayCalc(arr, fn) {
    //fn does the calculation
    
    //we will loop over the array and return a result
    
    //We create a result array that will store results
    
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        //here is where fn argument will go that calculates.
        //it will store the result of calling our fn function
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
    
}



//here is the function we will use later as fn function
//These are called callback fuctions because they are functions that we pass into functions that will then call them later.  FN will be called when we want to put a new element into our array
function calculateAge(el) {
    return 2016 - el;
    //it receives the el argument and returns the age.
}

//arrayCalc(years, calculateAge);
//calculateAge does not have () because we are not calling it immediatly.  We want out fuction to callback function it.

//We should then define it as a variable that way we can see it.
/*
var ages = arrayCalc(years, calculateAge);
console.log(ages);
*/

//Lets now add to this
/*
function isFullAge(el) {
    return el >= 18;
    //comparison operator(True or False) if element is greater than or equal to 18.
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge); 
//passes results of ages in as argument array which is the age of each person
//it then loops the ages and calculates if the person it over 18 or not by true or false values (the i is used as an argument for "isFullAge" which was the results of the ages variable)

//another example with Max heart rate

function maxHeartRate(el) {
    //run only if between 18 to 81
    if (el >= 18 && el <= 81){
          return Math.round(206.9 - (0.67 * el));
//we want a value thats an integer not decimal use math round 
        
    } else {
        return -1;
    }
    
}
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
/*
//Writing our functions and code this way creates more "Modular Code" which makes it easier to read and understand.
*/
//FIRST CLASS FUNCTIONS: FUNCTIONS RETURNING FUNCTIONS

function interviewQuestion(job) {
//accepts a string that is a job
//Will return a different function based upon different job
    if (job === 'designer') {
        return function(name) {
            //this is an annonymous function if you remember.
            //this is returned if job is designer
            console.log(name + ', can you please explain what ux design is?');
        } 
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ' what subject to you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello,' + name + 'what do you do?')
        }
    }
}
//this function does not only return a value but it also returns an entire function.  and returns an entire function that we can then use later.  THis is possible because functions are always first class functions because/ they are effectively objects.  Notice for the "returns" we are essentially returnning an object that just happens to be a function.  

//and remember this returns a function so we have to store the result somewhere.  in this case a variable.

var teacherQuestion = interviewQuestion('teacher');
//this variable "teacherQuestion" will now be for the "teacher function" under lines 168 to 170

teacherQuestion('John');
//we are now calling this variable here which is a function and input name into it.
//we input john here because the function on 168 to 170 accepts a "name as input"

//this will log John what subject do you teach.

//this way we can configure one generic function which is interview question and input specific functions based on that generic function.  in this case its this teachQuestion or the function expression which produces questions for teachers.

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');

//We now created more specific question functions "teacherQuestion" function and "designerQUestion" function based on our more generic function which is the interview question.

//notice how this can be used as many times as we want for other people
designerQuestion('Jane');
designerQuestion('Mike');
designerQuestion('mark');

//We could have done this in another way too.
interviewQuestion('teacher');   //this will return the teacher function.
//We dont need to store it in a variable we could even just call it right away
interviewQuestion('teacher')('Mark');
//THis looks a bit strange but its evaluated from left to right.  Once it returns the function and expects input argument for the return function "Mark" is used and a result is given

//PRACTICE ALL OF THE FIRST CLASS FUNCTIONS BEFORE CONTINUEING.

//IMMEDIATLY INVOKED FUNCTION EXPRESSIONS
//imagine we have a game where you need to guess a score but you cannot access the score as that would be cheating.  Here you should put the score inside a function as the score inside the function cannot be accessed from outside that function.

//because, the scoping chain only works backwards as the variables inside the function have access to the DOM but not the other way around.

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//If the purpose is to hide the variable then you should use an IIFE function

(function (){
       var score = Math.random() * 10;
    console.log(score >= 5);
})();
//it is invoked with the call at the end ().

//a function declaration starts with "function NAME ()
//We trick the parser into thinking we have an expression so we start with (function () )
//THis makes the parser think we have a expression and NOT a declaration.
//THe way to make it this is to wrap the entire thing in parenthesis.
//In Javascript whats in parenthesis CANNOT be a statement.

//IT needs to be called at the end() otherwise it wouldn't do anything as its not a variable.

//If we try to console.log the score it will fail as it will say score is not defined because the scope chain the dom doesn't have access to it.

//IIFI continued - You can also pass argument into the IIFI.
(function (goodLuck){
       var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

//It is only called once but thats not the point.
//IIFI's are used to hide the code from the outside.
//THis ultimatly gives us data privacy.