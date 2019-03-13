//CLOSURES
//wE WANT TO RIGHT A FUNCTION THAT CALCULATES HOW MANY YEARS LEFT UNTIL RETIREMENT.

function retirement(retirementAge) {
    //this function returns a funtions that computes how many years left.
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
        //a is a string declared above.
    }
}
//as you know this returns a function so we can store this is a variable.

//this variable will allow us to create multiple retirement ages based on country.

var retirementUs = retirement(66);
retirementUs(1990);

//retirement(66)(1990);
//This will give us the same result.

//The inner function has access to the outer functions variables even after it has returned.  

//CLOSURE SUMMARY
//An inner function has always access to the variables and parameters of its outer function even after the outer function has returned.

//when the argument of yearOfbirth is passed in a new execution context of the inner function is added.

//the execution context may have stopped but the scope chain still has access to the retirement() functions variables.  Now when the inner function is called the scope chain stays intact.  The inner function still has access to outer functions variables "they are held up" "THe inner function CLOSES IN on the outer functions" variables.  SCOPE CHAIN=Pointer to variable objects. (its written lixically and has access to other variables)

//!! - closures are built into JavaScript automatically.

//application of closures would be for this given code.  creation of different country variables to access the function and pass in different ages and retirement ages based on country.  

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUs(1984);
retirementIceland(1990)

//rewrite the interview question code using the closures

//This was written myself based on what teacher taught.  The variables and strings of text are stored in outer function, which the inner function closes in on and has access to.
/*
function interviewQuestion(job) {
    var a = ', designs sites';
    var b = ', teaches children';
    var c = ', does something else';
    if (job === 'designer') {
        return function (name) {
            console.log(name + a);
        }
        //teachers code
        
        
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + b);
        } 
    } else {
        return function (name) {
            console.log(name + c);
        }
    }
};

var designer = interviewQuestion('designer');
var teacher = interviewQuestion('teacher');
var somethingElse = interviewQuestion('fireman');
designer('john');
teacher('Chris');
somethingElse('Mark');
*/

//teachers code
function interviewQuestion2(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', what is web design?');
    } else if (job === 'teacher') {
        console.log(name + ', describe the subject you teach'); 
    } else {
        console.log(name + ', describe what you do');
        }
    }
}
interviewQuestion2('teacher')('John');
//What the difference is the desicion is taken right inside the function in which we returned.  We took the Job variable to make the decision in side the return function even after the interviewQuestion2 has returned.

//TO UNDERSTAND THE DIFFERENCE
//1. first way the decision was done by the outer function (if else statments from within the outer function).

//2. now with closures the decision is made from the inner function.  the only thing the outer function holds up is the JOB variable.
    
//USING CLOSURES MAKES OUR CODE ALOT CLEANER.

//the inner function will close in on the variable we defined in the outer function in this case the "job".  the inner function can use the outer function even after the outer function is closed.  THe scoping chain keeps these variables for later use.  This is what is means when the inner function closes in on the outer functions variables.



//BIND CALL AND APPLY
//These are powerfull methods that all functions inherit.
//These methods allow us to call the functions, set the this variable manually.

//to show we will create a very simple object.  No fancy function constructors or inheritance

//just var and the object literal syntax
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    //we will now create a method for john to present himself.
    //We will have two styles of presenting himself.
    //this method will have a sentence in which he presents himself.
    //this will also be dependent on the time of day
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', LADIES AND GENTLEMAN! I\'m ' + this.name + ', I\'m a ' + this.job + ',and I\'m ' + this.age + ' years old');
        } else if (style === 'friendly') {
            console.log('Hey! Whats up? I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.  Have a nice ' + timeOfDay + '.');
        }
    }

};

var emily = {
    name: 'Emily',
    age: '35',
    job: 'designer'
};

//testing it
john.presentation('formal', 'morning');


//Emily does not have the presentation method in her object.  We can use the call method to borrow the method from john object.  Use the "call" Method and set the "this variable which will look like the first argument.
john.presentation.call(emily, 'friendly', 'afternoon');
//notice "call' Method, then 'emily' for setting the "this variable".
//THIS IS CALLED METHOD BORROWING.
//The CALL method allows us to set the 'THIS' variable.  

//APPLY Method accepts the arguments as an array.
//john.presentation.apply(emily, ['friendly', 'afternoon']);
//to accept an array the method must be prepared for it as this wont' work with our code.


//BIND Method
//very similar to call allows us to set this variable.  Bind creates a copy of method so we can store it somewhere. IT DOESN"T IMMEDIATLY CALL IT.
//This can be useful set set a function with preset arguments.

//because bind will return a copy of a function we will need to store that somewhere and that is inside a variable.
var johnFriendly = john.presentation.bind(john, 'friendly', )   //style set but not timeOfDay yet.
//REMEMBER THIS "BIND" METHOD RETURNS A FUNCTION AND IT WILL BE STORED IN THE JOHNFRIENDLY VARIABLE.
//Now when we call it there is only one argument to set like follows.
johnFriendly('morning');
//so we have a function now that is always for the friendly version and we can use it further.
johnFriendly('Night');
//BIND allows us to preset some arguments.
//BIND allows us to copy create a copy of a method and store it inside a variable.  
//This is also called "carrying" which is when we create a function that is a copy of another function but with some preset parameters.  Which is exactly what we just did.

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

//we will now take old code we wrote before and use these methods we learned to improve it
var years = [1936, 1939, 1946, 1967, 1977, 1980, 1984, 1985, 1987, 1990, 1992, 1999, 2001, 2003];
function arrCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function ageCalc(el) {
  return 2019 - el; 
}

//instead of 18 we use limit which we will later define on per country basis
function ofAge(limit, el) {
    return (el >= limit);
    
}

var ages = arrCalc(years, ageCalc);
//notice that we have two arguments for ofAge and our arrCalc only accepts 1 argument on line 172.  THe best thing to do would be to pass in our modified ofAge but with the limit already preset.  Bind will allow us to create a copy of a function with a preset argument
var fullJapan = arrCalc(ages, ofAge.bind(this, 20));
//now a copy of the isFullAge will be enterin as an argument but not the function itself "ONLY A COPY WITH 20 AS THE PRESET ARGUMENT"
//this is the element that will be judged in array
//Limit is whats being bound (copied) in effort to use it with another function which is stored in the fullJapan variable.  
console.log(ages);
console.log(fullJapan);

