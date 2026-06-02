import { Team } from "./Team.js";
import { closeModal } from "./Modal.js";

const form = document.getElementById("modal-form");
const teamInput = document.getElementById("team-name");
const cityInput = document.getElementById("team-city");
const submitBtn = document.getElementById("submit-team-button");
const sidebar = document.getElementById("team-sidebar-strips");
const teams = [];
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
  teams.forEach((team) => {
    const teamStrip = document.createElement("div");
    const teamCard = document.createElement("div");
    teamCard.className =
      "text-text-primary border rounded font-extrabold border-text-primary mb-2";
    teamCard.textContent = team.displayInfo();
    teamStrip.appendChild(teamCard);
    sidebar.appendChild(teamStrip);
  });
}
console.log(teams);
