// Optional JS animation on load
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 200);
  });
});
