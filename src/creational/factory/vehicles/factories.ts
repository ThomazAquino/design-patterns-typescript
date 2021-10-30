import { Bicycle, Car, Vehicle } from "./vehicles";

export abstract class VehicleFactory {
  abstract createVehicle(vehicleName: string): Vehicle;

  createAndPickup(customerName: string, vehicleName: string): Vehicle {
    const car = this.createVehicle(vehicleName);
    car.pickUp(customerName);
    return car;
  }
}

export class CarFactory extends VehicleFactory {
  createVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}

export class BicycleFactory extends VehicleFactory {
  createVehicle(vehicleName: string): Bicycle {
    return new Bicycle(vehicleName);
  }
}