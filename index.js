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

  const liEls=document.querySelectorAll(".lista li");
  liEls.forEach(e =>e.remove())

  cosasQueAprendimos.forEach(e=>{
    const nuevoLiEl=document.createElement("li")
    nuevoLiEl.textContent=e.tema
    if(e.class){

      nuevoLiEl.classList.add(e.class);
    }
    const listaEl=document.querySelector(".lista")
    listaEl.appendChild(nuevoLiEl)

  })
}

main();
