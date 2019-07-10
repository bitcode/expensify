// creats a class contructor
class Person {
  // cunstructor for name instance
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // method to say Hi!
  getGreeting() {
    return `Hi, I'm ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // refers to the parent class
    this.major = major;
  }
  hasMajor() {
    return !!this.major; // returns true or false if Student has major property
  }
  getDescription() {
    let description = super.getDescirption(); // super integrates the parents method

    // checking if user has major
    if (this.hasMajor()) {
      description += `Their major is ${this.major}`;
    }
    return description; // call return to export the value from this scope
  }
}

// exersice, create a extended Person class 'traveler'
// add support for homeLocation
// override getGreeting
// if condition if homeLocation, call super method Hello I'm... visiting from homeLocation
// else Hello I'm name
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

// creates a new person and uses name and greets from the new name and the method
const me = new Traveler("Bitcode", 37, "Computer Science");
console.log(me.getDescription()); // checks if me Student has major from the Student method

// cretes a new kperson and lunches the greetings method from class Person
const other = new Traveler("Socrates", 79);
console.log(other.getDescription()); // checks if other Person has major

const otherOne = new Traveler("Space Man", 345, "Alpha Centuri");
console.log(otherOne.getGreeting());
