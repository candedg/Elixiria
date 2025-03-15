// Traigo los botones de los filtros
const filtroHierbas = document.querySelector("#filtro-hierbas");
const filtroCristales = document.querySelector("#filtro-cristales");
const filtroAceites = document.querySelector("#filtro-aceites");
const filtroVelas = document.querySelector("#filtro-velas");
const filtroTodo = document.querySelector("#filtro-todo");

// Me traigo todas las cards segun categoria
const aceite = document.querySelectorAll(".aceite");
const hierba = document.querySelectorAll(".hierba");
const cristal = document.querySelectorAll(".cristal");
const vela = document.querySelectorAll(".vela");

// Función para ocultar todas las cards
function ocultarTodas() {
  const todasLasCards = [aceite, hierba, cristal, vela];
  console.log(todasLasCards);
  for (let i = 0; i < todasLasCards.length; i++) {
    for (let j = 0; j < todasLasCards[i].length; j++) {
      todasLasCards[i][j].style.display = "none";
    }
  }
}

// Función para mostrar solo una categoría
function mostrarCategoria(categoria) {
  ocultarTodas();
  for (let i = 0; i < categoria.length; i++) {
    categoria[i].style.display = "block";
  }
}

// Función para mostrar todo
function mostrarTodo() {
  const todasLasCards = [aceite, hierba, cristal, vela];
  for (let i = 0; i < todasLasCards.length; i++) {
    for (let j = 0; j < todasLasCards[i].length; j++) {
      todasLasCards[i][j].style.display = "block";
    }
  }
}

// LISTENERS
filtroHierbas.addEventListener("click", () => mostrarCategoria(hierba));
filtroCristales.addEventListener("click", () => mostrarCategoria(cristal));
filtroAceites.addEventListener("click", () => mostrarCategoria(aceite));
filtroVelas.addEventListener("click", () => mostrarCategoria(vela));
filtroTodo.addEventListener("click", mostrarTodo);
