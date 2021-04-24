// modal

const modalHandler = () => {
  modal.style.display = "block";
};
const modal = document.querySelector(".modal");

document.querySelector(".show-modal").addEventListener("click", modalHandler);
document
  .querySelector(".hide-modal")
  .addEventListener("click", () => (modal.style.display = "none"));
