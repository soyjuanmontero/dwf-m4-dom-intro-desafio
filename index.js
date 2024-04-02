const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listasEl = document.querySelectorAll(".lista li");
  const lista = document.querySelector(".lista");
  listasEl.forEach((e) => {
    e.remove();
  });

  for (const el of cosasQueAprendimos) {
    console.log(el);
    const liEl = document.createElement("li");
    liEl.textContent = el.tema;
    if (el.class == "special") {
      liEl.classList.add(el.class);
    } else {
    }
    lista.appendChild(liEl);
  }
}

main();
