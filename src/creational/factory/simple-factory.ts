type Car = { model: string; motor: string};
type CarPrototype = { showDetails(): void };

const carPrototype: CarPrototype = {
  showDetails(): void {
    console.log(this);
  }
};
// End of protocols.


const carFactory = (model: string, motor: string): Car & CarPrototype => {
  // Closure
  const idAsAPrivateMember = Math.floor(Math.random() * 1000);
  const carObj = Object.create(carPrototype);
  return Object.assign(carObj, {id: idAsAPrivateMember, model, motor});
}

const car1 = carFactory('Fusca', 'V8');
car1.showDetails(); // { id: 878, mode: 'Fusca', motor: 'V8' }


/******************************************************************** */


interface Product {
  sayHi(): void;
}

class ConcreteProduct implements Product {
  sayHi(): void { console.log('Hi')}
}

abstract class Creator {
  abstract factoryMethod(): Product;

  createAndShow(): void {
    const product = this.factoryMethod();
    console.log(product);
  }
}

class concreteCreator extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct();
  }
}

const creator = new concreteCreator();
const product = creator.factoryMethod();
product.sayHi();
creator.createAndShow();