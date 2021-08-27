import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

// Composite class it have other instances inside.
export class MealBox implements MealCompositeProtocol {

  // All Meals inside this array need to implements MealCompositeProtocol.
  private readonly _children: MealCompositeProtocol[] = [];
  
  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0)
  }

  public add(...meal: MealCompositeProtocol[]): void {
    meal.forEach(meal => this._children.push(meal));
  }

}