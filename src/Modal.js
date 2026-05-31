const openModalBtn = document.getElementById("add-team-btn");
const modal = document.getElementById("add-team-modal");

const closeModalBtn = document.getElementById("cancel-model-btn");
export function openModal() {
  openModalBtn.addEventListener("click", () => {
    modal.showModal();
    console.log("modal opened");
  });
}

export function closeModal() {
  closeModalBtn.addEventListener("click", () => {
    modal.close();
    console.log("closed");
  });
}
