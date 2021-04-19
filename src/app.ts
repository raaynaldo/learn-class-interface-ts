interface Named {
  readonly name: string;
}

//interface can inherit from another interface by put comma.
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;
user1 = new Person('Max');
user1.greet('Hello!');
// user1 = {
//   name: 'Max',
//   age: 24,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };
