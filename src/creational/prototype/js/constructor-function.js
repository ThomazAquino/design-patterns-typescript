function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const defaultPerson = {
  firstName: 'Default name',
  lastName: 'Default lastName',
  age: 0,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

Person.prototype = Object.create(defaultPerson);


const person1 = new Person('Thomaz', 'DAquino', 28);
console.log(person1.fullName());

// Person.prototype.constructor = Person;
console.log('***********************************');


function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);

  this.fromSubClass = 'Test';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person2 = new SubPerson('Jhon', 'Doe', 20);

console.log(person2);
console.log(person2.fullName());


