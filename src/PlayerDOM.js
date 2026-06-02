import { Player } from "./Player.js";
const form = document.getElementById("modal-form");
const playerName = document.getElementById("player-name");
const playerHeight = document.getElementById("player-height");
const playerPos = document.getElementById("player-position");
const playerPoints = document.getElementById("player-points");
const playerRebs = document.getElementById("player-rebounds");
const playerAssists = document.getElementById("player-assists");
const submitPlayer = document.getElementById("create-player-button");
const players = [];
const cardContainer = document.getElementById("card-container");
export function addPlayerCard() {
  submitPlayer.addEventListener("click", (event) => {
    event.preventDefault();
    const name = playerName.value;
    const height = playerHeight.value;
    const pos = playerPos.value;
    const points = playerPoints.value;
    const rebs = playerRebs.value;
    const assists = playerAssists.value;
    const playerCard = new Player(name, height, pos, points, rebs, assists);
    players.push(playerCard);
    displayPlayers();
  });
}

export function displayPlayers() {
  cardContainer.innerHTML = "";
  players.forEach((player) => {
    const card = document.createElement("div");
    card.className = "bg-surface border border-border rounded-xl p-5 w-full";

    const header = document.createElement("div");
    header.className = "flex items-center gap-3 mb-4";

    const avatar = document.createElement("div");
    avatar.className = "w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl";
    avatar.textContent = "🏀";

    const nameGroup = document.createElement("div");

    const nameEl = document.createElement("p");
    nameEl.className = "font-medium text-text-primary";
    nameEl.textContent = player.displayName();

    const posEl = document.createElement("p");
    posEl.className = "text-xs text-text-muted";
    posEl.textContent = player.displayPos();

    nameGroup.appendChild(nameEl);
    nameGroup.appendChild(posEl);
    header.appendChild(avatar);
    header.appendChild(nameGroup);

    const heightSection = document.createElement("div");
    heightSection.className = "border-t border-border pt-3 mb-3";

    const heightLabel = document.createElement("p");
    heightLabel.className = "text-xs text-text-muted";
    heightLabel.textContent = "Height";

    const heightVal = document.createElement("p");
    heightVal.className = "font-medium text-text-primary";
    heightVal.textContent = player.displayHeight();

    heightSection.appendChild(heightLabel);
    heightSection.appendChild(heightVal);

    const statsGrid = document.createElement("div");
    statsGrid.className = "grid grid-cols-3 gap-2";

    const stats = [
      { label: "PTS", value: player.displayPts() },
      { label: "REB", value: player.displayRebs() },
      { label: "AST", value: player.displayAst() },
    ];

    stats.forEach(({ label, value }) => {
      const statBox = document.createElement("div");
      statBox.className = "bg-secondary rounded-lg p-2 text-center";

      const statLabel = document.createElement("p");
      statLabel.className = "text-xs text-text-muted";
      statLabel.textContent = label;

      const statVal = document.createElement("p");
      statVal.className = "text-xl font-medium text-text-primary";
      statVal.textContent = value;

      statBox.appendChild(statLabel);
      statBox.appendChild(statVal);
      statsGrid.appendChild(statBox);
    });

    card.appendChild(header);
    card.appendChild(heightSection);
    card.appendChild(statsGrid);
    cardContainer.appendChild(card);
  });
}
