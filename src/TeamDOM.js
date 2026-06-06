import { Team } from "./Team.js";
import { closeModal } from "./Modal.js";
import { displayPlayers } from "./PlayerDOM.js";
import { selecedTeam, setSelectedTeam } from "./state.js";
const teamInput = document.getElementById("team-name");
const cityInput = document.getElementById("team-city");
const submitBtn = document.getElementById("submit-team-button");
const sidebar = document.getElementById("team-sidebar-strips");
const teams = [];
let activeCard = null;
export function addTeam() {
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const teamName = teamInput.value;
    const teamCity = cityInput.value;
    const newTeam = new Team(teamName, teamCity);
    teams.push(newTeam);
    displayTeams();
    closeModal();
  });
}

export function displayTeams() {
  sidebar.textContent = "";
  teams.forEach((team, index) => {
    const teamStrip = document.createElement("div");
    const teamCard = document.createElement("div");
    const removeBtn = document.createElement("div");
    removeBtn.className = "shrink-0 cursor-pointer hover:text-red-400";
    removeBtn.type = "button";
    removeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      removeTeam(index);
    });
    teamCard.className =
      "card flex items-center justify-between px-3 py-2 mb-2 cursor-pointer hover:bg-surface-alt font-extrabold text-text-primary";
    const teamName = document.createElement("span");
    teamName.textContent = team.displayInfo();
    removeBtn.textContent = "❌";
    teamCard.addEventListener("click", () => {
      if (activeCard) activeCard.classList.remove("team-card-active");
      activeCard = teamCard;
      teamCard.classList.add("team-card-active");
      setSelectedTeam(team);
      displayPlayers();
    });
    teamCard.appendChild(teamName);
    teamCard.appendChild(removeBtn);
    teamStrip.appendChild(teamCard);

    sidebar.appendChild(teamStrip);
  });
}
export function removeTeam(index) {
  teams.splice(index, 1);
  setSelectedTeam(null);
  displayTeams();
  document.getElementById("card-container").innerHTML = "";
}
