class Person {
  firstName!: string;
  lastName!: string;
  age!: number;
  interestedIn!: string;
  alive!: boolean;
  childrenCounter!: number;
  money!: number;
  identifier!: string;

  constructor(data: any) {
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.age = data.age;
    this.interestedIn = data.interested_in;
    this.alive = data.alive;
    this.childrenCounter = data.children_counter;
    this.money = data.money;
    this.identifier = data.id;
  }
}

export { Person };
