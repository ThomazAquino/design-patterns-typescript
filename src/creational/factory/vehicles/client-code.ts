import { CarFactory } from "./factories";
import { BicycleFactory } from "./factories";
import { randomCar, randomNumbers } from './random-vehicle';

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();

const fusca = carFactory.createVehicle('Fusca');
const bmx = bicycleFactory.createVehicle('BMX');


fusca.pickUp('Someone');
fusca.stop()
bmx.pickUp('Another one');
bmx.stop();

console.log('=========================================================');

const customerNames = ['Ana','Maria','Joao','Thomaz',]

for (let i = 0; i < 10; i++) {
  const vehicle = randomCar();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  console.log('*****')

}

