const revealItems = document.querySelectorAll(".section, .promise-card, .path-step, .tile, .ritual");

revealItems.forEach((item, index) => {
  item.classList.add("reveal");
  item.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 70}ms`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => observer.observe(item));

const button = document.querySelector(".heart-button");
const message = document.querySelector(".hidden-message");

const lines = [
  "Я люблю тебя. И хочу становиться лучше для нас.",
  "Ты для меня не просто человек рядом. Ты мой дом.",
  "Давай беречь друг друга даже в самые обычные дни."
];

let index = 0;

button.addEventListener("click", () => {
  message.classList.remove("message-pop");
  message.textContent = lines[index];
  void message.offsetWidth;
  message.classList.add("message-pop");
  index = (index + 1) % lines.length;
});
