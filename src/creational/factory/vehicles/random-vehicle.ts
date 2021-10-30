import { BicycleFactory, CarFactory } from './factories';
import { Vehicle } from './vehicles';


export function randomCar(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.createVehicle('Fusca Azul');
  const car2 = carFactory.createVehicle('Celta verde');
  const bicycle1 = carFactory.createVehicle('BMX');
  const cars = [car1, car2, bicycle1];
  return cars[randomNumbers(cars.length)];
}




export function randomNumbers(length: number): number {
  return Math.floor(Math.random() * length);
}