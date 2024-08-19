/* ********************* EFEITO ESTRELAS BACKGROUND ********************* */

// Define o número de estrelas
const numberOfStars = 100;

// Função para gerar um número aleatório entre min e max
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Seleciona o container para adicionar as estrelas
const container = document.body;

for (let i = 0; i < numberOfStars; i++) {
  // Cria um novo elemento span
  const star = document.createElement("span");
  star.classList.add("star");

  // Define uma posição aleatória
  const xPos = getRandom(0, window.innerWidth);
  const yPos = getRandom(0, window.innerHeight);

  // Define a posição
  star.style.left = `${xPos}px`;
  star.style.top = `${yPos}px`;

  // Define uma duração de animação aleatória entre 5s e 15s
  const animationDuration = getRandom(5, 15);
  star.style.animationDuration = `${animationDuration}s`;

  // Adiciona a estrela ao container
  container.appendChild(star);
}

/* ********************* BOTÃO DE ALTERAR TEMA ********************* */

const chk = document.getElementById("chk");
const cabecalhoMenuLink = document.querySelectorAll(".cabecalho__menu__link");
const tituloDestaque = document.querySelectorAll(".titulo-destaque");
const apresentacaoLinksNavegacao = document.querySelectorAll(
  ".apresentacao__links__navegacao"
);

chk.addEventListener("change", () => {
  document.body.classList.toggle("clear");
  cabecalhoMenuLink.forEach((link) => link.classList.toggle("clear"));
  tituloDestaque.forEach((titulo) => titulo.classList.toggle("clear"));
  apresentacaoLinksNavegacao.forEach((nav) => nav.classList.toggle("clear"));
});
