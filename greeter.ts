// In its own file, create a class named Greeter. This is the parent class.
// Properties:
// greeting (a string)
// Methods:
// constructor: Sets the greeting property from a parameter.
// greet: Has a string parameter called name. It returns the composed greeting based on the greeting property and name parameter. Use this format: "{greeting}, {name}!".
// Jest Tests: Test with different greetings and names.

//blue print
class Greeter {
  constructor(greeting: string) {
    this.greeting = greeting;
  }
  greeting: string;

  greet(name: string) {
    return `${this.greeting}, ${name}!`;
  }
}

// //example
// let tom: Greeter = new Greeter("hello");
// console.log(tom);
// console.log(tom.greeting);
// console.log(tom.greet("bob"));

// //example
// let bob: Greeter = new Greeter("yo");
// console.log(bob);
// console.log(bob.greeting);
// console.log(bob.greet("tom"));
