// Function Constructor

//THis is an object literal which is an object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//Now for the Function Constructor

//function constructors always have capital letter.
var Person = function(name, yearOfBirth, job) {
    //Now attaching the variables to the this variable of this object's execution context.
    this.name = name;//This is the parameter of the function.
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

//Now lets use it to create a john object
var john = new Person('John', 1984, 'teacher');
//When we use the 'new' operater first, a brand new "empty" object is created.  THen, the function with the parameters we specified is called.  As we know when a function is called a new Execution context is created that also has a This Variable. So when when new is specified its really pointing to the prototype as specified in Person.  That is why THIS appears first to specified we are now in a new object.
//IN SHORT, The This variable in the function constructor is pointing to the parameter of the NEW object.

//Now the new object john has the propties we defined


//We will now add inheritance by created a method in the function constructor
//After adding the method we are now trying it out.

var jane = new Person('John', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

//THis method is best as this way if we have 20 functions we only have 20 methods inside the function constructor that each object calls on when it needs.

//You can also add the function this way and remove it from the function constructor.
Person.prototype.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
    };
Person.prototype.lastName = 'Smith';

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

//But, the calculateAge function could have been in the function constructor as well as we first did.

//The same can be done with properties as well.  goto line 40  now log it
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

//Now each of the objects has access to the lastName property because its in the prototype property of the "function constructor.  All, John, Jane, and Mark inherit this property.