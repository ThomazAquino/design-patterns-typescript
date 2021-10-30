export interface Vehicle {
  pickUp(customerName: string): void;
  stop(): void;
}

export class Car implements Vehicle {
  constructor (private carName: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.carName} está buscando ${customerName}`);
  }

  stop(): void {
    console.log(`${this.carName} parou`);
  }
}

export class Bicycle implements Vehicle {
  constructor (private bicycleName: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.bicycleName} está buscando ${customerName}`);
  }

  stop(): void {
    console.log(`${this.bicycleName} parou`);

  }
}