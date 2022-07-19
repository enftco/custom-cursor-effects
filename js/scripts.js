const x = document.querySelector(".cursor--1");
const y = document.querySelector(".cursor--2");
const z = document.querySelector(".cursor--3");

document.addEventListener("mousemove", (w) => {
  x.style.left = w.clientX + "px",
    x.style.top = w.clientY + "px",
    y.style.left = w.clientX + "px",
    y.style.top = w.clientY + "px",
    z.style.left = w.clientX + "px",
    z.style.top = w.clientY + "px"
});

function addHover(x) {
  y.classList.add("hover"), z.classList.add("hover")
}

function removeHover(x) {
  y.classList.remove("hover"), z.classList.remove("hover")
}

for (let i = document.querySelectorAll(".hover__target"), a = i.length - 1; a >= 0; a--) {
  run(i[a])
}

function run(x) {
  x.addEventListener("mouseover", addHover), x.addEventListener("mouseout", removeHover)
}

document.addEventListener("DOMContentLoaded", () => {
  const hoverLink = document.querySelector(".img--1");
  const bodyChange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", (e) => {
    bodyChange.classList.add("img--1__wrap");
  });

  hoverLink.addEventListener("mouseleave", () => {
    bodyChange.classList.remove("img--1__wrap");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hoverLink = document.querySelector(".img--2");
  const bodyChange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", (e) => {
    bodyChange.classList.add("img--2__wrap");
  });

  hoverLink.addEventListener("mouseleave", () => {
    bodyChange.classList.remove("img--2__wrap");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hoverLink = document.querySelector(".img--3");
  const bodyChange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", (e) => {
    bodyChange.classList.add("img--3__wrap");
  });

  hoverLink.addEventListener("mouseleave", () => {
    bodyChange.classList.remove("img--3__wrap");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hoverLink = document.querySelector(".img--4");
  const bodyChange = document.querySelector("body");

  hoverLink.addEventListener("mouseenter", (e) => {
    bodyChange.classList.add("img--4__wrap");
  });

  hoverLink.addEventListener("mouseleave", () => {
    bodyChange.classList.remove("img--4__wrap");
  });
});
