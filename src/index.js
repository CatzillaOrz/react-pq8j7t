//ES6

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGretting() {
    return `Hi! I am ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person("Andrew Smith");
console.log(me.getGretting());
console.log(me.getGretting());
