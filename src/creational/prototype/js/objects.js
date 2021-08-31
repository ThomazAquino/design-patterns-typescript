const person = {
  firstName: 'Some',
  lastName: 'Test',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const anotherPerson = Object.create(person);
console.log(person.firstName);

/**************************************** */

class AbstractMeal {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class Rice extends AbstractMeal {
  flavor;

  constructor(name,price,flavor) {
      super(name,price)
      this.flavor = flavor;
  }
}

let test = new Rice('Some Rice name', 20, 'Vanilla');

console.log(     '\n',
  test,          '\n',
  test.name,     '\n',
  test.flavor,   '\n',
  test.__proto__,'\n',
)

