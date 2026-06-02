export class Team {
  constructor(name, city) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.city = city;
  }
  displayInfo() {
    return `${this.name} , ${this.city}`;
  }
}
