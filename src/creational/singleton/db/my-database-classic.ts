import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;

  private users: User[] = [];

  /* Constructor is provate so no can make "new MyDatabaseClassic" */
  private constructor() {}

  public static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  public add(user: User): void {
    this.users.push(user);
  }

  public remove(index: number): void {
    this.users.splice(index, 1);
  }

  public show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

// Test if the instance is the same. "new MyDatabaseClassic()" should not be allowed.
const db1 = MyDatabaseClassic.instance;
const db2 = MyDatabaseClassic.instance;
console.log(db1 === db2 ? '✔️ The instances are the same. \n' : '❌ Error.');


