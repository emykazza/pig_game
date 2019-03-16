/*
//Function constructor

var Car = function(make, year, name) {
    this.make = make;
    this.year = year;
    this.name = name;
    this.calculateAge = function() {
            console.log(2019 - this.year);
    }
};

var auto = new Car('subaru', 1999, 'impreza');
auto.calculateAge();
var auto2 = new Car('chevrolet', 1996, 'corvette');
var auto3 = new Car('dodge', 2015, 'durrango');
auto2.calculateAge();
auto3.calculateAge();

*/
//Object.create

/*
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var fred = Object.create(personProto, {
    name: { value: 'Fred' },
    yearOfBirth: { value: 1970},
    lastName: { value: 'Smith'}
});
//had issues remembering syntax for this

john.calculateAge();
*/

//function constructor


/*
var Person = function(name, lastName, yearOfBirth) {
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.age = function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = new Person('John', 'Smith', 1980);
var chris = new Person('Chris', 'Man', 1977);
john.age();
chris.age();

//function constructor = defines the object framework including any associated methods as prototypes.  You will later create new objects which will be the objects using the specified framework.

//Object.Create you define what prototypes (shared resources) should be like methods that your new objects will share.  when you create the new objects you will define new object specific properties that are not shared.

*/

//primitive variable each stores its variable data a holds value as data. vs objects which hold a reference to the data itself.  If this was a reference B would equal 30 as well.
/*
var a = 50;
var b = a;
a = 30;
console.log(a);
console.log(b);
*/
//object variables reference the data but dont' hold the data themselves they reference it

/*
var obj1 = {
    name: 'John',
    age: 30
};
var obj2 = obj1;
obj1.age = 27;
console.log(obj1.age);
console.log(obj2.age);
*/

//obj2 doesn't have its own data it just references the data in obj1.  so they will both present the same age 27 because obj2 references obj1 which is the same data

//functions work the exact same way they reference the same data
/*
var age = 30;
var obj = {
    name: 'Dan',
    city: 'Seattle'
};

function change(a, b) {
    a = 46;
    b.city = 'Bethesda'
};
change(age, obj);

console.log(age);
console.log(obj.city);
*/

//this will work same way and give 30 because the primitive data has its own copy within the function chain.  

//The age outside and age inside the function are two different sets of data.  the city is merely a reference to the same data which is why it changes.


//PRACTICE FUNCTIONS AS ARGUMENTS
/*
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

function ofAge(el) {
    return (el >= 18);
}

function canRentCar(arr) {
    if (arr >= 25) {
        return arr;
    } else {
        return -1;
    }
}

function heartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}
var ages = arrCalc(years, ageCalc);
var smoking = arrCalc(ages, ofAge);
var rentcar = arrCalc(ages, canRentCar);
var heartrate = arrCalc(ages, heartRate);
console.log(ages);
console.log(smoking);
console.log(rentcar);
console.log(heartrate);
*/

// PRACTICE FUNCTIONS RETURNING FUNCTIONS

function interviewQuestion(job) {
    if (job == 'programmer') {
        return function(name){
            console.log(name + ', writes code and makes applications.');
        }
    } else if (job == 'teacher') {
        return function(name) {
            console.log(name + ', teaches students.');
        } 
    } else {
        return function(name) {
            console.log(name + ', does something else.');
        }
    }
}

console.log(5 === '5');
//false (strict equvilancy no type coersion)
console.log(5 == '5'); 
//true (type coersion)
console.log(5 !== '5');
//true because number and string are not the same
console.log(5 != '5');
//false coerses the type so they are they same.

var programmer = interviewQuestion('programmer');
programmer('John');
programmer('chris');
var teacher = interviewQuestion('teacher');
teacher('John');
teacher('chris');
var other = interviewQuestion('Fireman');
other('John');
other('Chris');
interviewQuestion('teacher')('Jack');

//BIND APPLY CALL

var john = {
    name: 'John',
    age: '27',
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.  Have a nice ' + timeOfDay);
            
    } 
    
}
};

var jane = {
    name: 'Jane',
    age: '35',
    job: 'teacher',
};

john.presentation('formal', 'afternoon');
john.presentation.call(jane, 'friendly', 'morning');
//CALL lets us set the this variable and borrow it for use with the jane object.

/*
//APPLY is used for arrays.
john.presentation.apply(jane, ['friendly', 'formal'], 'afternoon');
//however our method doesn't expect an array
*/

/*BIND generates a copy of the function so we can store it somewhere.  This can be extremely useful to create functions with preset arguments.
Remember the bind method will return a function and when you return a function you need to store it somewhere like in a variable.
*/
var johnFriendly = john.presentation.bind(john, 'friendly');
//the bind method returns a function which is stored in the 'johnFriendly' variable.

//Now only 1 argument remains which we will set.
johnFriendly('morning');
//THis is "carrying" creating a function with preset parameters that is based on another function.
johnFriendly('night');

var janeFormal = john.presentation.bind(jane, 'formal');
janeFormal('afternoon');
