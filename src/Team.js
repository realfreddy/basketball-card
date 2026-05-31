export class Team {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
  displayInfo() {
    return `${this.name} , ${this.city}`;
  }
}
