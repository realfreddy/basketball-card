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
  displayName() {
    return `${this.name}`;
  }
  displayHeight() {
    return `${this.height}`;
  }
  displayPos() {
    return `${this.position}`;
  }
  displayPts() {
    return `${this.points}`;
  }
  displayRebs() {
    return `${this.rebounds}`;
  }
  displayAst() {
    return `${this.assists}`;
  }
}
