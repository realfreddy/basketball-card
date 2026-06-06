export class Team {
  constructor(name, city) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.city = city;
    this.players = [];
  }
  displayInfo() {
    return `${this.name} ${this.city}`;
  }
}
