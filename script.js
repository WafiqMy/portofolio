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
modal.addEventListener("click", (e) => {
  // jika klik langsung pada background modal (bukan konten)
  if (e.target === modal) {
    closeModal();
  }
});

/* ===================== ANIMASI PARTIKEL ===================== */
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = "rgba(167, 139, 250, 0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 80; i++) {
    let size = Math.random() * 2 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speedX = (Math.random() - 0.5) * 0.5;
    let speedY = (Math.random() - 0.5) * 0.5;
    particles.push(new Particle(x, y, size, speedX, speedY));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

initParticles();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});
