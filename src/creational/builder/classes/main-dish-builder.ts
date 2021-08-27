import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Meat, Rice, Beverage, Dessert } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  
  private _meals: MealBox = new MealBox();
  
  makeMeal(): this {
    const rice = new Rice('Rice', 5);
    const beans = new Beans('Beans', 10);
    const meat = new Meat('Meat', 20);
    this._meals.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Beverage', 20);
    this._meals.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Dessert', 20);
    this._meals.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meals;
  }

  getPrice(): number {
    return this._meals.getPrice();
  }

  reset(): this {
    this._meals = new MealBox();
    return this;
  }
}

// without builder
const rice = new Rice('Arroz', 5);
const beans = new Beans('Beans', 10);
const meat = new Meat('Meat', 20);
const mealBox = new MealBox();
mealBox.add(rice, beans, meat);
console.log(mealBox.getPrice())


// With Builder
const mainDishBuilder = new MainDishBuilder();
const dish1 = mainDishBuilder.makeBeverage().makeMeal().getPrice()
console.log(dish1);

mainDishBuilder.reset();

const dish2 = mainDishBuilder.makeBeverage().getPrice()
console.log(dish2)
