const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const toggle = document.getElementById("darkToggle");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");

hamburger.onclick = () => navMenu.classList.toggle("active");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};

function openModal(title, img) {
  modal.style.display = "flex";
  modalTitle.innerText = title;
  modalImg.src = img;
}

function closeModal() {
  modal.style.display = "none";
}
