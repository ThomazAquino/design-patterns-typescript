import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Meat, Rice, Beverage, Dessert } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  
  private _meal: MealBox = new MealBox();
  
  makeMeal(): this {
    const rice = new Rice('Rice', 5);
    const beans = new Beans('Beans', 10);
    this._meal.add(rice, beans);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Beverage', 20);
    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Dessert', 20);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }

  reset(): this {
    this._meal = new MealBox();
    return this;
  }
}
