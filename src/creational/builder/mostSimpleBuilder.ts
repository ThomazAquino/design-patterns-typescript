export class Person {
  constructor(
    public name?: string,
    public age?: number
  ) {}
}

export class PersonBuilder {
  private person = new Person();

  newPerson(): void {
    this.person = new Person();
  }

  setName(name: string): this {
    this.person.name = name;
    return this;
  }

  setAge(age: number): this {
    this.person.age = age;
    return this;
  }

  get result(): Person {
    return this.person;
  }
}

const personBuilder = new PersonBuilder();
const person1 = personBuilder.setName('Luiz').result;
personBuilder.newPerson();
const person2 = personBuilder.setName('Maria').setAge(22).result;

console.log(person1);
console.log(person2);