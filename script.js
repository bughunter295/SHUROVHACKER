// Typing animation for header title
const text = "SUROV — CYBER SECURITY SPECIALIST";
const typingElement = document.querySelector(".typing");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter();

  // Animate progress bars after a short delay
  const progressBars = document.querySelectorAll(".progress-bar > div");
  setTimeout(() => {
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = width; // triggers transition for any preset widths
    });
  }, 1500);
});
