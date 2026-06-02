const openModalBtn = document.getElementById("add-team-btn");
const modal = document.getElementById("add-team-modal");
const openPlayerModal = document.getElementById("generate-card-btn");
const cardModal = document.getElementById("add-player-modal");
const cancelCard = document.getElementById("cancel-card-btn");
const closeModalBtn = document.getElementById("cancel-model-btn");
export function openModal() {
  openModalBtn.addEventListener("click", () => {
    modal.showModal();
    console.log("modal opened");
  });
}

export function closeModalButton() {
  closeModalBtn.addEventListener("click", () => {
    modal.close();
    console.log("closed");
  });
}
export function cancelCardBtn() {
  cancelCard.addEventListener("click", () => {
    cardModal.close();
  });
}
export function closeModal() {
  modal.close();
}

export function openCardModal() {
  openPlayerModal.addEventListener("click", () => {
    cardModal.showModal();
    console.log("modal opened");
  });
}
