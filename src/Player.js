export class Player {
  constructor(name, height, position, points, rebounds, assists) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.height = height;
    this.position = position;
    this.points = points;
    this.rebounds = rebounds;
    this.assists = assists;
  }
}
