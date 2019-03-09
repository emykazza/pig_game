var Car = function(make, year, name) {
    this.make = make;
    this.year = year;
    this.name = name;
    this.calculateAge = function() {
            console.log(2019 - this.year);
    }
}

var auto = new Car('subaru', 1999, 'impreza');
auto.calculateAge();
var auto2 = new Car('chevrolet', 1996, 'corvette');
var auto3 = new Car('dodge', 2015, 'durrango');
auto2.calculateAge();
auto3.calculateAge();
