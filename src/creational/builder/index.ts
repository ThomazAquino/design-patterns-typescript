import { Beans, Meat, Rice } from "./classes/meals";
import { MealBox } from './classes/meal-box';
import { MainDishBuilder } from "./classes/main-dish-builder";

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

/** It still can be improve with the creation of the Director class.
 * this class will deal with the construct part like makeBeverage().makeMeal()
 * making the client (this file) only call the director.
 */
