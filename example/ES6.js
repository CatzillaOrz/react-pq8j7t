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

class Student extends Person {
  constructor(name, age, major = "CS") {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  //over write
  getDescription() {
    const desc = super.getDescription();
    if (this.hasMajor) {
      return `${desc} My major is ${this.major}`;
    }
    return `${desc} . I am a student.`;
  }
}

const me = new Person("Andrew Smith");
console.log(me.getGretting());
console.log(me.getGretting());

const meStu = new Student("Andrew Smith", 26, "Computer Science");
console.log(meStu.getGretting());
