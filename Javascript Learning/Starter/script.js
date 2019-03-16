// Function Constructor

/*

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

*/

//PART 2
//Object.create method is another way to create objects and have other objects inherit them.

// Things work a bit different with the Object.create method
/* First we define an "Object" that will act as the "Prototype" Then Two create the "New Object" that is based on that very "Prototype".

The previous example will be used in this example.

We will call this object that will act as the Prototype "PersonProto"

Pay attention here as we no longer use the Captial letter like we did in the function constructor.
*/

//THis is simply a different way of object inheritance (class) of (objects) like in Object oriented programming.  This is the "Object.create" way.
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};
//Now lets create john again in () is the object we define to be object prototype. which will be person proto
var john = Object.create(personProto);
//Now lets view it in the console. now just type john
//You can view the object in the console and see how it inherited the calculate age function

//We will now fill in the yearOfBirth prototype with a value.
john.name = 'John';
john.yearOfBirth = 1980;
john.job = 'Teacher';
//now when we type john in the console you will see all the properties of the object.  However, how we defined the properties later was not ideal.  The "object.create" option offers a 2nd parameter.

var jane = Object.create(personProto, 
{
    //This looks a bit strange but this is how it works.
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
});
//now if you type jane you will see the properties and the function from personProto Object.create that the objects inherited.

//Object.create inherits the prototype directly from the argument we passed into the first argument In this case "personProto".  
//Function Constructor, the newly created object inherits directly from the function constructor's prototype property.

//Object.create has its benefits as it allows us to directly select which will be the prototype

/*
Function Constructors and Object.Create are the two most common types of ways to create objects that you will find on the web.  

But, the most popular way is still function constructor.     

//MOVE TO SCRIPT2.JS

/*
I added sc to the if correct and if false and added a string to mention the score

if there is an issues think "why is this happening.

*/

